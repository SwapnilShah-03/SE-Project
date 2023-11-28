import User from "../Models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Poperty from "../Models/Properties.js";
import Seeker from "../Models/Seeker.js";

function calculateDaysDifference(startDate, endDate) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
  return diffDays;
}

function parseDateString(dateString) {
  const [day, month, year] = dateString.split("/").map(Number);
  const parsedDate = new Date(year + 2000, month - 1, day);

  if (isNaN(parsedDate.getTime())) {
    return false;
  }

  return parsedDate;
}
function isDatePeriodNotPresent(datePeriod, dateRanges) {
  const [periodStartDate, periodEndDate] = datePeriod.map(parseDateString);
  for (const range of dateRanges) {
    const [rangeStartDate, rangeEndDate] = range.map(parseDateString);
    if (
      periodStartDate >= rangeEndDate + 1 ||
      periodEndDate <= rangeStartDate - 1
    ) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

const dateVerification = async (req, res) => {
  const { sdate, edate, propertyName } = req.body;
  if (parseDateString(sdate) && parseDateString(edate)) {
    const data = await Poperty.findOne({ name: propertyName });
    const bookings = data.bookings;
    const d = [];
    for (const booking of bookings) {
      console.log([booking.d[0].sdate, booking.d[0].edate]);
      d.push([booking.d[0].sdate, booking.d[0].edate]);
    }
    console.log(d);
    const sd = [sdate, edate];
    if (isDatePeriodNotPresent(sd, d)) {
      res.json(true);
    } else {
      res.json(false);
    }
  } else {
    res.json(false);
  }
};

const booking = async (req, res) => {
  const { sdate, edate, propertyName, name } = req.body;
  const data = await Poperty.findOne({ name: propertyName });
  const bookings = data.bookings;
  const d = [];
  for (const booking of bookings) {
    d.push(booking);
  }
  const rent = data.rent;
  const days =
    calculateDaysDifference(parseDateString(sdate), parseDateString(edate)) + 1;
  const price = days * rent;
  const booking = {
    d: [{ sdate: sdate, edate: edate }],
    days: days,
    Price: price,
  };
  d.push(booking);
  const update = await Poperty.updateOne(
    { name: propertyName },
    { $set: { bookings: d } }
  );
  const seeker = await Seeker.findOne({ name: name });
  const sbooking = seeker.bookings;
  const b = [];
  for (const book of sbooking) {
    b.push(book);
  }
  b.push({
    property: propertyName,
    days: days,
    sdate: sdate,
    edate: edate,
    amt: price,
  });
  const updateseeker = await Poperty.updateOne(
    { name: name },
    { $set: { bookings: b } }
  );
  console.log(updateseeker);
  res.json("Added");
};

const search = async (req, res) => {
  const data = await Poperty.find();
  res.json(data);
};

const filter = async (req, res) => {
  const { location, area } = req.body;
  const data = await Poperty.find({ location: location, propertytype: area });
  console.log(data);
  res.json(data);
};

const addProperty = async (req, res) => {
  const { name, propertytype, owner, rent, location } = req.body;
  const portfolio1 = await Poperty.create({
    name: name,
    propertytype: propertytype,
    owner: owner,
    bookings: [],
    rent: rent,
    location: location,
    reviews: [],
  });
  console.log(portfolio1);
};

const addSeeker = async (req, res) => {
  const { name } = req.body;
  const portfolio1 = await Seeker.create({
    name: name,
    bookings: [],
  });
  res.json("Added");
};

const addReview = async (req, res) => {
  const { propertyName, name, review } = req.body;
  const data = await Poperty.findOne({ name: propertyName });
  const reviews = data.reviews;
  const d = [];
  for (const review of reviews) {
    d.push(review);
  }
  d.push({ name: name, review: review });
  const update = await Poperty.updateOne(
    { name: propertyName },
    { $set: { reviews: d } }
  );
  res.json("Review Added");
};

export {
  dateVerification,
  booking,
  search,
  filter,
  addProperty,
  addSeeker,
  addReview,
};

import User from "../Models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Movie from "../Models/Movie.js";
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
  const { sdate, edate, movieTitle } = req.body;
  if (parseDateString(sdate) && parseDateString(edate)) {
    const data = await Movie.findOne({ title: movieTitle });
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
  const { movieTitle } = req.body;
  const data = await Movie.findOne({ title: movieTitle });
  const bookings = data.bookings;
  const d = [];
  for (const booking of bookings) {
    d.push(booking);
  }

  const booking = {
    seat: 1,
    Price: data.price,
  };
  d.push(booking);
  const update = await Movie.updateOne(
    { title: movieTitle },
    { $set: { bookings: d } }
  );
  res.json("Booking Done");
};

const search = async (req, res) => {
  const data = await Movie.find();
  res.status(200).json(data);
};

const filter = async (req, res) => {
  const { cinemaLocation, genre } = req.body;
  const data = await Movie.find({
    cinemaLocation: cinemaLocation,
    genre: genre,
  });
  console.log(data);
  res.json(data);
};

const addMovie = async (req, res) => {
  const { title, genre, director, price, cinemaLocation } = req.body;
  const portfolio1 = await Movie.create({
    title: title,
    genre: genre,
    director: director,
    bookings: [],
    price: price,
    cinemaLocation: cinemaLocation,
    reviews: [],
  });
  console.log(portfolio1);
  res.json("Property Added Succesfully");
};

const addSeeker = async (req, res) => {
  const { title } = req.body;
  const portfolio1 = await Seeker.create({
    title: title,
    bookings: [],
  });
  res.json("Added");
};

const addReview = async (req, res) => {
  const { movieTitle, title, review } = req.body;
  const data = await Movie.findOne({ title: movieTitle });
  const reviews = data.reviews;
  const d = [];
  for (const review of reviews) {
    d.push(review);
  }
  d.push({ title: title, review: review });
  const update = await Movie.updateOne(
    { title: movieTitle },
    { $set: { reviews: d } }
  );
  res.json("Review Added");
};

export {
  dateVerification,
  booking,
  search,
  filter,
  addMovie,
  addSeeker,
  addReview,
};

import mongoose from "mongoose";

const propertiesSchema = mongoose.Schema({
  title: { type: String, unique: true },
  genre: String,
  director: String,
  bookings: [{ seat: String, ticketPrice: Number }],
  price: Number,
  cinemaLocation: String,
  reviews: [{ name: String, review: String }],
});

const PropertyModel = mongoose.model("property", propertiesSchema);
export default PropertyModel;

import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  title: { type: String, unique: true },
  genre: String,
  director: String,
  bookings: [{ seat: String, ticketPrice: Number }],
  price: Number,
  cinemaLocation: String,
  reviews: [{ name: String, review: String }],
});

const MovieModel = mongoose.model("movie", movieSchema);
export default MovieModel;

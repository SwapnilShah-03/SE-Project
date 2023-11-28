import mongoose from "mongoose";

const propertiesSchema = mongoose.Schema({
  name: { type: String, unique: true },
  propertytype: String,
  owner: String,
  bookings: [
    { d: [{ sdate: String, edate: String }], days: Number, Price: Number },
  ],
  rent: Number,
  location: String,
  reviews: [{ name: String, review: String }],
});

const PopertyModel = mongoose.model("property", propertiesSchema);
export default PopertyModel;

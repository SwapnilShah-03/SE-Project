import express from "express";
import mongoose from "mongoose";

const seekerSchema = mongoose.Schema({
  name: { type: String, unique: true },
  bookings: [
    { property: String, days: Number, sdate: Date, edate: Date, amt: Number },
  ],
});

const SeekerModel = mongoose.model("seeker", seekerSchema);

export default SeekerModel;

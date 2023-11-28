import express from "express";
import {
  addMovie,
  addReview,
  search,
  booking,
  dates,
  addSeeker,
  filter,
} from "../Controllers/Client.js";

const router = express.Router();

router.get("/booking", booking);
router.get("/addReview", addReview);
router.get("/search", search);
router.get("/addMovie", addMovie);
router.get("/dates", dates);
router.get("/addSeeker", addSeeker);
router.get("/filter", filter);
export default router;

import express from "express";

import {
  dateVerification,
  booking,
  search,
  filter,
  addProperty,
  addSeeker,
  addReview,
} from "../Controllers/Server.js";

const router = express.Router();
router.post("/dates", dateVerification);
router.post("/booking", booking);
router.get("/search", search);
router.post("/filter", filter);
router.post("/addProperty", addProperty);
router.post("/addSeeker", addSeeker);
router.post("/addReview", addReview);
export default router;

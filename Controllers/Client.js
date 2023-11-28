import User from "../Models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Movie from "../Models/Movie.js";
import Seeker from "../Models/Seeker.js";
import axios from "axios";

const booking = async (req, res) => {
  const url = "http://localhost:3000/server/booking";
  const data = {
    movieTitle: "Zindagi Na Milegi Dobara",
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Response:", responseData);
    })
    .catch((error) => {
      console.error("Error making POST request:", error.message);
    });
};

const addReview = async (req, res) => {
  // function onsubmit  = (event)=>{
  //   event.preventDefault();
  const url = "http://localhost:3000/server/addReview";
  const data = {
    movieTitle: "The Smurfs",
    name: "Swapnil",
    review: "Bahut achhi movie thi",
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Response:", responseData);
    })
    .catch((error) => {
      console.error("Error making POST request:", error.message);
    });
  // };
  // res.render("review");
};

const search = async (req, res) => {
  const url = "http://localhost:3000/server/search";
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Response:", responseData);
    })
    .catch((error) => {
      console.error("Error making POST request:", error.message);
    });
};
// title, genre, director, price, cinemaLocation
const addMovie = async (req, res) => {
  const url = "http://localhost:3000/server/addMovie";
  const data = {
    title: "The Smurfs",
    genre: "Animation",
    director: "Dev",
    price: 220,
    cinemaLocation: "Parel",
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Response:", responseData);
    })
    .catch((error) => {
      console.error("Error making POST request:", error.message);
    });
  res.render("sample");
};

const dates = async (req, res) => {
  const url = "http://localhost:3000/server/dates";
  const data = {
    sdate: "8/4/23",
    edate: "11/4/23",
    movieTitle: "Black Widow",
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Response:", responseData);
    })
    .catch((error) => {
      console.error("Error making POST request:", error.message);
    });
};

const addSeeker = async (req, res) => {
  const url = "http://localhost:3000/server/addSeeker";
  const data = {
    name: "Tathagat",
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Response:", responseData);
    })
    .catch((error) => {
      console.error("Error making POST request:", error.message);
    });
};

const filter = async (req, res) => {
  const url = "http://localhost:3000/server/filter";
  const data = {
    cinemaLocation: "Dadar",
    genre: "Action, Adventure, Sci-Fi",
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Response:", responseData);
    })
    .catch((error) => {
      console.error("Error making POST request:", error.message);
    });
};

export { addMovie, addReview, search, booking, dates, addSeeker, filter };

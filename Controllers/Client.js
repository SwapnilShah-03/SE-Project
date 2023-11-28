import User from "../Models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Poperty from "../Models/Properties.js";
import Seeker from "../Models/Seeker.js";
import axios from "axios";
const booking = async (req, res) => {
  const url = "http://localhost:3000/server/booking";
  const data = {
    sdate: "7/4/23",
    edate: "10/4/23",
    propertyName: "New Apartments",
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

const addReview = async (req, res) => {
  // function onsubmit  = (event)=>{
  //   event.preventDefault();
  const url = "http://localhost:3000/server/addReview";
  const data = {
    propertyName: "New Apartments",
    name: "Tathagat",
    review: "Nice Flat",
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

const addProperty = async (req, res) => {
  const url = "http://localhost:3000/server/addProperty";
  const data = {
    name: "New Apartments",
    propertytype: "1BHK",
    owner: "Swapnil",
    rent: 5000,
    location: "Dadar",
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
    propertyName: "New Apartments",
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
    location: "Dadar",
    area: "1BHK",
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

export { addProperty, addReview, search, booking, dates, addSeeker, filter };

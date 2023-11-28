import chai from "chai";
import chaiHttp from "chai-http";

const { expect } = chai;

chai.use(chaiHttp);

describe("Online Room Rental System", function () {
  // Test Booking

  describe("Booking", function () {
    it("Method: post() -> It should successfully book movie ticket", (done) => {
      chai
        .request("http://localhost:3000/server")
        .post("/booking")
        .send({
          movieTitle: "The Smurfs",
        })
        .end((err, res) => {
          expect(res.body).to.equal("Booking Done"); // Assuming your response has a 'message' property
          done();
        });
    });
  });

  // Test Adding Review
  describe("Add Review", function () {
    it("Method: post() -> It should successfully addReview", (done) => {
      chai
        .request("http://localhost:3000/server")
        .post("/addReview")
        .send({
          movieTitle: "Black Widow",
          name: "Aryan",
          review: "Nice Movie!!",
        })
        .end((err, res) => {
          expect(res.body).to.equal("Review Added"); // Assuming your response has a 'message' property
          done();
        });
    });
  });

  // Test Adding Movie
  describe("Add Property", function () {
    it("Method: post() -> It should successfully add Movie", (done) => {
      chai
        .request("http://localhost:3000/server")
        .post("/addMovie")
        .send({
          title: "Baaghi 2",
          genre: "Comedy",
          director: "Aryan",
          price: 400,
          cinemaLocation: "Mahalaxmi",
        })
        .end((err, res) => {
          expect(res.body).to.equal("Property Added Succesfully"); // Assuming your response has a 'message' property
          done();
        });
    });
  });

  // Test Searching Property
  describe("Testing Search Property", () => {
    it("Method: get() -> It should give property list", (done) => {
      chai
        .request("http://localhost:3000/server")
        .get("/search")
        .end((err, res) => {
          expect(res).to.have.status(200);

          done();
        });
    });
  });
});

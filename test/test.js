import chai from "chai";
import chaiHttp from "chai-http";

const { expect } = chai;

chai.use(chaiHttp);

describe("Online Room Rental System", function () {
  // Test Date Verification

  describe("Booking", function () {
    it("Method: post() -> It should successfully book property", (done) => {
      chai
        .request("http://localhost:3000/server")
        .post("/booking")
        .send({
          sdate: "7/4/23",
          edate: "10/4/23",
          propertyName: "New Apartments",
          name: "Tathagat",
        })
        .end((err, res) => {
          expect(res.body).to.equal("Booking Done"); // Assuming your response has a 'message' property
          done();
        });
    });
  });

  describe("Date Verification", function () {
    it("Method: post() -> It should return true for the dates", (done) => {
      chai
        .request("http://localhost:3000/server")
        .post("/dates")
        .send({
          sdate: "11/2/23",
          edate: "15/2/23",
          propertyName: "Angel Apt",
        })
        .end((err, res) => {
          expect(res.body).to.be.true; // Assuming your response has a 'result' property
          done();
        });
    });

    it("Method: post() -> It should return false for the dates", (done) => {
      chai
        .request("http://localhost:3000/server")
        .post("/dates")
        .send({
          sdate: "8/4/23",
          edate: "11/4/23",
          propertyName: "New Apartments",
        })
        .end((err, res) => {
          expect(res.body).to.be.false; // Assuming your response has a 'result' property
          done();
        });
    });
  });

  // Test Adding Review
  describe("Add Review", function () {
    it("Method: post() -> It should successfully add property", (done) => {
      chai
        .request("http://localhost:3000/server")
        .post("/addReview")
        .send({
          propertyName: "Angel Apt",
          name: "Dev",
          review: "Nice Flat",
        })
        .end((err, res) => {
          expect(res.body).to.equal("Review Added"); // Assuming your response has a 'message' property
          done();
        });
    });
  });

  // Test Adding Property
  describe("Add Property", function () {
    it("Method: post() -> It should successfully add property", (done) => {
      chai
        .request("http://localhost:3000/server")
        .post("/addProperty")
        .send({
          name: "Shanti Apt",
          propertytype: "2BHK",
          owner: "Swapnil",
          rent: 12000,
          location: "Borivali",
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
          // Add more assertions based on your actual response structure
          done();
        });
    });
  });
});

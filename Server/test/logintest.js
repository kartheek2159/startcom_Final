// const assert = require("assert");
// const login = require("../../src/pages/Auth/login_test");

// describe("Login", function () {
//   describe("#authenticate()", function () {
//     it("should return true if the username and password are valid", function () {
//       assert.equal(
//         login.authenticate("viraat.mvss@gmail.com", "password123"),true);
//     });

//     it("should return false if the username is invalid", function () {
//       assert.equal(login.authenticate("invalidusername", "password123"), false);
//     });

//     it("should return false if the password is invalid", function () {
//       assert.equal(login.authenticate("viraat.mvss@gmail.com", ""), true);
//     });
//   });
// });

// let chai = require("chai");
// let chaiHttp = require("chai-http");
// let server = require("../index.js");

import chai from "chai";
import chaiHttp from "chai-http";
import server from "../index.js";

//assertion style
chai.should();
chai.use(chaiHttp);

describe("Tasks API", () => {
  // test the GET route

  describe("GET /user", () => {
    it("it should get all the tasks", async () => {
      const response = await chai.request(server).get("/user");
      response.should.have.status(200);
      response.body.should.be.a("array");
    });
  });

  describe("POST /auth/login", () => {
    it("login testing", async () => {
      const loga = {
        username: "viraatm",
        password: "Viraat@123",
      };
      const res = await chai
        .request(server)
        .post("/auth/login")
        .send({ username: loga.username, password: loga.password });

      res.should.have.status(200);
      res.body.should.be.a("object");
      //   res.body.should.have.property("status", 200);

      //   res.body.should.have.property(
      //     "userId",
      //     post.userId
      //   );
      //   res.body.should.have.property("username", post.username);
      //   res.body.should.have.property(
      //     "desc",
      //     post.desc
      //   );
    });
  });
});

const { authenticateToken } = require("../auth/jwt");
const knex = require("../models/database");
exports.addState = (req, res) => {
  const stateData = {
    state: req.body.state,
  };
  knex("state")
    .insert(stateData)
    .then((data) => {
      res.send(stateData);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.adddistrictData = (req, res) => {
  const districtData = {
    district: req.body.district,
  };
  knex("district")
    .insert(districtData)
    .then((data) => {
      res.send(districtData);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addchildData = (req, res) => {
  const childData = {
      childName: req.body.childName,
      FatherName: req.body.FatherName,
      dateOfBirth: req.body.dateOfBirth,
      motherName: req.body.motherName,
      sex: req.body.sex,
      state: req.body.state,
      district: req.body.district,
  };
  knex("childData")
    .insert(childData)
    .then((data) => {
      res.send(childData);
    })
    .catch((err) => {
      console.log(err);
    });
};


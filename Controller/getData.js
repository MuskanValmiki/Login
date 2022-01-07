const { authenticateToken } = require("../auth/jwt");
const knex=require("../models/database")
exports.state=(req, res) => {
      knex
        .select("*")
        .from("state")
        .then((data) => {
          res.status(200).json({ message: data });
        })
        .catch((err) => {
          res.status(404).json({ message: err.message });
        });
    }


exports.childData =(req, res) => {
      knex
        .select("*")
        .from("childData")
        .then((data) => {
          res.status(200).json({ message: data });
        })
        .catch((err) => {
          res.status(404).json({ message: err.message });
        });
    }
exports.district=(req, res) => {
  knex
    .select("*")
    .from("district")
    .then((data) => {
      res.status(200).json({ message: data });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
}



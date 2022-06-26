const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const api = require("express").Router();

api.get("/notes", (req, res) => {
  res.json("../db/db.json");
});

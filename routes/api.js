const api = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const notes = require("../Develop/db/db.json");
const { response } = require("express");

currentNote = notes.length;

api.get("/api/notes", (req, res) => {
  res.json("../Develop/db/db.json");
});

api.post("/api/notes", (req, res) => {
  console.log(req.body);

  const newNote = req.body;
  newNote.id = uuidv4();

  let data = JSON.parse(fs.readFileSync(notes, "utf8"));

  data.push(newNote);

  fs.writeFileSync(notes, JSON.stringify(data));

  console.log("Successfully added new note");

  res.json(data);
});

module.exports = api;

const api = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const db = require("../db/db.json");

api.get("/notes", (req, res) => {
  res.json(notes);
});

api.post("/notes", (req, res) => {
  console.log(req.body);

  const newNote = req.body;
  newNote.id = uuidv4();

  let data = JSON.parse(fs.readFileSync(db, "utf8"));

  data.push(newNote);

  fs.writeFileSync(notes, JSON.stringify(data));

  console.log("Successfully added new note");

  res.json(data);
});

api.delete("/notes/:id", (req, res) => {
  let deleteNote = request.params.id.toString();

  let data = JSON.parse(fs.readFileSync(db, "utf8"));

  const newData = data.filter((note) => note.id.toString() !== deleteNote);

  fs.writeFileSync(db, JSON.stringify(newData));

  res.json(newData);
});

module.exports = api;

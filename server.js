const express = require("express");
// const html = require("./routes/html");
const html = require("./routes/html");
const api = require("./routes/api");

const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api", api);
// app.use("/html", html);
app.use("./routes/api", api);
app.use("./routes/html", html);

app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

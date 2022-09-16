const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//used in production to serve frontend files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "frontend", "build", "index.html")
    );
  });
}

const dbURI = config.get("MONGO_URI");
const port = process.env.PORT || 4000;

mongoose
  .connect(dbURI)
  .then(() => console.log(`MongoDB successfully connected...`))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Listening on port ${port}...`));

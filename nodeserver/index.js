const express = require("express");
const app = express();
var path = require("path");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoDb = require("./database/db");
const bookRoute = require("./routes/book.routes");

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoDb.db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected ");
    },
    (error) => {
      console.log("Database error: " + error);
    }
  );

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// Static directory path
app.use(express.static(path.join(__dirname, "dist/CRUDapp")));

// API root
app.use("/api", bookRoute);

// Base Route
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});

// PORT
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});

// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/CRUDapp/index.html"));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

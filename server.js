const express = require("express");
const app = express();
const path = require("path");
const PORT = 9000;
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set View Engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// import controller
const carsController = require("./controllers/controllers");
const carsService = require("./services/carsService");

// endpoint crud
app.post("/add", carsController.create);
app.post("/edit/:id", carsController.update);
app.get("/getById/:id", carsController.getById);
app.post("/delete-car/:id", carsController.deleteCar);

// get endpoint ejs -----------------
app.get("/", carsController.renderCars);

app.get("/add", (req, res) => {
  res.render("add", {
    title: "Challenge 5 || Add New Car",
  });
});

app.get("/edit/:id", carsController.renderGetById);
// -----------------------------------

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});

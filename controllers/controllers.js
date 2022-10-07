const carsService = require("../services/carsService");

const getAll = async (req, res) => {
  const getCars = await carsService.getAll();
  return getCars;
};

const create = async (req, res) => {
  const { name, price, size, photo } = req.body;

  const createdUser = await carsService.create({
    name,
    price,
    size,
    photo,
  });
  res.redirect("/");
};

const update = async (req, res) => {
  console.log("berhasil");
  const { name, price, size, photo } = req.body;
  const { id } = req.params;

  const updatedCar = await carsService.update({ id, name, price, size, photo });

  res.redirect("/");
};

const getById = async (req, res) => {
  const { id } = req.params;
  const getByCarsId = await carsService.getById({ id });

  res.send(getByCarsId);
};

const deleteCar = async (req, res) => {
  const { id } = req.params;
  const deletedByCarId = await carsService.deleteCar({ id });

  res.redirect("/");
};

const renderCars = async (req, res) => {
  const { id } = req.params;
  const getCars = await carsService.getAll({ id });
  res.render("main-layout", {
    title: "Challenge 5 || Car Management Dashbord",
    cars: getCars,
  });
};

const renderGetById = async (req, res) => {
  const { id } = req.params;
  // console.log(req.param);
  const car = await carsService.getById({ id });
  console.log(car.size);

  res.render("edit", {
    title: "Challenge 5 || Update Car",
    car: car,
  });
};

module.exports = {
  getAll,
  create,
  update,
  getById,
  deleteCar,
  renderGetById,
  renderCars,
};

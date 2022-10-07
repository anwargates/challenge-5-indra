const { cars } = require("../models");

class CarsRepository {
  static async getAll() {
    const getCars = cars.findAll();

    return getCars;
  }

  static async create({ name, price, size, photo }) {
    const createdCar = cars.create({
      name,
      price,
      size,
      photo,
    });

    return createdCar;
  }

  static async update({ id, name, price, size, photo }) {
    const Id = {
      where: { id },
    };
    const updatedCar = cars.update(
      {
        name,
        price,
        size,
        photo,
      },
      Id
    );

    return updatedCar;
  }

  static async getById({ id }) {
    const getByCarsId = await cars.findOne({
      where: {
        id,
      },
    });
    return getByCarsId;
  }

  static async deleteCar({ id }) {
    const deletedByCarId = cars.destroy({
      where: { id },
    });

    return deletedByCarId;
  }
}

module.exports = CarsRepository;

const carsRepository = require("../repositories/carsRepo");

class UsersService {
  static async getAll() {
    const getCars = await carsRepository.getAll();

    return getCars;
  }

  static async create({ name, price, size, photo }) {
    const createdCars = await carsRepository.create({
      name,
      price,
      size,
      photo,
    });

    return createdCars;
  }

  static async update({ id, name, price, size, photo }) {
    console.log("berhasil");
    // Memanggil Repository
    const updatedCar = await carsRepository.update({
      id,
      name,
      price,
      size,
      photo,
    });

    return updatedCar;
  }

  static async getById({ id }) {
    const getByCarsId = await carsRepository.getById({ id });
    return getByCarsId;
  }

  static async getBySize({ size }) {
    const getByCarsSize = await carsRepository.getBySize({ size });
    return getByCarsSize;
  }

  static async deleteCar({ id }) {
    const deletedByCarId = await carsRepository.deleteCar({ id });
    return deletedByCarId;
  }
}

module.exports = UsersService;

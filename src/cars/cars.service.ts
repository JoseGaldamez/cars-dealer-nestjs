import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { ICar } from './interfaces/car.interface';
import { CreateCarDTO, UpdateCarDTO } from './dto';

@Injectable()
export class CarsService {
  private cars: ICar[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Yaris',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Focus',
    },
  ];

  findAll() {
    return this.cars;
  }
  findOneByID(id: string) {
    const carFound = this.cars.find((car) => car.id === id);
    if (!carFound) throw new NotFoundException(`Car with ID '${id}' not found`);
    return carFound;
  }

  create(car: CreateCarDTO): ICar {
    const newCar: ICar = { ...car, id: uuid() };

    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, car: UpdateCarDTO) {
    const carFound = this.findOneByID(id);
    const index = this.cars.findIndex((car) => car.id === id);
    this.cars[index] = { ...carFound, ...car, id };
    return this.cars[index];
  }

  delete(id: string) {
    const carFound = this.findOneByID(id);
    const index = this.cars.findIndex((car) => car.id === id);
    this.cars.splice(index, 1);
    return {
      message: `Car with ID '${id}' deleted`,
      carInfo: carFound,
    };
  }
}

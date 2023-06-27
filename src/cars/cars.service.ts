import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Yaris',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Focus',
    },
  ];

  findAll() {
    return this.cars;
  }
  findOneByID(id: number) {
    const carFound = this.cars.find((car) => car.id === id);
    if (!carFound) throw new NotFoundException(`Car with ID '${id}' not found`);
    return carFound;
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarByID(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.findOneByID(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return {
      body,
      method: 'POST',
    };
  }

  @Patch()
  updateCar(@Body() body: any) {
    return {
      body,
      method: 'PATCH',
    };
  }

  @Delete(':id')
  deleteCarByID(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
      method: 'DELETE',
    };
  }
}

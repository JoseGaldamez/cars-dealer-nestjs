import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      ...createBrandDto,
      id: uuid(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with ID '${id}' not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand: Brand = this.findOne(id);
    const index = this.brands.findIndex((brand) => brand.id === id);
    this.brands[index] = { ...brand, ...updateBrandDto, id };
    return {
      message: `Brand with ID '${id}' updated`,
      oldBrandInfo: brand,
      newBrandInfo: this.brands[index],
    };
  }

  remove(id: string) {
    const brand = this.findOne(id);
    const index = this.brands.findIndex((brand) => brand.id === id);
    this.brands.splice(index, 1);
    return {
      message: `Brand with ID '${id}' deleted`,
      brandInfo: brand,
    };
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}

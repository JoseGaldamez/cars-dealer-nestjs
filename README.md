<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Car Dealer API

## Description

A little API to manage a car dealer made with NestJS to learn the framework.

## Installation

```
$ npm install
```

## Running the app

```
# development
$ npm run start

# watch mode
$ npm run start:dev
```

---

## Endponits

---

## Cars

### Get all cars

```
http://localhost:3000/cars
```

### Get a car by id

```
http://localhost:3000/cars/:id
```

### Create a car

```
http://localhost:3000/cars
```

```
{
  "brand": "string",
  "model": "string",
}
```

### Update a car

```
http://localhost:3000/cars/:id
```

```
{
  "brand": "string",
  "model": "string",
}
```

### Delete a car

```
http://localhost:3000/cars/:id
```

---

## Brands

### Get all brands

```
http://localhost:3000/brands
```

### Get a brand by id

```
http://localhost:3000/brands/:id
```

### Create a brand

```
http://localhost:3000/brands
```

```
{
  "name": "string",
}
```

### Update a brand

```
http://localhost:3000/brands/:id
```

```
{
  "name": "string",
}
```

### Delete a brand

```
http://localhost:3000/brands/:id
```

---

## Seed

Populate DB

```
http://localhost:3000/seed
```

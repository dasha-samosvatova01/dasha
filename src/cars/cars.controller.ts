import {Body, Controller, Get, Post} from '@nestjs/common';
import {CarsService} from "./cars.service";
import {CreateCarDto} from "./dto/create-car.dto";


@Controller('cars')
export class CarsController {

    constructor(private carsService: CarsService) {
    }

    @Post()
    create(@Body() carDto: CreateCarDto) {
        return this.carsService.createCar(carDto);
    }

    @Get()
    getAll() {
        return this.carsService.getAllCars();
    }
}

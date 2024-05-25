import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Car} from "./cars.model";

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  imports: [
    SequelizeModule.forFeature([Car])
  ]
})
export class CarsModule {}

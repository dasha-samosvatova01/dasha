import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Employee} from "./employees.model";

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService],
  imports: [
    SequelizeModule.forFeature([Employee])
  ]
})
export class EmployeesModule {}

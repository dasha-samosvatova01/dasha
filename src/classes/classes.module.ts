import { Module } from '@nestjs/common';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Classes} from "./classes.model";

@Module({
  controllers: [ClassesController],
  providers: [ClassesService],
  imports: [
    SequelizeModule.forFeature([Classes])
  ]
})
export class ClassesModule {}

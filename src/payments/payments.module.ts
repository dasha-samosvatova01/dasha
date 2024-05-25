import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Payment} from "./payments.model";


@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
  imports: [
    SequelizeModule.forFeature([Payment])
  ]
})
export class PaymentsModule {}

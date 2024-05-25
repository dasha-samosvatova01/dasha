import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Payment} from "./payments.model";
import {CreatePaymentDto} from "./dto/create-payment.dto";

@Injectable()
export class PaymentsService {

    constructor(@InjectModel(Payment) private paymentRepository: typeof Payment) {

    }

    async createPayment(dto: CreatePaymentDto) {
        const payment = await this.paymentRepository.create(dto);
        return payment;
    }

    async getAllPayments() {
        const payments = await this.paymentRepository.findAll();
        return payments;
    }
}

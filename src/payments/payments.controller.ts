import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreatePaymentDto} from "./dto/create-payment.dto";
import {PaymentsService} from "./payments.service";

@Controller('payments')
export class PaymentsController {

    constructor(private paymentsService: PaymentsService) {
    }

    @Post()
    create(@Body() paymentDto: CreatePaymentDto) {
        return this.paymentsService.createPayment(paymentDto);
    }

    @Get()
    getAll() {
        return this.paymentsService.getAllPayments();
    }
}

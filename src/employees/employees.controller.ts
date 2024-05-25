import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateEmployeeDto} from "./dto/create-employee.dto";
import {EmployeesService} from "./employees.service";

@Controller('employees')
export class EmployeesController {

    constructor(private employeesService: EmployeesService) {}


    @Post()
    create(@Body() employeeDto: CreateEmployeeDto) {
        return this.employeesService.createEmployee(employeeDto);
    }

    @Get()
    getAll() {
        return this.employeesService.getAllEmployees();
    }
}







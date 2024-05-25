import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Employee} from "./employees.model";
import {CreateEmployeeDto} from "./dto/create-employee.dto";

@Injectable()
export class EmployeesService {

    constructor(@InjectModel(Employee) private EmployeeRepository: typeof Employee) {

    }
    async createEmployee(dto: CreateEmployeeDto) {
        const employee = await this.EmployeeRepository.create(dto);
        return employee;
    }

    async getAllEmployees() {
        const employees = await this.EmployeeRepository.findAll();
        return employees;
    }
}

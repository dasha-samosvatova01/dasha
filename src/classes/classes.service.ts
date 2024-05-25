import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Classes} from "./classes.model";
import {CreateClassDto} from "./dto/create-class.dto";

@Injectable()
export class ClassesService {

    constructor(@InjectModel(Classes) private ClassRepository: typeof Classes) {
    }
    async createClass(dto: CreateClassDto) {
        const classes = await this.ClassRepository.create(dto);
        return classes;
    }

    async getAllClasses() {
        const classes = await this.ClassRepository.findAll();
        return classes;
    }
}

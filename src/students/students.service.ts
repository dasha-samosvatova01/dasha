import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Student} from "./students.model";
import {CreateStudentDto} from "./dto/create-student.dto";

@Injectable()
export class StudentsService {

    constructor(@InjectModel(Student) private studentRepository: typeof Student) {

    }

    async createStudent(dto: CreateStudentDto) {
        const student = await this.studentRepository.create(dto);
        return student;
    }

    async getAllStudents() {
        const students = await this.studentRepository.findAll();
        return students;
    }
}

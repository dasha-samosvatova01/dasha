import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateStudentDto} from "./dto/create-student.dto";
import {StudentsService} from "./students.service";

@Controller('students')
export class StudentsController {

    constructor(private studentsService: StudentsService) {
    }

    @Post()
    create(@Body() studentDto: CreateStudentDto) {
        return this.studentsService.createStudent(studentDto);
    }

    @Get()
    getAll() {
        return this.studentsService.getAllStudents();
    }
}

import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateClassDto} from "./dto/create-class.dto";
import {ClassesService} from "./classes.service";

@Controller('classes')
export class ClassesController {

    constructor(private classesService: ClassesService) {}

    @Post()
    create(@Body() classDto: CreateClassDto) {
        return this.classesService.createClass(classDto);
    }

    @Get()
    getAll() {
        return this.classesService.getAllClasses();
    }
}

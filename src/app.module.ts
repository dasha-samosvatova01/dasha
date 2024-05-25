import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "node:process";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {UserRoles} from "./roles/user-roles.model";
import {Role} from "./roles/roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import {Post} from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { StudentsModule } from './students/students.module';
import * as path from 'path';
import {Student} from "./students/students.model";
import { EmployeesModule } from './employees/employees.module';
import {Employee} from "./employees/employees.model";
import { ClassesModule } from './classes/classes.module';
import {Classes} from "./classes/classes.model";
import { CarsModule } from './cars/cars.module';
import {Car} from "./cars/cars.model";
import { PaymentsModule } from './payments/payments.module';
import {Payment} from "./payments/payments.model";

@Module( {
controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve( __dirname,'static'),
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Post, Student, Employee, Classes, Car, Payment],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
        StudentsModule,
        EmployeesModule,
        ClassesModule,
        CarsModule,
        PaymentsModule,

    ]
})
export class AppModule {}
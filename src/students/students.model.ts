import {Column, DataType, Model, Table} from "sequelize-typescript";

interface StudentCreationAttrs {
    surname: string;
    name: string;
    gender: string;
    data: string;
    numb: number;
    series: number;
    SNILS: number;

}

@Table({tableName: 'students'})
export class Student extends Model<Student, StudentCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    surname: string;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    gender: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    data: string;

    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    numb: number;

    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    series: number;

    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    SNILS: number;

}
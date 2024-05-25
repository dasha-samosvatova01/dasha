import {Column, DataType, Model, Table} from "sequelize-typescript";

interface ClassCreationAttrs {
    date: string;
    class: string;
    employee: string;
    student: string;
    location: string;
    result: string;
}

@Table({tableName: 'classes'})
export class Classes extends Model<Classes, ClassCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true})
    date: string;

    @Column({type: DataType.STRING, allowNull: false})
    class: string;

    @Column({type: DataType.STRING, allowNull: false})
    employee: string;

    @Column({type: DataType.STRING, allowNull: false})
    student: string;

    @Column({type: DataType.STRING, allowNull: false})
    location: string;

    @Column({type: DataType.STRING, allowNull: false})
    result: string;
}
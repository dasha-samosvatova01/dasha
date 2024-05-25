import {Column, DataType, Model, Table} from "sequelize-typescript";

interface CarCreationAttrs {
    name: string;
    governmentnumber: string;
    brand: string;
    model: string;
    power: string;
    engine: string;
}

@Table({tableName: 'car'})
export class Car extends Model<Car, CarCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    governmentnumber: string;

    @Column({type: DataType.STRING, allowNull: false})
    brand: string;

    @Column({type: DataType.STRING, allowNull: false})
    model: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    power: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    engine: string;
}
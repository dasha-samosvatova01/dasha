import {Column, DataType, Model, Table} from "sequelize-typescript";

interface PaymentCreationAttrs {
    data: string;
    classes: string;
    payer: string;
    payerdetails: number;
}

@Table({tableName: 'payment'})
export class Payment extends Model<Payment, PaymentCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    data: string;

    @Column({type: DataType.STRING, allowNull: false})
    classes: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    payer: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    payerdetails: number;
}
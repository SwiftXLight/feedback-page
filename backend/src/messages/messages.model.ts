import { Column, DataType, Model, Table } from "sequelize-typescript";

interface messageCreationAttrs {
    name: string;
    email: string;
    message: string;
}

@Table({tableName: 'messages'})
export class Message extends Model<Message, messageCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    message: string;
}
import { ApiProperty } from "@nestjs/swagger";
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

    @ApiProperty({example: 'Artem', description: 'User name'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @ApiProperty({example: 'my_mail@gmail.com', description: 'User email'})
    @Column({type: DataType.STRING, allowNull: false})
    email: string;

    @ApiProperty({example: 'Good feedback!', description: 'Feedback message from user'})
    @Column({type: DataType.STRING, allowNull: false})
    message: string;
}
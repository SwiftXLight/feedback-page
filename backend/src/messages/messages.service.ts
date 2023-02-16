import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createMessageDto } from './dto/create-message.dto';
import { Message } from './messages.model';

@Injectable()
export class MessagesService {

    constructor(@InjectModel(Message) private MessageRepository: typeof Message) {}

    async getMessages(): Promise<any> {
        const messages = await this.MessageRepository.findAll();
        return messages;
    }

    async postMessage(dto: createMessageDto): Promise<any> {
        const message = await this.MessageRepository.create(dto);
        return message;
    }

}

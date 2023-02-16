import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createMessageDto } from './dto/create-message.dto';
import { updateMessageDto } from './dto/update-message.dto';
import { Message } from './messages.model';

@Injectable()
export class MessagesService {

    constructor(@InjectModel(Message) private MessageRepository: typeof Message) {}

    async getMessages(): Promise<any> {
        try {
            const msgs = await this.MessageRepository.findAll();
            return msgs;
        } catch(e) {
            return e.message;
        }
    }

    async postMessage(dto: createMessageDto): Promise<any> {
        try {
            const msg = await this.MessageRepository.create(dto);
            return msg;
        } catch(e) {
            return e.message;
        }
    }

    async getMessage(id: number) {
        try {
            const msg = await this.MessageRepository.findOne({where: {id}});
            if (msg) {
                return msg;
            } else {
                return `Can't find message with id ${id}`;
            }
        } catch(e) {
            return e.message;
        }
    }

    async deleteMessage(id: number) {
        try {
            const msg = await this.MessageRepository.destroy({where: {id}})
            if (msg === 1) {
                return `message with id ${id} was successfully deleted`
            } else if (msg === 0) {
                return "Id not found";
            }
        } catch(e) {
            return e.message;
        }
    }

    async updateMessage(id: number, messageDto: updateMessageDto) {
        try {
            const msg = await this.MessageRepository.update({ ...messageDto }, { where: {id}, returning: true })
            return msg;
        } catch(e) {
            return e.message;
        }
    }

}

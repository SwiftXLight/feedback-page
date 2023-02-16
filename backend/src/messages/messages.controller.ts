import { Controller, Get, Post, Delete, Patch, Body } from '@nestjs/common';
import { createMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(private messagesService: MessagesService) {}

    @Get()
    getMessages(): any {
      return this.messagesService.getMessages();
    }
  
    @Post()
    create(@Body() messageDto: createMessageDto) {
      return this.messagesService.postMessage(messageDto);
    }
  
}

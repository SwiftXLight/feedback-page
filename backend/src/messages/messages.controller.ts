import { Controller, Get, Post, Delete, Patch, Body } from '@nestjs/common';
import { createMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Message } from './messages.model';

@Controller('messages')
export class MessagesController {

    constructor(private messagesService: MessagesService) {}

    @ApiOperation({summary: 'Get all messages'})
    @ApiResponse({status: 200, type: [Message]})
    @Get()
    getMessages(): any {
      return this.messagesService.getMessages();
    }
  
    @ApiOperation({summary: 'Post message'})
    @ApiResponse({status: 200, type: Message})
    @Post()
    create(@Body() messageDto: createMessageDto) {
      return this.messagesService.postMessage(messageDto);
    }
  
}

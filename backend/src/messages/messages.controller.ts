import { Controller, Get, Post, Delete, Patch, Body, Param } from '@nestjs/common';
import { createMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Message } from './messages.model';
import { updateMessageDto } from './dto/update-message.dto';

@Controller("messages")
export class MessagesController {

    constructor(private messagesService: MessagesService) {}

    @ApiOperation({summary: "Get all messages"})
    @ApiResponse({status: 200, type: [Message]})
    @Get()
    getMessages(): any {
      return this.messagesService.getMessages();
    }
  
    @ApiOperation({summary: "Post message"})
    @ApiResponse({status: 200, type: Message})
    @Post()
    create(@Body() messageDto: createMessageDto) {
      return this.messagesService.postMessage(messageDto);
    }
    
    @ApiOperation({summary: "Getting certain message"})
    @ApiResponse({status: 200, type: [Message]})
    @Get("/:id")
    getOne(@Param("id") id: number) {
      return this.messagesService.getMessage(id);
    }

    @ApiOperation({summary: "Delete certain message"})
    @ApiResponse({status: 200, type: [Message]})
    @Delete("/:id")
    deleteOne(@Param("id") id: number) {
      return this.messagesService.deleteMessage(id);
    }

    @ApiOperation({summary: "Update certain message"})
    @ApiResponse({status: 200, type: [Message]})
    @Patch("/:id")
    updateOne(@Param("id") id: number, @Body() messageDto: updateMessageDto) {
      return this.messagesService.updateMessage(id, messageDto);
    }
}

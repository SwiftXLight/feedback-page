import { ApiProperty } from "@nestjs/swagger";

export class updateMessageDto {

    @ApiProperty({example: 'Artem', description: 'User name'})
    readonly name: string;

    @ApiProperty({example: 'my_mail@gmail.com', description: 'User email'})
    readonly email: string;

    @ApiProperty({example: 'Good feedback!', description: 'Feedback message from user'})
    readonly message: string;
}
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({ example: 'My Note' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Note content here', required: false })
  @IsString()
  @IsOptional()
  content?: string;
}

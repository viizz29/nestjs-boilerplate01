import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('notes')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('bearerAuth')
@Controller('v1/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a note' })
  create(@Body() dto: CreateNoteDto, @CurrentUser() user: { userId: string }) {
    return this.notesService.create(dto, user.userId);
  }

  @Get()
  @ApiOperation({ summary: 'List my notes' })
  findAll(@CurrentUser() user: { userId: string }) {
    return this.notesService.findAll(user.userId);
  }

  @Get(':note_id')
  @ApiOperation({ summary: 'Get a note by ID' })
  findOne(
    @Param('note_id') note_id: string,
    @CurrentUser() user: { userId: string },
  ) {
    return this.notesService.findOne(note_id, user.userId);
  }

  @Patch(':note_id')
  @ApiOperation({ summary: 'Update a note' })
  update(
    @Param('note_id') note_id: string,
    @Body() dto: UpdateNoteDto,
    @CurrentUser() user: { userId: string },
  ) {
    return this.notesService.update(note_id, dto, user.userId);
  }

  @Delete(':note_id')
  @ApiOperation({ summary: 'Delete a note' })
  remove(
    @Param('note_id') note_id: string,
    @CurrentUser() user: { userId: string },
  ) {
    return this.notesService.remove(note_id, user.userId);
  }
}

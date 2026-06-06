import { Injectable, NotFoundException } from '@nestjs/common';
import { NotesRepository } from './notes.repository';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(private readonly notesRepository: NotesRepository) {}

  async create(dto: CreateNoteDto, userId: string) {
    return this.notesRepository.create(dto, userId);
  }

  async findAll(userId: string) {
    return this.notesRepository.findByUser(userId);
  }

  async findOne(note_id: string, userId: string) {
    const note = await this.notesRepository.findById(note_id);
    if (!note) {
      throw new NotFoundException('Note not found');
    }
    if (note.user_id !== userId) {
      throw new NotFoundException('Note not found');
    }
    return note;
  }

  async update(note_id: string, dto: UpdateNoteDto, userId: string) {
    await this.findOne(note_id, userId);
    await this.notesRepository.update(note_id, dto);
    return this.notesRepository.findById(note_id);
  }

  async remove(note_id: string, userId: string) {
    await this.findOne(note_id, userId);
    await this.notesRepository.remove(note_id);
  }
}

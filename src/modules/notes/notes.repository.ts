import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Note } from './note.model';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesRepository {
  constructor(
    @InjectModel(Note)
    private noteModel: typeof Note,
  ) {}

  async create(dto: CreateNoteDto, userId: string): Promise<Note> {
    return this.noteModel.create({ ...dto, user_id: userId } as any);
  }

  async findAll(): Promise<Note[]> {
    return this.noteModel.findAll({
      attributes: ['note_id', 'user_id', 'title', 'content', 'created_at', 'updated_at'],
    });
  }

  async findById(note_id: string): Promise<Note | null> {
    return this.noteModel.findByPk(note_id);
  }

  async findByUser(user_id: string): Promise<Note[]> {
    return this.noteModel.findAll({ where: { user_id } });
  }

  async update(note_id: string, attrs: Partial<Note>): Promise<[number, Note[]]> {
    return this.noteModel.update(attrs, {
      where: { note_id },
      returning: true,
    });
  }

  async remove(note_id: string): Promise<void> {
    const note = await this.findById(note_id);
    if (note) {
      await note.destroy();
    }
  }
}

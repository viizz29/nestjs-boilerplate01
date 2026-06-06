import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note } from './note.model';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { NotesRepository } from './notes.repository';

@Module({
  imports: [SequelizeModule.forFeature([Note])],
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
  exports: [NotesRepository],
})
export class NotesModule {}

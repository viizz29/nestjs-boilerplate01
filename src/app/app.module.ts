import {
  DB_DATABASE,
  DB_PASSWORD,
  DB_USERNAME,
  FRONTEND_BUILD_PATH,
  SOCKETIO_ENDPOINT_ON,
} from '../config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../modules/auth/auth.module';
import { UsersModule } from '../modules/users/users.module';
import { NotesModule } from '../modules/notes/notes.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChatModule } from '../modules/chat/chat.module';
import { ServeStaticModule } from '@nestjs/serve-static';

const imports = [
  AuthModule,
  UsersModule,
  NotesModule,
  SequelizeModule.forRoot({
    dialect: 'postgres', // or 'mysql', 'sqlite', etc.
    host: 'localhost',
    port: 5432,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    autoLoadModels: true, // Automatically load models registered in modules
    synchronize: false, // Sync models with DB (don't use true in production!)
    define: {
      underscored: true, // This automatically maps isActive to is_active globally
    },
  }),
  ServeStaticModule.forRoot({
    rootPath: FRONTEND_BUILD_PATH,
  }),
];

if (SOCKETIO_ENDPOINT_ON) {
  imports.push(ChatModule);
}

@Module({
  imports,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

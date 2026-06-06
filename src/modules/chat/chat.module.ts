import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/config';

@Module({
  imports: [
    // Ensure this matches your existing JWT config
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [ChatGateway],
})
export class ChatModule {}

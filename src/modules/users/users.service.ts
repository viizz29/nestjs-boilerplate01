import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async findOneByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  // This runs automatically when the module starts
  async onModuleInit() {
    await this.seedTestUser();
  }

  private async seedTestUser() {
    const testEmail = 'test@gmail.com';
    const existingUser = await this.userRepository.findByEmail(testEmail);

    if (!existingUser) {
      console.log('🌱 Seeding test user...');

      const hashedPassword = await bcrypt.hash('password123', 10);

      await this.userRepository.create({
        email: testEmail,
        password_hash: hashedPassword,
        name: 'Test',
      });

      console.log('✅ Test user created: ' + testEmail);
    } else {
      console.log('ℹ️ Test user already exists, skipping seed.');
    }
  }
}

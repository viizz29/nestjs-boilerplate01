import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(values: Partial<User>): Promise<User> {
    return this.userModel.create(values as any);
  }

  async findOne(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) return null;
    return user.get({ plain: true }) as User;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({
      attributes: ['user_id', 'name', 'email'],
    });
  }

  async findById(user_id: string): Promise<User | null> {
    return this.userModel.findByPk(user_id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email } });
  }

  async update(user_id: string, attrs: Partial<User>): Promise<[number, User[]]> {
    return this.userModel.update(attrs, {
      where: { user_id },
      returning: true,
    });
  }

  async remove(user_id: string): Promise<void> {
    const user = await this.findById(user_id);
    if (user) {
      await user.destroy();
    }
  }
}

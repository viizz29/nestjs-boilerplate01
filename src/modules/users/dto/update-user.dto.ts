import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// PartialType makes all properties from CreateUserDto optional
export class UpdateUserDto extends PartialType(CreateUserDto) {}

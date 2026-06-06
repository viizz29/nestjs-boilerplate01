import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
  underscored: true,
})
export class User extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  user_id!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password_hash!: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    defaultValue: 'user',
  })
  role!: string;
}

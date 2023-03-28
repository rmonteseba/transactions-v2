import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { FindUserDto } from './dto/find-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  register({ name }: CreateUserDto) {
    return this.prisma.user.create({ data: { name } });
  }

  findOne({ id }: FindUserDto) {
    return this.prisma.user.findFirst({ where: { id } });
  }
}

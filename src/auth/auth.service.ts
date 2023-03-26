import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login({ id }: LoginUserDto) {
    const user = await this.usersService.findOne({ id });
    if (!user) throw new HttpException('Forbidden', HttpStatus.NOT_FOUND);
    return { user, token: this.jwtService.sign({ id, name: user.name }) };
  }
}

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { configurations } from '../config/app.config';
import { UserStateDto } from './dto/user-state.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configurations.jwtSecret
    });
  }

  async validate({ id, name }: UserStateDto) {
    return { id, name };
  }
}

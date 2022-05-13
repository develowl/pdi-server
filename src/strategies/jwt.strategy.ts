import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { ROLES } from '@constants/roles'
import { UserModel } from '@users/entities/user.entity'
import { Field, ObjectType } from '@nestjs/graphql'
import { UsersService } from '@users/users.service'

export type JwtPayload = {
  sub: number
  email: string
  role: ROLES
}

@ObjectType()
export class JWT {
  @Field()
  jwt: string
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(UsersService) private readonly userService: UsersService) {
    super({
      secretOrKey: process.env.JWT_SECRET || '8VXWRVcPn5LO3DPQwQkgudbEG6EZ6Wc9L6dmJbxgSn4=',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false
    })
  }

  async validate(payload: JwtPayload): Promise<UserModel> {
    try {
      return await this.userService.get(payload.sub)
    } catch {
      throw new UnauthorizedException()
    }
  }
}

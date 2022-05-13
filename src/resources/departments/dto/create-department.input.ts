import { LOCALES } from '@constants/locales'
import { InputType, Field } from '@nestjs/graphql'
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

@InputType()
export class CreateDepartmentInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  key: string

  @Field()
  @IsNotEmpty()
  @IsString()
  name: string
}

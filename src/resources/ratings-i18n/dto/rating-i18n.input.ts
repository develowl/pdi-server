import { LOCALES } from '@constants/locales'
import { Field, InputType } from '@nestjs/graphql'
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

@InputType()
export class RatingI18nInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  description: string

  @Field({ nullable: true, defaultValue: LOCALES.BR })
  @IsOptional()
  @IsEnum(LOCALES)
  locale?: LOCALES
}

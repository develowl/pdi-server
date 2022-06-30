import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateTextFieldInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  labelPlaceholder: string
}

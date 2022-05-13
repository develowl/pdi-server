import { ExecutionContext } from '@nestjs/common'
import { createParamDecorator } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

export const User = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => GqlExecutionContext.create(ctx).getContext().user
)

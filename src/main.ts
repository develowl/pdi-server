import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from '@appModule'

async function bootstrap(): Promise<void> {
  const logger = new Logger()
  const app = await NestFactory.create(AppModule)
  await app
    .listen(process.env.PORT || 3030)
    .then(() => logger.log(`Listening on port ${process.env.PORT || 3030}`, 'NestApplication'))
}
bootstrap()

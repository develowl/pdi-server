import { Module } from '@nestjs/common'
import { ReportsController } from './reports.controller'

@Module({
  imports: [],
  controllers: [ReportsController],
  providers: [],
  exports: []
})
export class ReportsModule {}

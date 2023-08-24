import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reports } from './entities/report.entity';
import { SearchService } from 'src/search/search.service';
import { SearchModule } from 'src/search/search.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([Reports]), SearchModule, HttpModule],
  controllers: [ReportsController],
  providers: [ReportsService, SearchService],
})
export class ReportsModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBConfigModule } from './config/db-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot(DBConfigModule)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBConfigModule } from './config/db-config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from './item/item.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot(DBConfigModule), ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

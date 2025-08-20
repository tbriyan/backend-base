import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('Variable de entorno db:', process.env.DATABASE_NAME);

    return this.appService.getHello();
  }
}

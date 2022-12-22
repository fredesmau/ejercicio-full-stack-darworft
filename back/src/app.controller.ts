import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('items')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('items')
  getHello(): any {
    return this.appService.getHello();
  }
}

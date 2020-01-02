import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('readinglogs')
  getData() {
    return this.appService.getData();
  }

  @Post('readinglogs')
  addReadingLog(): void {
    return this.appService.addReadingLog();
  }
}

import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/message')
export class AppController {
  appService: any;
  constructor(appService: AppService) {
    this.appService = appService;
  }
  @Get('/sha256/:dm')
  getHash(@Param('dm') dm: string): string {
    return this.appService.getHash(dm);
  }
  @Get('/sha512/:dm')
  getHash512(@Param('dm') dm: string): string {
    return this.appService.getHash512(dm);
  }
  @Get('/whirlpool/:dm')
  getHashKeccak256(@Param('dm') dm: string): string {
    return this.appService.getHashWhirlpool(dm);
  }
}

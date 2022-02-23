import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    console.log(Object.keys(req));
    console.log(typeof req);
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Post('protected')
  getHello(@Request() req): any {
    // console.log(Object.keys(req));
    // console.log(typeof req);
    return req.user;
  }
}

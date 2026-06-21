import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { PROJECT_LOCATION } from 'src/config';
import { join } from 'path';
import { type Response } from 'express';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('swagger-init.js')
  serveJsFile(@Res() res: Response) {
    // Resolve the path to your JS file
    const filePath = join(PROJECT_LOCATION, 'assets', 'swagger-init.js');

    // Set the correct Content-Type so the browser executes or interprets it as JavaScript
    res.setHeader('Content-Type', 'application/javascript');

    // Send the file
    return res.sendFile(filePath);
  }
}

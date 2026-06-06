import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth') // Groups these endpoints under "auth" in the UI
@Controller('v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('test')
  getHello(): string {
    return 'auth test';
  }

  @Post('register')
  register(@Body() body: { name: string; email: string; password: string }) {
    return this.authService.register(body.name, body.email, body.password);
  }

  @ApiOperation({ summary: 'User Login' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'Return JWT access token.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Post('login')
  login(@Body() body: LoginDto) {
    console.log({ body });
    return this.authService.login(body.email, body.password);
  }
}

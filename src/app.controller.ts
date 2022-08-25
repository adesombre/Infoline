import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiBearerAuth,
        ApiOperation,
        ApiParam,
        ApiResponse,
       ApiTags} from'@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({summary: 'return hello-world'})
  @ApiResponse({status:400 ,description:'forbiden'})
  @ApiResponse({status:200 ,description:'create'})
  @ApiTags('infoline')
  getHello(): string {
    return this.appService.getHello();
  }
}

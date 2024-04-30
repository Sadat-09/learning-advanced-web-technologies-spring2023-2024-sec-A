import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
  Delete
} from '@nestjs/common';
// import { CreateAdminDto } from "./dto/create-admin.dto";
// import { CreateRoomDto } from "./dto/create-room.dto";
import { UsersService } from "./users.service";
import { CreateFaqDto } from "../faq/dto/create-faq.dto";
import { CreateUserDto } from './dto/create-user.dto';
import { AllUsersService } from '../all-user/all-user.service';

// import { SessionGuard } from "./session.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";


interface FileParams { fileName: string; }
@Controller('user')

export class UsersController {
  constructor(
    private readonly userService: UsersService,
    
  ) {}

  @Get('viewallproducts')
  
  findAll() {
      return this.userService.findAll();
  }


}
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
import { CreateProductDto } from "./dto/create-product.dto";


// import { SessionGuard } from "./session.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { Product } from "src/admin/entities/product.entity";
import { AdminService } from "./admin.service";

interface FileParams { fileName: string; }
@Controller('admin')

export class AdminController {
  constructor(private readonly adminService: AdminService) {
  }

  @Post('addproduct')
  addproduct(@Body(ValidationPipe) CreateproductDto: CreateProductDto) {
      return this.adminService.create(CreateproductDto);
  }

  @Delete(':id')
  
  remove(@Param('id') id: number) {
      return this.adminService.deleteById(+id);
  }




}
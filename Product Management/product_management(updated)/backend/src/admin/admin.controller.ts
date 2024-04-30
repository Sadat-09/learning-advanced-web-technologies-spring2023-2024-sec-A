import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
  Delete
} from '@nestjs/common';
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";


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

  @Put(':id')
  update(@Param('id') id: string, @Body() UpdateProductDto: UpdateProductDto) {
      return this.adminService.update(+id, UpdateProductDto);
  }


}
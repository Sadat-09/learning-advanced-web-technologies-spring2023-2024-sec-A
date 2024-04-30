import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class AdminService {
  constructor(
   
   
  ) {}

 

  async create(createProductDto: CreateProductDto) {
    const admin = await this.adminRepo.create(createProductDto);
    return await this.productRepo.save(admin);
  }

 







}



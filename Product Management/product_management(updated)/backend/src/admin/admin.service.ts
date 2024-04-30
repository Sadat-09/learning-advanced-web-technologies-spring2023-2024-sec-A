import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Product) private readonly prodRepo: Repository<Product>,
   
   
  ) {}

 

  async create(createProductDto: CreateProductDto) {
    const admin = await this.prodRepo.create(createProductDto);
    return await this.prodRepo.save(admin);
  }


  async deleteById(id: number) {
    return this.prodRepo.delete(id);
}

async updatebyID(id: number, updateProductDto: UpdateProductDto) {
    
  
  return await this.prodRepo.update(id, updateProductDto);

}
  

 







}



import { Injectable } from '@nestjs/common';
import { Product } from '..admin//entities/product.entity';

@Injectable()
export class UserService {
  @InjectRepository(Product) private readonly prodRepo: Repository<Product>,
  

  findAll() {
    return await this.prodRepo.find({});
  }

  
}


import { IsNotEmpty, IsString } from "class-validator";
export class CreateProductDto{
    @IsString()
    @IsNotEmpty()
    Productname: string;

    @IsString()
    @IsNotEmpty()
    productId: string;

    @IsString()
    @IsNotEmpty()
    Price: string;

     
    

}




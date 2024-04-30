import {
    BeforeInsert,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
 

@Entity('Product')
  export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique:false, nullable: false })
    Productname: string;
  
    @Column({ unique: false, nullable: false })
    price: string;

    @Column({ unique: false, nullable: false })
      description: string;

     

 

 
}
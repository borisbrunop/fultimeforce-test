import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Console } from 'console';
import { Repository } from 'typeorm';
// import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Products } from '../../entities';

@Injectable()
export class ProductsService{
    constructor(@InjectRepository(Products)
    private productsRepository: Repository<Products>
    ){}

    getProducts(): Promise<Products[]> {
        return this.productsRepository.find();
    }

    addProducts(product): Promise<Products>{
        try{

            this.productsRepository.insert(product)
            return product;
        }catch(err){
            console.log(err)
        }
    }

}

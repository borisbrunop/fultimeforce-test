import { Body, Controller, Get, Post } from '@nestjs/common';
// import {Crud,  CrudController } from '@nestjsx/crud';
import { Products } from '../../entities';
import { ProductsService } from '../services';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    getProducts(){
        return this.productsService.getProducts()
    }

    @Post()
    addProducts(@Body() product: Products){
        return this.productsService.addProducts(product);
    }
}

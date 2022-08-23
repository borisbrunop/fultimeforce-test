import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import {Crud,  CrudController } from '@nestjsx/crud';
import { Products } from '../../entities';
import { ProductsService } from '../services';

export interface PostProductImage {
    product_id: number,
    file: string
}

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    getProducts(){
        return this.productsService.getProducts()
    }

    @Get(':id')
    getOneProduct(@Param('id') id: number){
        return this.productsService.getOneProduct(id)
    }

    @Post()
    addProducts(@Body() product: Products){
        return this.productsService.addProducts(product);
    }
    @Post('addImage')
    addProductImage(@Body() body: PostProductImage){
        return this.productsService.addProductImage(body);
    }
}

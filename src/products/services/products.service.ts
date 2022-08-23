import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Console } from 'console';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { UpdateQueryBuilder, Repository, UpdateResult } from 'typeorm';
// import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Products } from '../../entities';
import { PostProductImage } from '../controllers';
import { Logger } from '@nestjs/common';

@Injectable()
export class ProductsService{
    constructor(@InjectRepository(Products)
    private productsRepository: Repository<Products>,
    private cloudinary: CloudinaryService
    ){}

    getProducts(): Promise<Products[]> {
        return this.productsRepository.find();
    }
    getOneProduct(product_id: number): Promise<Products | undefined> {
        return this.productsRepository.findOne({
            where: {product_id}
        });
    }

    addProducts(product): Promise<Products>{
        try{

            this.productsRepository.insert(product)
            return product;
        }catch(err){
            console.log(err)
        }
    }
    async addProductImage(body: PostProductImage):Promise<{message: string, data: UpdateResult}>{
        Logger.log('BODY', body)
        try{
        const imageUploded = await this.cloudinary.uploadImage(body.file);
        if(imageUploded){
            // const product = this.productsRepository.findOne({
            //     where: {product_id: body.product_id}
            // });
            console.log('IMAGE UPLOADED BIEN', imageUploded)
            if(imageUploded){
                const product = await this.productsRepository.createQueryBuilder()
                .update(Products)
                .set({ image_url: imageUploded.url})
                .where("product_id = :id", { id: body.product_id })
                .execute();
                return {message: 'Upload successfuly', data: product}
            }
        }else{
            console.log('IMAGE UPLOADED MAL', imageUploded)
        }
        }catch(err){
            throw new BadRequestException({message: 'Invalid file type.', error: err});
        }
    }

}

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Repository, UpdateResult } from 'typeorm';
import { Products } from '../../entities';
import { PostProductImage } from '../controllers';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
    private cloudinary: CloudinaryService,
  ) {}

  async getProducts(search: string): Promise<Products[]> {
    var allProducts = [];
    if (search) {
      allProducts = await this.productsRepository
        .createQueryBuilder('products')
        .where('lower(products.name) like :name', {
          name: '%' + search.toLocaleLowerCase() + '%',
        })
        .orderBy('products.update_at', 'DESC')
        .getMany();
    } else {
      allProducts = await this.productsRepository.find();
    }
    return allProducts;
  }

  getOneProduct(product_id: number): Promise<Products | undefined> {
    return this.productsRepository.findOne({
      where: { product_id },
    });
  }

  async addProducts(product): Promise<Products> {
    try {
      const newProduct = await this.productsRepository.insert(product);
      return newProduct.raw[0];
    } catch (err) {
      throw new BadRequestException({ message: 'Error in add', error: err });
    }
  }

  async editProduct(body): Promise<{ message: string; data: Products }> {
    try {
      await this.productsRepository
        .createQueryBuilder()
        .update(Products)
        .set(body)
        .where('product_id = :id', { id: body.product_id })
        .execute();
      const newProduct = await this.productsRepository.findOne({
        where: { product_id: body.product_id },
      });
      return { message: 'Edit product successfuly', data: newProduct };
    } catch (err) {
      throw new BadRequestException({ message: 'Error in edit', error: err });
    }
  }
  async deleteProduct(body): Promise<{ message: string; data: Products }> {
    try {
      await this.productsRepository.delete({ product_id: body.product_id });
      return { message: 'Product deleted', data: body.product_id };
    } catch (err) {
      throw new BadRequestException({ message: 'Error in delete', error: err });
    }
  }

  async addProductImage(
    body: PostProductImage,
  ): Promise<{ message: string; data: UpdateResult }> {
    try {
      const imageUploded = await this.cloudinary.uploadImage(body.file);
      if (imageUploded) {
        if (imageUploded) {
          const product = await this.productsRepository
            .createQueryBuilder()
            .update(Products)
            .set({ image_url: imageUploded.url })
            .where('product_id = :id', { id: body.product_id })
            .execute();
          return { message: 'Upload successfuly', data: product };
        }
      } else {
        throw new BadRequestException({ message: 'Image not uploaded' });
      }
    } catch (err) {
      throw new BadRequestException({
        message: 'Invalid file type.',
        error: err,
      });
    }
  }
}

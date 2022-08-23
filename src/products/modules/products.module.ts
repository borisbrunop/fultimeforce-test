import { Module } from '@nestjs/common';
import { ProductsService } from '../services';
import { ProductsController } from '../controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from '../../entities';

@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}

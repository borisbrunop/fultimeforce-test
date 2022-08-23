import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { Config } from './orm/orm.config';
import { ProductsModule } from './products';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(Config), 
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}

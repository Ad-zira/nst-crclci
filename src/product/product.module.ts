import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository])], //add this
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}

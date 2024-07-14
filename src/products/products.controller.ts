import {
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { PaginationDto } from 'src/common/dto';
import { PRODUCTS_SERVICE } from 'src/config/services';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCTS_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  createProduct() {
    return 'This action adds a new product';
  }

  @Get()
  getAllProducts(@Query() paginationDto: PaginationDto) {
    return this.productsClient.send(
      { cmd: 'find_all_products' },
      paginationDto,
    );
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    try {
      return await firstValueFrom(
        this.productsClient.send({ cmd: 'find_product' }, { id }),
      );
    } catch (error) {
      console.debug(error);
      throw new RpcException(error);
    }
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string) {
    return 'This action updates a product ' + id;
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return 'This action removes a product ' + id;
  }
}

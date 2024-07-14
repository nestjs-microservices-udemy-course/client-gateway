import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from 'src/orders/enums/order-status';
import { PaginationDto } from './pagination.dto';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;
}

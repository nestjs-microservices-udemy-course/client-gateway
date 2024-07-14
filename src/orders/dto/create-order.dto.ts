import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';
import { OrderStatus } from '../enums/order-status';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  totalAmount: number;

  @IsNumber()
  @IsPositive()
  totalItems: number;

  @IsEnum(OrderStatus)
  status: OrderStatus = OrderStatus.PENDING;

  @IsBoolean()
  @IsOptional()
  paid: boolean = false;
}

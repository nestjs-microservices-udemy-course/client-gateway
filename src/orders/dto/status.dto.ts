import { IsEnum } from 'class-validator';
import { OrderStatus } from '../enums/order-status';

export class StatusDto {
  @IsEnum(OrderStatus)
  status: OrderStatus;
}

import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { prettyTarget } from './utils/pretty.target';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        autoLogging: true,
        customAttributeKeys: {
          req: 'request',
          res: 'response',
          err: 'error',
        },
        transport: { target: prettyTarget },
      },
    }),
    ProductsModule,
    OrdersModule,
  ],
})
export class AppModule {}

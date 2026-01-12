import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CustomerModule } from 'src/customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import config from 'src/config/config';


@Module({
  imports: [CustomerModule, ConfigModule.forFeature(config)],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}

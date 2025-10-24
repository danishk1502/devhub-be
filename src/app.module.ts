import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { createTypeOrmProdConfig } from './config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      createTypeOrmProdConfig({
        entities: ['dist/**/*.entity{.ts,.js}'],
        type: 'postgres',
      }),
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

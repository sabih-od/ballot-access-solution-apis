import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Other modules...
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.56.56',
      port: 3306,
      username: 'homestead',
      password: 'secret',
      database: 'ballot-access-solution',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
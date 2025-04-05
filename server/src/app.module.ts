import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';  // Importera AuthModule
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthModule],  // Lägg till AuthModule här
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}

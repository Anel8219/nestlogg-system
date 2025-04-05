import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { PrismaService } from "./prisma/prisma.service";
import { ActivityModule } from "./activity.module";

@Module({
  imports: [ActivityModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}

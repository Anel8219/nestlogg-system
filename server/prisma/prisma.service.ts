import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    console.log("🔧 PrismaService försöker ansluta...");
    await this.$connect();
    console.log("✅ PrismaService ansluten!");
  }
}

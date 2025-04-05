import { Controller, Get, Post, Body } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  // Root route (GET /)
  @Get()
  getHello(): string {
    return 'API är igång!'; // Svar när du besöker http://localhost:3000/
  }

  // Route för att hämta alla projekt (GET /projects)
  @Get("projects")
  async getProjects() {
    return this.prisma.project.findMany();
  }

  // Route för att skapa ett projekt (POST /projects)
  @Post("projects")
  async createProject(@Body() data: { name: string }) {
    return this.prisma.project.create({
      data: { name: data.name },
    });
  }
}

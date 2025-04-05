import { Controller, Get, Post, Body } from "@nestjs/common";
import { ActivityService } from "./activity.service";

@Controller("activities")
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  getAll() {
    return this.activityService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.activityService.create(data);
  }
}

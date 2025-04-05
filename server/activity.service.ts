import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.activity.findMany({
      include: {
        project: true,
        assignedTo: true,
        dependencies: {
          include: {
            dependsOn: true,
          },
        },
        blockers: true,
      },
    });
  }

  async create(data: any) {
    const { dependsOnIds, ...activityData } = data;

    const activity = await this.prisma.activity.create({
      data: {
        ...activityData,
      },
    });

    if (dependsOnIds?.length) {
      await Promise.all(
        dependsOnIds.map((depId: string) =>
          this.prisma.dependency.create({
            data: {
              activityId: activity.id,
              dependsOnId: depId,
            },
          }),
        )
      );
    }

    return activity;
  }
}

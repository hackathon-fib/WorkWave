import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScheduleIntervalServiceBase } from "./base/scheduleInterval.service.base";

@Injectable()
export class ScheduleIntervalService extends ScheduleIntervalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

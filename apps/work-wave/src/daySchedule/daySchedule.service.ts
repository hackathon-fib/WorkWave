import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DayScheduleServiceBase } from "./base/daySchedule.service.base";

@Injectable()
export class DayScheduleService extends DayScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

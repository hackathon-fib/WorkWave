import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScheduleIntervalModuleBase } from "./base/scheduleInterval.module.base";
import { ScheduleIntervalService } from "./scheduleInterval.service";
import { ScheduleIntervalController } from "./scheduleInterval.controller";
import { ScheduleIntervalResolver } from "./scheduleInterval.resolver";

@Module({
  imports: [ScheduleIntervalModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScheduleIntervalController],
  providers: [ScheduleIntervalService, ScheduleIntervalResolver],
  exports: [ScheduleIntervalService],
})
export class ScheduleIntervalModule {}

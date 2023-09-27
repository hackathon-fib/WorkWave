import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DayScheduleModuleBase } from "./base/daySchedule.module.base";
import { DayScheduleService } from "./daySchedule.service";
import { DayScheduleController } from "./daySchedule.controller";
import { DayScheduleResolver } from "./daySchedule.resolver";

@Module({
  imports: [DayScheduleModuleBase, forwardRef(() => AuthModule)],
  controllers: [DayScheduleController],
  providers: [DayScheduleService, DayScheduleResolver],
  exports: [DayScheduleService],
})
export class DayScheduleModule {}

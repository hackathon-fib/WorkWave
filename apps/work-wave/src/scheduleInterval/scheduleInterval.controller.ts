import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScheduleIntervalService } from "./scheduleInterval.service";
import { ScheduleIntervalControllerBase } from "./base/scheduleInterval.controller.base";

@swagger.ApiTags("scheduleIntervals")
@common.Controller("scheduleIntervals")
export class ScheduleIntervalController extends ScheduleIntervalControllerBase {
  constructor(
    protected readonly service: ScheduleIntervalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

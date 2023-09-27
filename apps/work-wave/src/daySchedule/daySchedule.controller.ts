import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DayScheduleService } from "./daySchedule.service";
import { DayScheduleControllerBase } from "./base/daySchedule.controller.base";

@swagger.ApiTags("daySchedules")
@common.Controller("daySchedules")
export class DayScheduleController extends DayScheduleControllerBase {
  constructor(
    protected readonly service: DayScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

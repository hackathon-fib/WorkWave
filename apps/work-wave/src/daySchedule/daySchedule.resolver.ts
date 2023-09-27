import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DayScheduleResolverBase } from "./base/daySchedule.resolver.base";
import { DaySchedule } from "./base/DaySchedule";
import { DayScheduleService } from "./daySchedule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DaySchedule)
export class DayScheduleResolver extends DayScheduleResolverBase {
  constructor(
    protected readonly service: DayScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

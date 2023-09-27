import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScheduleIntervalResolverBase } from "./base/scheduleInterval.resolver.base";
import { ScheduleInterval } from "./base/ScheduleInterval";
import { ScheduleIntervalService } from "./scheduleInterval.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScheduleInterval)
export class ScheduleIntervalResolver extends ScheduleIntervalResolverBase {
  constructor(
    protected readonly service: ScheduleIntervalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

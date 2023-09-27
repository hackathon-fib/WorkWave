/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TeamService } from "../team.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TeamCreateInput } from "./TeamCreateInput";
import { TeamWhereInput } from "./TeamWhereInput";
import { TeamWhereUniqueInput } from "./TeamWhereUniqueInput";
import { TeamFindManyArgs } from "./TeamFindManyArgs";
import { TeamUpdateInput } from "./TeamUpdateInput";
import { Team } from "./Team";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TeamControllerBase {
  constructor(
    protected readonly service: TeamService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Team })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: TeamCreateInput): Promise<Team> {
    return await this.service.create({
      data: {
        ...data,

        companyId: data.companyId
          ? {
              connect: data.companyId,
            }
          : undefined,
      },
      select: {
        companyId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        parentTeam: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Team] })
  @ApiNestedQuery(TeamFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Team[]> {
    const args = plainToClass(TeamFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        companyId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        parentTeam: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        companyId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,
        parentTeam: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() data: TeamUpdateInput
  ): Promise<Team | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          companyId: data.companyId
            ? {
                connect: data.companyId,
              }
            : undefined,
        },
        select: {
          companyId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,
          parentTeam: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          companyId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,
          parentTeam: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

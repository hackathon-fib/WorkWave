/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ScheduleInterval } from "../../scheduleInterval/base/ScheduleInterval";
import { Status } from "../../status/base/Status";
import { User } from "../../user/base/User";

@ObjectType()
class DaySchedule {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  note!: string | null;

  @ApiProperty({
    required: false,
    type: () => [ScheduleInterval],
  })
  @ValidateNested()
  @Type(() => ScheduleInterval)
  @IsOptional()
  scheduleIntervals?: Array<ScheduleInterval>;

  @ApiProperty({
    required: false,
    type: () => Status,
  })
  @ValidateNested()
  @Type(() => Status)
  @IsOptional()
  status?: Status | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { DaySchedule as DaySchedule };

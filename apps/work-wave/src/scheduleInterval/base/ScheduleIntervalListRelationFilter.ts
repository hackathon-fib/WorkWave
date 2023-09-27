/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScheduleIntervalWhereInput } from "./ScheduleIntervalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ScheduleIntervalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ScheduleIntervalWhereInput,
  })
  @ValidateNested()
  @Type(() => ScheduleIntervalWhereInput)
  @IsOptional()
  @Field(() => ScheduleIntervalWhereInput, {
    nullable: true,
  })
  every?: ScheduleIntervalWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScheduleIntervalWhereInput,
  })
  @ValidateNested()
  @Type(() => ScheduleIntervalWhereInput)
  @IsOptional()
  @Field(() => ScheduleIntervalWhereInput, {
    nullable: true,
  })
  some?: ScheduleIntervalWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScheduleIntervalWhereInput,
  })
  @ValidateNested()
  @Type(() => ScheduleIntervalWhereInput)
  @IsOptional()
  @Field(() => ScheduleIntervalWhereInput, {
    nullable: true,
  })
  none?: ScheduleIntervalWhereInput;
}
export { ScheduleIntervalListRelationFilter as ScheduleIntervalListRelationFilter };

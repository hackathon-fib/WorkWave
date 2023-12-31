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
import { DayScheduleCreateNestedManyWithoutStatusesInput } from "./DayScheduleCreateNestedManyWithoutStatusesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StatusCreateInput {
  @ApiProperty({
    required: false,
    type: () => DayScheduleCreateNestedManyWithoutStatusesInput,
  })
  @ValidateNested()
  @Type(() => DayScheduleCreateNestedManyWithoutStatusesInput)
  @IsOptional()
  @Field(() => DayScheduleCreateNestedManyWithoutStatusesInput, {
    nullable: true,
  })
  daySchedules?: DayScheduleCreateNestedManyWithoutStatusesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { StatusCreateInput as StatusCreateInput };

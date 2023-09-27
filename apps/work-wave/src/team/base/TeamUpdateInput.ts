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
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserUpdateManyWithoutTeamsInput } from "./UserUpdateManyWithoutTeamsInput";

@InputType()
class TeamUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyWhereUniqueInput, {
    nullable: true,
  })
  company?: CompanyWhereUniqueInput | null;

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

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutTeamsInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutTeamsInput;
}

export { TeamUpdateInput as TeamUpdateInput };

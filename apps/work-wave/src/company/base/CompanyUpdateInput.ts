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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TeamUpdateManyWithoutCompaniesInput } from "./TeamUpdateManyWithoutCompaniesInput";
import { Type } from "class-transformer";

@InputType()
class CompanyUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  Name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => TeamUpdateManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => TeamUpdateManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => TeamUpdateManyWithoutCompaniesInput, {
    nullable: true,
  })
  teams?: TeamUpdateManyWithoutCompaniesInput;
}

export { CompanyUpdateInput as CompanyUpdateInput };

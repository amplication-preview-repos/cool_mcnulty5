/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FlightWhereUniqueInput } from "../../flight/base/FlightWhereUniqueInput";
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { Decimal } from "decimal.js";

@InputType()
class PositionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FlightWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FlightWhereUniqueInput)
  @IsOptional()
  @Field(() => FlightWhereUniqueInput, {
    nullable: true,
  })
  flight?: FlightWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  lat?: Decimal;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  lon?: Decimal;
}

export { PositionUpdateInput as PositionUpdateInput };

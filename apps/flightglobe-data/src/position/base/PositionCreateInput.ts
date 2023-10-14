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
import { ValidateNested, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { Decimal } from "decimal.js";

@InputType()
class PositionCreateInput {
  @ApiProperty({
    required: true,
    type: () => FlightWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FlightWhereUniqueInput)
  @Field(() => FlightWhereUniqueInput)
  flight!: FlightWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Float)
  lat!: Decimal;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Float)
  lon!: Decimal;
}

export { PositionCreateInput as PositionCreateInput };

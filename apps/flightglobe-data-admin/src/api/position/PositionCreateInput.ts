import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";
import { Decimal } from "decimal.js";

export type PositionCreateInput = {
  flight: FlightWhereUniqueInput;
  lat: Decimal;
  lon: Decimal;
};

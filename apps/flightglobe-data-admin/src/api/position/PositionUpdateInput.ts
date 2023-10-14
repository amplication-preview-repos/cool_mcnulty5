import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";
import { Decimal } from "decimal.js";

export type PositionUpdateInput = {
  flight?: FlightWhereUniqueInput;
  lat?: Decimal;
  lon?: Decimal;
};

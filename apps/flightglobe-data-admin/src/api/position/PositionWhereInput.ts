import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PositionWhereInput = {
  flight?: FlightWhereUniqueInput;
  id?: StringFilter;
};

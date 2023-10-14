import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PositionListRelationFilter } from "../position/PositionListRelationFilter";

export type FlightWhereInput = {
  aircraftType?: StringNullableFilter;
  icao?: StringNullableFilter;
  id?: StringFilter;
  positions?: PositionListRelationFilter;
};

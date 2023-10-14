import { PositionCreateNestedManyWithoutFlightsInput } from "./PositionCreateNestedManyWithoutFlightsInput";

export type FlightCreateInput = {
  aircraftType?: string | null;
  icao?: string | null;
  positions?: PositionCreateNestedManyWithoutFlightsInput;
};

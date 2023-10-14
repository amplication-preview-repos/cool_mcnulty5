import { PositionUpdateManyWithoutFlightsInput } from "./PositionUpdateManyWithoutFlightsInput";

export type FlightUpdateInput = {
  aircraftType?: string | null;
  icao?: string | null;
  positions?: PositionUpdateManyWithoutFlightsInput;
};

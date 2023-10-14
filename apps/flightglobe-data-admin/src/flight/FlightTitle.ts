import { Flight as TFlight } from "../api/flight/Flight";

export const FLIGHT_TITLE_FIELD = "aircraftType";

export const FlightTitle = (record: TFlight): string => {
  return record.aircraftType?.toString() || String(record.id);
};

import { SortOrder } from "../../util/SortOrder";

export type FlightOrderByInput = {
  aircraftType?: SortOrder;
  createdAt?: SortOrder;
  icao?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type PositionOrderByInput = {
  createdAt?: SortOrder;
  flightId?: SortOrder;
  id?: SortOrder;
  lat?: SortOrder;
  lon?: SortOrder;
  updatedAt?: SortOrder;
};

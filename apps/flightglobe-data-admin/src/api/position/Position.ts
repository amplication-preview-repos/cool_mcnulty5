import { Flight } from "../flight/Flight";
import { Decimal } from "decimal.js";

export type Position = {
  createdAt: Date;
  flight?: Flight;
  id: string;
  lat: Decimal;
  lon: Decimal;
  updatedAt: Date;
};

import { Position } from "../position/Position";

export type Flight = {
  aircraftType: string | null;
  createdAt: Date;
  icao: string | null;
  id: string;
  positions?: Array<Position>;
  updatedAt: Date;
};

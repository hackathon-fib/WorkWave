import { JsonValue } from "type-fest";
import { Status } from "../status/Status";
import { User } from "../user/User";

export type DaySchedule = {
  createdAt: Date;
  date: Date | null;
  id: string;
  intervals: JsonValue;
  note: string | null;
  status?: Status | null;
  updatedAt: Date;
  userId?: User | null;
};

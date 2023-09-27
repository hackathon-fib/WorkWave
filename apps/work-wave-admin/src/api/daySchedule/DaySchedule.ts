import { JsonValue } from "type-fest";
import { ScheduleInterval } from "../scheduleInterval/ScheduleInterval";
import { Status } from "../status/Status";
import { User } from "../user/User";

export type DaySchedule = {
  createdAt: Date;
  date: Date | null;
  id: string;
  intervals: JsonValue;
  note: string | null;
  scheduleIntervals?: Array<ScheduleInterval>;
  status?: Status | null;
  updatedAt: Date;
  user?: User | null;
};

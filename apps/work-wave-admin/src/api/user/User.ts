import { DaySchedule } from "../daySchedule/DaySchedule";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  daySchedules?: DaySchedule | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

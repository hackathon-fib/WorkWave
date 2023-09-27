import { DaySchedule } from "../daySchedule/DaySchedule";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  daySchedules?: Array<DaySchedule>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};

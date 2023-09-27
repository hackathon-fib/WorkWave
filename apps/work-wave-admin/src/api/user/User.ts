import { DaySchedule } from "../daySchedule/DaySchedule";
import { JsonValue } from "type-fest";
import { Team } from "../team/Team";

export type User = {
  createdAt: Date;
  daySchedules?: Array<DaySchedule>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  team?: Array<Team>;
  updatedAt: Date;
  username: string;
};

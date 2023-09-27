import { Company } from "../company/Company";
import { DaySchedule } from "../daySchedule/DaySchedule";
import { JsonValue } from "type-fest";
import { Team } from "../team/Team";

export type User = {
  company?: Company | null;
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

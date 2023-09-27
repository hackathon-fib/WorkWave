import { DayScheduleWhereUniqueInput } from "../daySchedule/DayScheduleWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  daySchedules?: DayScheduleWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};

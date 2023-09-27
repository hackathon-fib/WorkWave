import { InputJsonValue } from "../../types";
import { ScheduleIntervalCreateNestedManyWithoutDaySchedulesInput } from "./ScheduleIntervalCreateNestedManyWithoutDaySchedulesInput";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DayScheduleCreateInput = {
  date?: Date | null;
  intervals?: InputJsonValue;
  note?: string | null;
  scheduleIntervals?: ScheduleIntervalCreateNestedManyWithoutDaySchedulesInput;
  status?: StatusWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

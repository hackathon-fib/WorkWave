import { InputJsonValue } from "../../types";
import { ScheduleIntervalUpdateManyWithoutDaySchedulesInput } from "./ScheduleIntervalUpdateManyWithoutDaySchedulesInput";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DayScheduleUpdateInput = {
  date?: Date | null;
  intervals?: InputJsonValue;
  note?: string | null;
  scheduleIntervals?: ScheduleIntervalUpdateManyWithoutDaySchedulesInput;
  status?: StatusWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

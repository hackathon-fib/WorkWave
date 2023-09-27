import { ScheduleIntervalUpdateManyWithoutDaySchedulesInput } from "./ScheduleIntervalUpdateManyWithoutDaySchedulesInput";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DayScheduleUpdateInput = {
  date?: Date | null;
  note?: string | null;
  scheduleIntervals?: ScheduleIntervalUpdateManyWithoutDaySchedulesInput;
  status?: StatusWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

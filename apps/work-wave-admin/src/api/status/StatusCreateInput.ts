import { DayScheduleWhereUniqueInput } from "../daySchedule/DayScheduleWhereUniqueInput";

export type StatusCreateInput = {
  daySchedules?: DayScheduleWhereUniqueInput | null;
  name?: string | null;
};

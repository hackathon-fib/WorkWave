import { DayScheduleWhereUniqueInput } from "../daySchedule/DayScheduleWhereUniqueInput";

export type StatusUpdateInput = {
  daySchedules?: DayScheduleWhereUniqueInput | null;
  name?: string | null;
};

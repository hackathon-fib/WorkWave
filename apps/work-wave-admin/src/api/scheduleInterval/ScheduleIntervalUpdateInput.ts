import { DayScheduleWhereUniqueInput } from "../daySchedule/DayScheduleWhereUniqueInput";

export type ScheduleIntervalUpdateInput = {
  category?: string | null;
  daySchedule?: DayScheduleWhereUniqueInput | null;
  end?: Date | null;
  label?: string | null;
  start?: Date | null;
};

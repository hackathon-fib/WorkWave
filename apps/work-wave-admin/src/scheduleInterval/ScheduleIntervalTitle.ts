import { ScheduleInterval as TScheduleInterval } from "../api/scheduleInterval/ScheduleInterval";

export const SCHEDULEINTERVAL_TITLE_FIELD = "category";

export const ScheduleIntervalTitle = (record: TScheduleInterval): string => {
  return record.category?.toString() || String(record.id);
};

import { DaySchedule as TDaySchedule } from "../api/daySchedule/DaySchedule";

export const DAYSCHEDULE_TITLE_FIELD = "note";

export const DayScheduleTitle = (record: TDaySchedule): string => {
  return record.note?.toString() || String(record.id);
};

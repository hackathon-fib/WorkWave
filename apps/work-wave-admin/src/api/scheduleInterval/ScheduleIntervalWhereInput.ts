import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DayScheduleWhereUniqueInput } from "../daySchedule/DayScheduleWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ScheduleIntervalWhereInput = {
  category?: StringNullableFilter;
  daySchedule?: DayScheduleWhereUniqueInput;
  end?: DateTimeNullableFilter;
  id?: StringFilter;
  label?: StringNullableFilter;
  start?: DateTimeNullableFilter;
};

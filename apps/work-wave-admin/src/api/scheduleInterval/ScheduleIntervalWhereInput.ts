import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DayScheduleWhereUniqueInput } from "../daySchedule/DayScheduleWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ScheduleIntervalWhereInput = {
  category?: StringNullableFilter;
  daySchedule?: DayScheduleWhereUniqueInput;
  id?: StringFilter;
  label?: StringNullableFilter;
};

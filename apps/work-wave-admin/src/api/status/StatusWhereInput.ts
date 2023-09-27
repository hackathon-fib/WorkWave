import { DayScheduleWhereUniqueInput } from "../daySchedule/DayScheduleWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StatusWhereInput = {
  daySchedules?: DayScheduleWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};

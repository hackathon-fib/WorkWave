import { DayScheduleListRelationFilter } from "../daySchedule/DayScheduleListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StatusWhereInput = {
  daySchedules?: DayScheduleListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};

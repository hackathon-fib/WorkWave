import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DayScheduleListRelationFilter } from "../daySchedule/DayScheduleListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";

export type UserWhereInput = {
  company?: CompanyWhereUniqueInput;
  daySchedules?: DayScheduleListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  team?: TeamListRelationFilter;
  username?: StringFilter;
};

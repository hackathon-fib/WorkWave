import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DayScheduleWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  intervals?: JsonFilter;
  note?: StringNullableFilter;
  status?: StatusWhereUniqueInput;
  user?: UserWhereUniqueInput;
};

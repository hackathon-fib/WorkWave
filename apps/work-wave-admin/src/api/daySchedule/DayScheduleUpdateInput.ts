import { InputJsonValue } from "../../types";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DayScheduleUpdateInput = {
  date?: Date | null;
  intervals?: InputJsonValue;
  note?: string | null;
  status?: StatusWhereUniqueInput | null;
  userId?: UserWhereUniqueInput | null;
};

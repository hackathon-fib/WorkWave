import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DayScheduleUpdateManyWithoutUsersInput } from "./DayScheduleUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TeamUpdateManyWithoutUsersInput } from "./TeamUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  daySchedules?: DayScheduleUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  team?: TeamUpdateManyWithoutUsersInput;
  username?: string;
};

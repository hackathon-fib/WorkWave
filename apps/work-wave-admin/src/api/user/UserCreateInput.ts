import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DayScheduleCreateNestedManyWithoutUsersInput } from "./DayScheduleCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TeamCreateNestedManyWithoutUsersInput } from "./TeamCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  daySchedules?: DayScheduleCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  team?: TeamCreateNestedManyWithoutUsersInput;
  username: string;
};

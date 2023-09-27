import { DayScheduleCreateNestedManyWithoutUsersInput } from "./DayScheduleCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TeamCreateNestedManyWithoutUsersInput } from "./TeamCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  daySchedules?: DayScheduleCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  team?: TeamCreateNestedManyWithoutUsersInput;
  username: string;
};

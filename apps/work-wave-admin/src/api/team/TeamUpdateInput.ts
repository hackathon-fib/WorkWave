import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { UserUpdateManyWithoutTeamsInput } from "./UserUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  name?: string | null;
  users?: UserUpdateManyWithoutTeamsInput;
};

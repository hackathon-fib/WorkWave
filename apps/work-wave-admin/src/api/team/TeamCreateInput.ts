import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { UserCreateNestedManyWithoutTeamsInput } from "./UserCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutTeamsInput;
};

import { TeamCreateNestedManyWithoutCompaniesInput } from "./TeamCreateNestedManyWithoutCompaniesInput";
import { UserCreateNestedManyWithoutCompaniesInput } from "./UserCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  name: string;
  phone?: string | null;
  teams?: TeamCreateNestedManyWithoutCompaniesInput;
  users?: UserCreateNestedManyWithoutCompaniesInput;
};

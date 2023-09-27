import { TeamCreateNestedManyWithoutCompaniesInput } from "./TeamCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  name: string;
  phone?: string | null;
  teams?: TeamCreateNestedManyWithoutCompaniesInput;
};

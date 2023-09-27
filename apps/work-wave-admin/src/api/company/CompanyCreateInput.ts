import { TeamCreateNestedManyWithoutCompaniesInput } from "./TeamCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  Name: string;
  phone?: string | null;
  teams?: TeamCreateNestedManyWithoutCompaniesInput;
};

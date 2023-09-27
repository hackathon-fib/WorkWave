import { TeamUpdateManyWithoutCompaniesInput } from "./TeamUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  name?: string;
  phone?: string | null;
  teams?: TeamUpdateManyWithoutCompaniesInput;
};

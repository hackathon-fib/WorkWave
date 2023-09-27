import { TeamUpdateManyWithoutCompaniesInput } from "./TeamUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  Name?: string;
  phone?: string | null;
  teams?: TeamUpdateManyWithoutCompaniesInput;
};

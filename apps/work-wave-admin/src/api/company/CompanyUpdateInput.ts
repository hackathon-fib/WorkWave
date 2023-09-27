import { TeamUpdateManyWithoutCompaniesInput } from "./TeamUpdateManyWithoutCompaniesInput";
import { UserUpdateManyWithoutCompaniesInput } from "./UserUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  name?: string;
  phone?: string | null;
  teams?: TeamUpdateManyWithoutCompaniesInput;
  users?: UserUpdateManyWithoutCompaniesInput;
};

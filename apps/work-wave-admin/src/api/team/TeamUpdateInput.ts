import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type TeamUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  name?: string | null;
};

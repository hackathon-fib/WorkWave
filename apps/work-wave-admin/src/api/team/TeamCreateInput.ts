import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type TeamCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  name?: string | null;
};

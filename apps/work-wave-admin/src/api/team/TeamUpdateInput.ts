import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type TeamUpdateInput = {
  companyId?: CompanyWhereUniqueInput | null;
  name?: string | null;
  parentTeam?: string | null;
};

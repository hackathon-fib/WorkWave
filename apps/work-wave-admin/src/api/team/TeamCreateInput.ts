import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type TeamCreateInput = {
  companyId?: CompanyWhereUniqueInput | null;
  name?: string | null;
  parentTeam?: string | null;
};

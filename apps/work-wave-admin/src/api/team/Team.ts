import { Company } from "../company/Company";

export type Team = {
  companyId?: Company | null;
  createdAt: Date;
  id: string;
  name: string | null;
  parentTeam: string | null;
  updatedAt: Date;
};

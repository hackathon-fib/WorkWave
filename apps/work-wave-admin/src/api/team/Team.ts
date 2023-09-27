import { Company } from "../company/Company";

export type Team = {
  company?: Company | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};

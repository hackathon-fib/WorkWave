import { Company } from "../company/Company";
import { User } from "../user/User";

export type Team = {
  company?: Company | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};

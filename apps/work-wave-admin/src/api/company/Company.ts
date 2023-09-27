import { Team } from "../team/Team";
import { User } from "../user/User";

export type Company = {
  createdAt: Date;
  id: string;
  name: string;
  phone: string | null;
  teams?: Array<Team>;
  updatedAt: Date;
  users?: Array<User>;
};

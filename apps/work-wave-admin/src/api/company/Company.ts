import { Team } from "../team/Team";

export type Company = {
  createdAt: Date;
  id: string;
  name: string;
  phone: string | null;
  teams?: Array<Team>;
  updatedAt: Date;
};

import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  phone?: StringNullableFilter;
  teams?: TeamListRelationFilter;
  users?: UserListRelationFilter;
};

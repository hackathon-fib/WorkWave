import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  phone?: StringNullableFilter;
  teams?: TeamListRelationFilter;
};

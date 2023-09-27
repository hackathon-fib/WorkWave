import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TeamWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};

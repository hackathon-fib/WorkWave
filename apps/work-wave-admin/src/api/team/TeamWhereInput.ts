import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TeamWhereInput = {
  companyId?: CompanyWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  parentTeam?: StringNullableFilter;
};

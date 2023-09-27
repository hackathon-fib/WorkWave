import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TeamWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};

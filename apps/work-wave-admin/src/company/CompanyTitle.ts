import { Company as TCompany } from "../api/company/Company";

export const COMPANY_TITLE_FIELD = "Name";

export const CompanyTitle = (record: TCompany): string => {
  return record.Name?.toString() || String(record.id);
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CompanyTitle } from "../company/CompanyTitle";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="companyId.id"
          reference="Company"
          label="CompanyId"
        >
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <TextInput label="ParentTeam" source="parentTeam" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StatusTitle } from "../status/StatusTitle";
import { UserTitle } from "../user/UserTitle";

export const DayScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <div />
        <TextInput label="Note" source="note" />
        <ReferenceInput source="status.id" reference="Status" label="Status">
          <SelectInput optionText={StatusTitle} />
        </ReferenceInput>
        <ReferenceInput source="userId.id" reference="User" label="UserId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ScheduleIntervalTitle } from "../scheduleInterval/ScheduleIntervalTitle";
import { StatusTitle } from "../status/StatusTitle";
import { UserTitle } from "../user/UserTitle";

export const DayScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Note" source="note" />
        <ReferenceArrayInput
          source="scheduleIntervals"
          reference="ScheduleInterval"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScheduleIntervalTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="status.id" reference="Status" label="Status">
          <SelectInput optionText={StatusTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="UserId">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

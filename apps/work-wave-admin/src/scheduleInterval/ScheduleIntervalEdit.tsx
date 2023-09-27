import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { DayScheduleTitle } from "../daySchedule/DayScheduleTitle";

export const ScheduleIntervalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <ReferenceInput
          source="daySchedule.id"
          reference="DaySchedule"
          label="DaySchedule"
        >
          <SelectInput optionText={DayScheduleTitle} />
        </ReferenceInput>
        <DateTimeInput label="end" source="end" />
        <TextInput label="label" source="label" />
        <DateTimeInput label="start" source="start" />
      </SimpleForm>
    </Edit>
  );
};

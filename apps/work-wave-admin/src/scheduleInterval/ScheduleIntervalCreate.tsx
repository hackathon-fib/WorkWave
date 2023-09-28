import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { DayScheduleTitle } from "../daySchedule/DayScheduleTitle";

export const ScheduleIntervalCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <ReferenceInput
          source="daySchedule.id"
          reference="DaySchedule"
          label="DaySchedules"
        >
          <SelectInput optionText={DayScheduleTitle} />
        </ReferenceInput>
        <DateTimeInput label="end" source="end" />
        <TextInput label="label" source="label" />
        <DateTimeInput label="start" source="start" />
      </SimpleForm>
    </Create>
  );
};

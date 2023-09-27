import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
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
          label="DaySchedule"
        >
          <SelectInput optionText={DayScheduleTitle} />
        </ReferenceInput>
        <TextInput label="label" source="label" />
      </SimpleForm>
    </Create>
  );
};

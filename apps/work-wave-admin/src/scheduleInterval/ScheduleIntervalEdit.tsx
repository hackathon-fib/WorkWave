import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
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
        <TextInput label="label" source="label" />
      </SimpleForm>
    </Edit>
  );
};

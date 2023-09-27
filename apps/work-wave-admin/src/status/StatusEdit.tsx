import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DayScheduleTitle } from "../daySchedule/DayScheduleTitle";

export const StatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="daySchedules.id"
          reference="DaySchedule"
          label="DaySchedules"
        >
          <SelectInput optionText={DayScheduleTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};

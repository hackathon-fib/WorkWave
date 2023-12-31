import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DAYSCHEDULE_TITLE_FIELD } from "../daySchedule/DayScheduleTitle";

export const ScheduleIntervalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="DaySchedules"
          source="dayschedule.id"
          reference="DaySchedule"
        >
          <TextField source={DAYSCHEDULE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="end" source="end" />
        <TextField label="ID" source="id" />
        <TextField label="label" source="label" />
        <TextField label="start" source="start" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

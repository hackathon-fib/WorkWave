import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DAYSCHEDULE_TITLE_FIELD } from "./DayScheduleTitle";
import { STATUS_TITLE_FIELD } from "../status/StatusTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DayScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Intervals" source="intervals" />
        <TextField label="Note" source="note" />
        <ReferenceField label="Status" source="status.id" reference="Status">
          <TextField source={STATUS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="UserId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ScheduleInterval"
          target="dayScheduleId"
          label="ScheduleIntervals"
        >
          <Datagrid rowClick="show">
            <TextField label="category" source="category" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="DaySchedule"
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

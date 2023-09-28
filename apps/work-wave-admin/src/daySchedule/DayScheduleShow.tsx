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
import Calendar from '../Components/Calendar';

export const DayScheduleShow = (props: ShowProps): React.ReactElement => {

  const periods = [
    { start: new Date(2023, 7, 1), end: new Date(2023, 7, 5) },
    { start: new Date(2023, 7, 15), end: new Date(2023, 7, 20) },
  ];

  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <ReferenceField label="Status" source="status.id" reference="Status">
          <TextField source={STATUS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="UserId" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <Calendar periods={periods} />
        {/*<ReferenceManyField
          reference="ScheduleInterval"
          target="dayScheduleId"
          label="ScheduleIntervals"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>*/}
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DAYSCHEDULE_TITLE_FIELD } from "../daySchedule/DayScheduleTitle";

export const ScheduleIntervalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ScheduleIntervals"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};

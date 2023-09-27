import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STATUS_TITLE_FIELD } from "../status/StatusTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DayScheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DaySchedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

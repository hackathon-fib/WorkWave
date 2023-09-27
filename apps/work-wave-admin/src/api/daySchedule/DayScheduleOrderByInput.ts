import { SortOrder } from "../../util/SortOrder";

export type DayScheduleOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  intervals?: SortOrder;
  note?: SortOrder;
  statusId?: SortOrder;
  updatedAt?: SortOrder;
  userID?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type DayScheduleOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  intervals?: SortOrder;
  note?: SortOrder;
  StatusId?: SortOrder;
  updatedAt?: SortOrder;
  UserID?: SortOrder;
};

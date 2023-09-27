import { SortOrder } from "../../util/SortOrder";

export type ScheduleIntervalOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  dayScheduleId?: SortOrder;
  end?: SortOrder;
  id?: SortOrder;
  label?: SortOrder;
  start?: SortOrder;
  updatedAt?: SortOrder;
};

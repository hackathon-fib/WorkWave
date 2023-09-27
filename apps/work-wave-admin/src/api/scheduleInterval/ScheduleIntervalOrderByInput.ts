import { SortOrder } from "../../util/SortOrder";

export type ScheduleIntervalOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  dayScheduleId?: SortOrder;
  id?: SortOrder;
  label?: SortOrder;
  updatedAt?: SortOrder;
};

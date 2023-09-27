import { DayScheduleWhereInput } from "./DayScheduleWhereInput";
import { DayScheduleOrderByInput } from "./DayScheduleOrderByInput";

export type DayScheduleFindManyArgs = {
  where?: DayScheduleWhereInput;
  orderBy?: Array<DayScheduleOrderByInput>;
  skip?: number;
  take?: number;
};

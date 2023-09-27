import { ScheduleIntervalWhereInput } from "./ScheduleIntervalWhereInput";
import { ScheduleIntervalOrderByInput } from "./ScheduleIntervalOrderByInput";

export type ScheduleIntervalFindManyArgs = {
  where?: ScheduleIntervalWhereInput;
  orderBy?: Array<ScheduleIntervalOrderByInput>;
  skip?: number;
  take?: number;
};

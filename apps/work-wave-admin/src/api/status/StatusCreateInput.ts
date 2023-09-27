import { DayScheduleCreateNestedManyWithoutStatusesInput } from "./DayScheduleCreateNestedManyWithoutStatusesInput";

export type StatusCreateInput = {
  daySchedules?: DayScheduleCreateNestedManyWithoutStatusesInput;
  name?: string | null;
};

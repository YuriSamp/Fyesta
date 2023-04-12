export interface holidayType {
  day: number;
  month: number;
  description?: string;
  name: string;
  type: 'Feriado Nacional' | 'Data Comemorativa';
}

export interface brasilApiType {
  date: string;
  name: string;
  type: string;
}

type CalendarTaskTypes =
  | 'Reminder'
  | 'Feriado Nacional'
  | 'Data Comemorativa'
  | 'Task';

export interface ICalendarTask {
  name: string;
  description?: string;
  day?: number;
  month?: number;
  year?: number;
  type: CalendarTaskTypes;
}

export interface ICalendarDays {
  id: number;
  day: number;
  Month: number;
  year: number;
  tasks: ICalendarTask[];
}

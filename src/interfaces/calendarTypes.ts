export interface holidayType {
  day: number;
  month: number;
  name: string;
  type: 'Feriado Nacional' | 'Data Comemorativa';
}

type holidayDescriptionType = Omit<holidayType, 'day' | 'month'>;

export interface brasilApiType {
  date: string;
  name: string;
  type: string;
}

interface taskType {
  name: string;
  description: string;
  date: string;
}

interface reminderType {
  name: string;
  Reminder: string;
  date: string;
}

type ICalendarTask = reminderType | taskType | holidayDescriptionType;

export interface ICalendarDays {
  day: number;
  Month: number;
  year: number;
  tasks: ICalendarTask[];
}

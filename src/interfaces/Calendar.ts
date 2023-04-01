export interface ICalendarDays {
  day: number;
  Month: number;
  year: number;
  tasks?: ICalendarTask[];
}

interface ICalendarTask {
  type: 'Tarefa' | 'Lembrete';
  name: string;
}

interface Task {
  name: string;
  description: string;
  date: string;
}

interface Reminder {
  name: string;
  Reminder: string;
  date: string;
}

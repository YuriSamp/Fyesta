import { CalendarTaskTypes } from 'src/interfaces/calendarTypes';

export const getTaskColor = (type: CalendarTaskTypes) => {
  let taskColor = '';
  switch (type) {
    case 'Data Comemorativa':
      taskColor = 'bg-blue-400';
      break;
    case 'Feriado Nacional':
      taskColor = 'bg-violet-400';
      break;
    case 'Reminder':
      taskColor = 'bg-green-400';
      break;
    case 'Task':
      taskColor = 'bg-orange-400';
      break;
  }
  return taskColor;
};

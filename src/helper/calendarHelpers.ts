import {
  ICalendarDays,
  ICalendarTask,
  brasilApiType,
  holidayType,
} from 'src/interfaces/calendarTypes';
import { CalendarDataConverter } from './dateHelpers';

const DatasComemorativas: holidayType[] = [
  {
    day: 1,
    month: 3,
    name: 'Dia da mentira',
    type: 'Data Comemorativa',
  },
  {
    day: 12,
    month: 5,
    name: 'Dia dos namorados',
    type: 'Data Comemorativa',
  },
  {
    day: 13,
    month: 8,
    name: 'Dia do programador',
    type: 'Data Comemorativa',
  },
  {
    day: 28,
    month: 9,
    name: 'Dia do servidor público',
    type: 'Data Comemorativa',
  },
  {
    day: 20,
    month: 10,
    name: 'Dia da consciencia negra',
    type: 'Data Comemorativa',
  },
  {
    day: 24,
    month: 11,
    name: 'Véspera de natal',
    type: 'Data Comemorativa',
  },
  {
    day: 30,
    month: 11,
    name: 'Véspera de ano novo',
    type: 'Data Comemorativa',
  },
  {
    day: 1,
    month: 0,
    name: 'Ano novo',
    type: 'Data Comemorativa',
  },
  {
    day: 1,
    month: 4,
    name: 'Dia do trabalho',
    type: 'Feriado Nacional',
  },
];

const generateCalendarDays = (year: number, MonthIndex: number) => {
  const date = new Date();
  date.setDate(1);
  const calendarDays: ICalendarDays[] = [];
  const prevLastDay = new Date(year, MonthIndex, 0).getDate();
  const lastDayOfWeekIndex = new Date(year, MonthIndex + 1, 0).getDay();
  const nextDays = 7 - lastDayOfWeekIndex - 1;
  const firstDayIndex = new Date(year, MonthIndex, 0).getDay();
  const lastDay = new Date(year, MonthIndex + 1, 0).getDate();

  //Gera os dias do mes anterior até o começo do mês atual
  if (firstDayIndex !== 6) {
    for (let i = firstDayIndex + 1; i > 0; i--) {
      if (MonthIndex - 1 === -1) {
        calendarDays.push({
          id: 1 * i,
          day: prevLastDay - i + 1,
          Month: 11,
          year: year - 1,
          tasks: [],
        });
      } else {
        calendarDays.push({
          id: 1 * i,
          day: prevLastDay - i + 1,
          Month: MonthIndex - 1,
          year: year,
          tasks: [],
        });
      }
    }
  }

  //Gera os dias do mês atual
  for (let i = 1; i <= lastDay; i++) {
    calendarDays.push({
      id: 8 + i,
      day: i,
      Month: MonthIndex,
      year: year,
      tasks: [],
    });
  }

  //Gera os dias do próximo mês atual
  for (let i = 1; i <= nextDays; i++) {
    if (MonthIndex + 1 === 12) {
      calendarDays.push({
        id: 50 + i,
        day: i,
        Month: 0,
        year: year + 1,
        tasks: [],
      });
    } else {
      calendarDays.push({
        id: 50 + i,
        day: i,
        Month: MonthIndex + 1,
        year: year,
        tasks: [],
      });
    }
  }

  return calendarDays;
};

const holidays = (data: brasilApiType[] | undefined) => {
  if (data) {
    const holidays = data.map((item) => {
      const { day, month } = CalendarDataConverter(item.date);
      const name = item.name;
      const newObject: holidayType = {
        day: day,
        month: month,
        name: name,
        type: 'Feriado Nacional',
      };
      return newObject;
    });

    const allHolidays = holidays?.concat(DatasComemorativas);
    const allHollidaysSorted = allHolidays.sort((a, b) => a.month - b.month);
    return allHollidaysSorted;
  }
};

// Função responsavel por montar o calendario e exportar ele
export const calendarBuilder = (
  year: number,
  monthIndex: number,
  calendarTasks: ICalendarTask[],
  holidaysArr: brasilApiType[] | undefined
) => {
  const holidaysList = holidays(holidaysArr);
  const calendarDays = generateCalendarDays(year, monthIndex);

  if (holidaysList) {
    calendarDays.forEach((day) => {
      const holiday = holidaysList.find(
        (h) => h.month === day.Month && h.day === day.day
      );
      if (holiday) {
        day.tasks.push({
          name: holiday.name,
          type: holiday.type,
        });
      }
      const task = calendarTasks.find(
        (task) =>
          task.month === day.Month &&
          task.day === day.day &&
          task.year === day.year
      );
      if (task) {
        day.tasks.push({
          name: task.name,
          type: task.type,
          description: task.type,
        });
      }
    });
  }
  return calendarDays;
};

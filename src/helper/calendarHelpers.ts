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

const getPrevMonthDays = (
  year: number,
  MonthIndex: number,
  calendarDays: ICalendarDays[]
) => {
  const firstDayIndex = new Date(year, MonthIndex, 0).getDay();
  const prevLastDay = new Date(year, MonthIndex, 0).getDate();

  if (firstDayIndex !== 6) {
    for (let i = firstDayIndex + 1; i > 0; i--) {
      if (MonthIndex - 1 === -1) {
        calendarDays.push({
          id: prevLastDay - i + 1 * 10,
          day: prevLastDay - i + 1,
          Month: 11,
          year: year - 1,
          tasks: [],
        });
      } else {
        calendarDays.push({
          id: prevLastDay - i + 1 * 10,
          day: prevLastDay - i + 1,
          Month: MonthIndex - 1,
          year: year,
          tasks: [],
        });
      }
    }
  }
};

const getNextMonthDays = (
  year: number,
  MonthIndex: number,
  calendarDays: ICalendarDays[]
) => {
  const lastDayOfWeekIndex = new Date(year, MonthIndex + 1, 0).getDay();
  const nextDays = 7 - lastDayOfWeekIndex - 1;
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
};

const getMonthDays = (
  year: number,
  MonthIndex: number,
  calendarDays: ICalendarDays[]
) => {
  const lastDay = new Date(year, MonthIndex + 1, 0).getDate();
  for (let i = 1; i <= lastDay; i++) {
    calendarDays.push({
      id: i,
      day: i,
      Month: MonthIndex,
      year: year,
      tasks: [],
    });
  }
};

const generateCalendarDays = (year: number, monthIndex: number) => {
  const calendarDays: ICalendarDays[] = [];

  getPrevMonthDays(year, monthIndex, calendarDays);
  getMonthDays(year, monthIndex, calendarDays);
  getNextMonthDays(year, monthIndex, calendarDays);

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
      const tasks: ICalendarTask[] = [];

      const holidays = holidaysList.filter(
        (h) => h.month === day.Month && h.day === day.day
      );
      holidays.forEach((holiday) => {
        tasks.push({
          name: holiday.name,
          type: holiday.type,
        });
      });

      const dayTasks = calendarTasks.filter(
        (task) =>
          task.month === day.Month &&
          task.day === day.day &&
          task.year === day.year
      );
      dayTasks.forEach((task) => {
        tasks.push({
          name: task.name,
          type: task.type,
          description: task.description,
        });
      });

      day.tasks = tasks;
    });
  }
  return calendarDays;
};

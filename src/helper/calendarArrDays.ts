export interface ICalendarDays {
  day: number;
  Month: number;
  year: number;
  tasks?: [];
}

// interface ICalendarTask {
//   type: 'Data Comemorativa' | 'Feriado' | 'Task';
// }

export const CalendarDays = (year: number, MonthIndex: number) => {
  const date = new Date();
  date.setDate(1);
  const MonthDays: ICalendarDays[] = [];
  const prevLastDay = new Date(year, MonthIndex, 0).getDate();
  const lastDayIndex = new Date(year, MonthIndex + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const firstDayIndex = new Date(year, MonthIndex, 0).getDay();
  const lastDay = new Date(year, MonthIndex + 1, 0).getDate();

  if (firstDayIndex !== 6) {
    for (let i = firstDayIndex + 1; i > 0; i--) {
      if (MonthIndex - 1 === -1) {
        MonthDays.push({ day: prevLastDay - i + 1, Month: 11, year: year - 1 });
      } else {
        MonthDays.push({
          day: prevLastDay - i + 1,
          Month: MonthIndex - 1,
          year: year,
        });
      }
    }
  }

  for (let i = 1; i <= lastDay; i++) {
    MonthDays.push({ day: i, Month: MonthIndex, year: year });
  }

  for (let i = 1; i <= nextDays; i++) {
    if (MonthIndex + 1 === 12) {
      MonthDays.push({ day: i, Month: 0, year: year + 1 });
    } else {
      MonthDays.push({ day: i, Month: MonthIndex + 1, year: year });
    }
  }

  return MonthDays;
};

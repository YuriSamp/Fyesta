export interface CalendarDays {
  days: number;
  Month: number;
}

export const CalendarArrDays = (year: number, MonthIndex: number) => {
  const date = new Date();
  date.setDate(1);
  const arr: CalendarDays[] = [];
  const prevLastDay = new Date(year, MonthIndex, 0).getDate();
  const lastDayIndex = new Date(year, MonthIndex + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const firstDayIndex = new Date(year, MonthIndex, 0).getDay();
  const lastDay = new Date(year, MonthIndex + 1, 0).getDate();

  if (firstDayIndex !== 6) {
    for (let i = firstDayIndex + 1; i > 0; i--) {
      arr.push({ days: prevLastDay - i + 1, Month: MonthIndex - 1 });
    }
  }

  if (year % 2 === 0) {
  }
  for (let i = 1; i <= lastDay; i++) {
    arr.push({ days: i, Month: MonthIndex });
  }

  for (let i = 1; i <= nextDays; i++) {
    arr.push({ days: i, Month: MonthIndex + 1 });
  }

  return arr;
};

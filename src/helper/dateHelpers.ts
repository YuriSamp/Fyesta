function formatDateString(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${year}-${formattedMonth}-${formattedDay}`;
}

export function todayDateToDateInput(): string {
  const date = new Date();
  return formatDateString(date);
}

export function dateCalendarConvert(year: number, month: number): string {
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;
  return `${year}-${formattedMonth}`;
}

export function dateToDateInput(
  day: number,
  month: number,
  year: number
): string {
  const date = new Date(year, month - 1, day);
  return formatDateString(date);
}

export function formateData(dateString: string) {
  try {
    const date = new Date(dateString);
    return formatDateString(date);
  } catch (error) {
    console.error(`Erro ao formatar data: ${error}`);
    return '';
  }
}

export function CalendarDataConverter(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate() + 1;
  const month = date.getMonth();
  return { day, month };
}

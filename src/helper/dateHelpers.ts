import { arrMeses } from 'src/shared/months';
function formatDateString(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDay = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${year}-${formattedMonth}-${formattedDay}`;
}

function monthNumberToString(month: number) {
  let daystring = arrMeses[month];
  return daystring;
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

export function getDayOfTheWeek(day: number, locale: 'pt-BR' | 'en-US') {
  switch (day) {
    case 0:
      return locale === 'pt-BR' ? 'Domingo' : 'Sunday';
    case 1:
      return locale === 'pt-BR' ? 'Segunda-Feira' : 'Monday';
    case 2:
      return locale === 'pt-BR' ? 'Terça-Feira' : 'Thursday';
    case 3:
      return locale === 'pt-BR' ? 'Quarta-Feira' : 'Wednesday';
    case 4:
      return locale === 'pt-BR' ? 'Quinta-Feira' : 'Tuednesday';
    case 5:
      return locale === 'pt-BR' ? 'Sexta-Feira' : 'Friday';
    case 6:
      return locale === 'pt-BR' ? 'Sábado' : 'Saturday';
  }
}

export function detailsModalDateDisplay(
  date: string,
  locale: 'pt-BR' | 'en-US'
) {
  const dayofWeek = new Date(date).getDay();
  let dayofWeekString = getDayOfTheWeek(dayofWeek, locale);
  const dateParts = date.split('-');
  const day = dateParts[2];
  const month = monthNumberToString(Number(dateParts[1]) - 1);
  return `${dayofWeekString}, ${day} de ${month}`;
}

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

export function dayNumberToDayString(day: number) {
  let daystring = '';
  switch (day) {
    case 0:
      daystring = 'Segunda-feira';
      break;
    case 1:
      daystring = 'Terça-feira';
      break;
    case 2:
      daystring = 'Quarta-feira';
      break;
    case 3:
      daystring = 'Quinta-feira';
      break;
    case 4:
      daystring = 'Sexta-feira';
      break;
    case 5:
      daystring = 'Sábado';
      break;
    case 6:
      daystring = 'Domingo';
      break;
  }
  return daystring;
}

export function getDayOfTheWeek(day: number) {
  switch (day) {
    case 0:
      return 'Domingo';
    case 1:
      return 'Segunda-Feira';
    case 2:
      return 'Terça-Feira';
    case 3:
      return 'Quarta-Feira';
    case 4:
      return 'Quinta-Feira';
    case 5:
      return 'Sexta-Feira';
    case 6:
      return 'Sábado';
  }
}

function monthNumberToString(month: number) {
  let daystring = '';
  switch (month) {
    case 0:
      daystring = 'Janeiro';
      break;
    case 1:
      daystring = 'Fevereiro';
      break;
    case 2:
      daystring = 'Março';
      break;
    case 3:
      daystring = 'Abril';
      break;
    case 4:
      daystring = 'Maio';
      break;
    case 5:
      daystring = 'Junho';
      break;
    case 6:
      daystring = 'Julho';
      break;
    case 7:
      daystring = 'Agosto';
      break;
    case 8:
      daystring = 'Setembro';
      break;
    case 9:
      daystring = 'Outubro';
      break;
    case 10:
      daystring = 'Novembro';
      break;
    case 11:
      daystring = 'Dezembro';
      break;
  }
  return daystring;
}

export function detailsModalDateDisplay(date: string) {
  const dayofWeek = new Date(date).getDay();
  let dayofWeekString = '';

  switch (dayofWeek) {
    case 0:
      dayofWeekString = 'Segunda-Feira';
      break;
    case 1:
      dayofWeekString = 'Terça-Feira';
      break;
    case 2:
      dayofWeekString = 'Quarta-Feira';
      break;
    case 3:
      dayofWeekString = 'Quinta-Feira';
      break;
    case 4:
      dayofWeekString = 'Sexta-Feira';
      break;
    case 5:
      dayofWeekString = 'Sábado';
      break;
    case 6:
      dayofWeekString = 'Domingo';
      break;
  }

  const dateParts = date.split('-');
  const day = dateParts[2];
  const month = monthNumberToString(Number(dateParts[1]));
  return `${dayofWeekString}, ${day} de ${month}`;
}

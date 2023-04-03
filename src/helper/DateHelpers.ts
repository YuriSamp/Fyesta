export function TodayDateToDateInput(): string {
  let DateInput = '';
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (month < 10 && day < 10) {
    DateInput = year + '-' + '0' + month + '-' + '0' + day;
    return DateInput;
  }
  if (month < 10) {
    DateInput = year + '-' + '0' + month + '-' + day;
    return DateInput;
  }
  DateInput = year + '-' + month + '-' + '0' + day;
  return DateInput;
}

export function DateCalendarConvert(year: number, month: number): string {
  let DateInput = '';
  if (month < 10) {
    DateInput = year + '-' + '0' + String(Number(month) + 1);
    return DateInput;
  }
  DateInput = year + '-' + String(Number(month) + 1);
  return DateInput;
}

export function DateToDateInput(
  day: number,
  month: number,
  year: number
): string {
  let DateInput = '';

  if (month < 10 && day < 10) {
    DateInput = year + '-' + '0' + month + '-' + '0' + day;
    return DateInput;
  }
  if (month < 10) {
    DateInput = year + '-' + '0' + month + '-' + day;
    return DateInput;
  }
  DateInput = year + '-' + month + '-' + '0' + day;
  return DateInput;
}

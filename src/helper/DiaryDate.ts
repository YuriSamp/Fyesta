export default function DiaryDateHelper(): string {
  let DateInput = '';
  const date = new Date();
  const day = date.getDate();
  const mouth = date.getMonth() + 1;
  const year = date.getFullYear();

  if (mouth < 10) {
    DateInput = year + '-' + '0' + mouth + '-' + day;
    return DateInput;
  }
  if (day < 10) {
    DateInput = year + '-' + mouth + '-' + '0' + day;
    return DateInput;
  }
  DateInput = year + '-' + '0' + mouth + '-' + '0' + day;
  return DateInput;
}

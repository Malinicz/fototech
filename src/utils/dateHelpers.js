export function fillValueWithZeros(value) {
  return value.toString().length === 1 ? `0${value}` : value;
}

export function formatDate(datetime) {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const month = fillValueWithZeros(date.getMonth() + 1);
  const day = fillValueWithZeros(date.getDate());
  return `${year}.${month}.${day}`;
}

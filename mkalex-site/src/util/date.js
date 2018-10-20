
const months = [
  'January',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

// from xxxx-09-xx to September
export function getMonthString(date) {
  const monthNum=parseInt(date.substring(5,7)) - 1;
  return months[monthNum]
}
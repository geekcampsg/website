const formatter = new Intl.DateTimeFormat('en-SG', { dateStyle: 'full', timeZone: 'Asia/Singapore' });
export function formatDateFull(date: string | Date) {
  date = new Date(date);
  return formatter.format(date);
}

const dateFormatter2 = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: '2-digit', timeZone: 'Asia/Singapore' });
export function formatDateLong(date: string | Date) {
  date = new Date(date);
  return dateFormatter2.format(date);
}

const timeFormatter = new Intl.DateTimeFormat('en-SG', { timeStyle: 'short', hour12: false, timeZone: 'Asia/Singapore' });
export function formatTime(date: string | Date) {
  date = new Date(date);
  return timeFormatter.format(date);
}
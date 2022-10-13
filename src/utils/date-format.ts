const formatter = new Intl.DateTimeFormat('en-SG', { dateStyle: 'full' });
export function formatDateFull(date: string | Date) {
  date = new Date(date);
  return formatter.format(date);
}

const dateFormatter2 = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: '2-digit' });
export function formatDateLong(date: string | Date) {
  date = new Date(date);
  return dateFormatter2.format(date);
}

const timeFormatter = new Intl.DateTimeFormat('en-SG', { timeStyle: 'short', hour12: false });
export function formatTime(date: string | Date) {
  date = new Date(date);
  return timeFormatter.format(date);
}
export function getLocalTime(timeZone = process.env.TIME_ZONE || 'UTC'): Date {
  const localString = new Date().toLocaleString('en-US', { timeZone });
  return new Date(localString);
}
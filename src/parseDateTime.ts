export const parseDateTime = (dt: string): Date => {
  const [datePart, timePart] = dt.split(':');
  const [hour, min, sec, ms] = timePart.split('-');
  const isoString = `${datePart}T${hour.padStart(2, '0')}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}.${ms.padStart(3, '0')}Z`;
  
  return new Date(isoString);
}
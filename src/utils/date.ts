import { isMonday, isSunday, previousMonday, nextSunday, isBefore, isAfter  } from 'date-fns'

type PossibleDate = string | null | undefined
export const currentWeek = (_date: PossibleDate) => {
  const date = new Date(_date || '');
  const today = new Date();
  const monday =  isMonday(today) ? today : previousMonday(today);
  const sunday = isSunday(today) ? today : nextSunday(today);

  return isAfter(date, monday) && isBefore(date, sunday);
}

export const afterCurrentWeek = (_date: PossibleDate) => {
  const date = new Date(_date || '');
  const today = new Date();
  const sunday = isSunday(today) ? today : nextSunday(today);

  return isAfter(date, sunday);
}

export const beforeCurrentWeek = (_date: PossibleDate) => {
  const date = new Date(_date || '');
  const today = new Date();
  const monday =  isMonday(today) ? today : previousMonday(today);

  return isBefore(date, monday);
}

export const sortByDateAsc = (_dateA: PossibleDate, _dateB: PossibleDate) => {
  const dateA = new Date(_dateA || '')
  const dateB = new Date(_dateB || '')

  return dateA <= dateB ? -1 : 1
}

export const sortByDateDesc = (_dateA: PossibleDate, _dateB: PossibleDate) => {
  const dateA = new Date(_dateA || '')
  const dateB = new Date(_dateB || '')

  return dateA > dateB ? -1 : 1
}

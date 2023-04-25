import { atom } from 'jotai';
import { dateToDateInput, dayNumberToDayString } from 'src/helper/dateHelpers';
import { CalendarTaskTypes, ICalendarTask } from 'src/interfaces/calendarTypes';

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

export const calendarContext = atom<ICalendarTask[]>([]);
export const actionModalOpenState = atom<boolean>(false);
export const detailsModalOpenState = atom<boolean>(false);
export const taskTypeAtom = atom<CalendarTaskTypes | undefined>(undefined);
export const modalDateAtom = atom<string>(
  dateToDateInput(day, month + 1, year)
);

export const taskNameAtom = atom<string>('');
export const taskDescriptionAtom = atom<string>('');
export const nationalHolidayAtom = atom<boolean>(true);
export const holidayAtom = atom<boolean>(true);
export const reminderAtom = atom<boolean>(true);
export const taskAtom = atom<boolean>(true);
export const modalOptionAtom = atom<'Tarefa' | 'Lembrete'>('Tarefa');

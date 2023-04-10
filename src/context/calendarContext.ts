import { atom } from 'jotai';
import { ICalendarTask } from 'src/interfaces/calendarTypes';

export const calendarContext = atom<ICalendarTask[]>([]);

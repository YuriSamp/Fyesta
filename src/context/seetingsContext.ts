import { atom } from 'jotai';

export const Language = atom<'pt-BR' | 'en-US'>('pt-BR');
export const pomodoroTimerAtom = atom(25 * 60);
export const BreakTimerAtom = atom(5 * 60);

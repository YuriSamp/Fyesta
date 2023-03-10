import { atom } from 'jotai';
import { IGoal } from 'src/interfaces/Goals';

export const Goals = atom<IGoal[]>([]);

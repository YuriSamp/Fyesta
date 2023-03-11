import { atom } from 'jotai';
import { Goal } from 'src/interfaces/Goals';

export const Goals = atom<Goal[]>([]);

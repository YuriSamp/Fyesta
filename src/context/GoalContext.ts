import { atom } from 'jotai';
import { Goal } from 'src/interfaces/GoalsTypes';

export const Goals = atom<Goal[]>([]);

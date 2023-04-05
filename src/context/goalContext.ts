import { atom } from 'jotai';
import { Goal } from 'src/interfaces/goalsTypes';


export const Goals = atom<Goal[]>([]);

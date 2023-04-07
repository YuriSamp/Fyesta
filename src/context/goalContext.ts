import { atom } from 'jotai';
import { Goal } from 'src/interfaces/goalsTypes';

export const Goals = atom<Goal[]>([]);

export interface categoryType {
  name: string;
  id: number;
}

const categoryInputOptions = [
  { name: 'Intelectual', id: 0 },
  { name: 'Pessoal', id: 1 },
  { name: 'Financeiro', id: 2 },
];

export const categoryOptions = atom<categoryType[]>(categoryInputOptions);

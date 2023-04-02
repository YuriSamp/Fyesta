import { atom } from 'jotai';

type emotionOptions = { name: string; id: number; color?: string };

const optionsTest = [
  { name: 'feliz', id: 0 },
  { name: 'triste', id: 1 },
  { name: 'animado', id: 2 },
  { name: 'indiferente', id: 3 },
];

export const emotionsOptions = atom<emotionOptions[]>(optionsTest);

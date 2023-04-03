import { atom } from 'jotai';

export const emotionColors = [
  { name: 'Blue', color: '#47B7DC' },
  { name: 'Orange', color: '#FF9900' },
  { name: 'Yellow', color: '#F6D155' },
  { name: 'Green', color: '#66A586' },
  { name: 'Beige', color: '#D8C49F' },
  { name: 'Pink', color: '#F698BD ' },
  { name: 'Purple', color: '#BD86D2' },
  { name: 'Red', color: '#D8807D ' },
  { name: 'Grey', color: '#CCCAC9' },
];

export interface emotionOptions {
  name: string;
  id: number;
  color: string;
}

const optionsTest = [
  { name: 'feliz', id: 0, color: '#47B7DC' },
  { name: 'triste', id: 1, color: '#FF9900' },
  { name: 'animado', id: 2, color: '#F6D155' },
  { name: 'indiferente', id: 3, color: '#AD70A4' },
];

export const emotionsOptions = atom<emotionOptions[]>(optionsTest);

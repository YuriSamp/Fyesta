import { atom } from 'jotai';
import { Idiary } from 'src/interfaces/Diary';

export const diaryPage = atom<Idiary[]>([]);
export const diaryId = atom<number>(0);

import { atom } from 'jotai';
import { Idiary } from 'src/interfaces/DiaryTypes';

export const diaryPage = atom<Idiary[]>([]);
export const diaryId = atom<number>(0);

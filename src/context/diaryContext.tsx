import { atom } from 'jotai'
import diary from 'src/interfaces/diary'

export const diaryPage = atom<diary[]>([])

import { atom } from 'jotai';
import { IPlannerTask } from 'src/interfaces/plannerTypes';

const arr: IPlannerTask[] = [];

for (let i = 0; i < 8; i++) {
  arr.push({
    day: i,
    tasks: [
      { id: 1, text: '', done: false },
      { id: 2, text: '', done: false },
      { id: 3, text: '', done: false },
      { id: 4, text: '', done: false },
      { id: 5, text: '', done: false },
    ],
  });
}

export const PlannerTask = atom<IPlannerTask[]>(arr);

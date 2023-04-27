import { Dispatch, SetStateAction } from 'react';

export interface monthControllerProps {
  year: number;
  monthIndex: number;
  setYear: Dispatch<SetStateAction<number>>;
  setMonthIndex: Dispatch<SetStateAction<number>>;
}

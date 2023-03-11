import { SetStateAction } from 'jotai';
import { Dispatch } from 'react';

type SetAtom<Args extends unknown[], Result> = <A extends Args>(
  ...args: A
) => Result;

export interface Goal {
  Id: number;
  Meta: string;
  Tarefas: {
    Tarefa: string;
    realizada: boolean;
    id: number;
  }[];
  Categoria: string;
}

export interface GoalsProps {
  Metas: Goal[];
}
export interface GoalsWithSetterProps extends GoalsProps {
  setMetas: SetAtom<[SetStateAction<Goal[]>], void>;
}

export interface SheetsProps extends GoalsWithSetterProps {
  setState: Dispatch<SetStateAction<boolean>>;
}

export type TaskWithCategory = Omit<Goal, 'Id' | 'Meta'>;

export type Task = {
  Tarefa: string;
  realizada: boolean;
  id: number;
};

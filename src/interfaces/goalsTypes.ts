import { SetStateAction } from 'jotai';
import { Dispatch } from 'react';
import { ModalProps } from './modalTypes';

type SetAtom<Args extends unknown[], Result> = <A extends Args>(
  ...args: A
) => Result;

export type CategoryFilter =
  | 'Todas'
  | 'Concluidas'
  | 'Em progresso'
  | 'Não iniciadas'
  | 'Intelectual'
  | 'Pessoal'
  | 'Financeiro';

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

export interface GoalsModalType extends ModalProps {
  goalId: number | null;
  setGoalId: Dispatch<SetStateAction<number | null>>;
}

export interface GoalsWithSetterProps extends GoalsProps {
  setMetas: SetAtom<[SetStateAction<Goal[]>], void>;
}

export interface SheetsProps extends GoalsWithSetterProps {
  setState: Dispatch<SetStateAction<boolean>>;
  setGoalId: Dispatch<SetStateAction<number | null>>;
}

export type TaskWithCategory = Omit<Goal, 'Id' | 'Meta'>;

export type Task = {
  Tarefa: string;
  realizada: boolean;
  id: number;
};

export interface IField {
  FieldName: 'Intelectual' | 'Pessoal' | 'Financeiro';
  Metas: JSX.Element[];
}

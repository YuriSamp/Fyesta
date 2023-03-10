import { SetStateAction } from 'jotai';
import { SetAtom } from 'jotai/vanilla/atom';
import { Dispatch } from 'react';

export interface IGoal {
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
  Metas: {
    Id: number;
    Meta: string;
    Tarefas: {
      Tarefa: string;
      realizada: boolean;
      id: number;
    }[];
    Categoria: string;
  }[];
  setMetas: SetAtom<
    [
      SetStateAction<
        {
          Id: number;
          Meta: string;
          Tarefas: {
            Tarefa: string;
            realizada: boolean;
            id: number;
          }[];
          Categoria: string;
        }[]
      >
    ],
    void
  >;
}

export interface GoalProp {
  Metas: {
    Id: number;
    Meta: string;
    Tarefas: {
      Tarefa: string;
      realizada: boolean;
      id: number;
    }[];
    Categoria: string;
  }[];
}

export type Tarefas = {
  Catergoria: string;
  Tarefas: {
    Tarefa: string;
    realizada: boolean;
    id: number;
  }[];
}[];

export type Tarefa = {
  Tarefa: string;
  realizada: boolean;
  id: number;
};

export interface SheetsProps extends GoalsProps {
  setState: Dispatch<SetStateAction<boolean>>;
}

import { SetStateAction } from 'jotai';
import { SetAtom } from 'jotai/vanilla/atom';

export interface GoalsProps {
  Metas: {
    Id: number;
    Meta: string;
    Tarefas: {
      Tarefa: string;
      realizada: boolean;
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
    }[];
    Categoria: string;
  }[];
}

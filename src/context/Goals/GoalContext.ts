import { atom } from 'jotai';

//Vai ter que ter um array dentro de tarefas

export const Goals = atom([
  {
    Id: 1,
    Meta: 'Ganhar 10 mil reias',
    Tarefas: [
      { Tarefa: 'Ganhar um aumento', realizada: false },
      { Tarefa: 'Diminuir os custos', realizada: true },
      { Tarefa: 'Participar do jogo do bixo', realizada: false },
    ],
    Categoria: 'Financeiro',
  },
  {
    Id: 2,
    Meta: 'Ganhar 10 mil reias',
    Tarefas: [
      { Tarefa: 'Ganhar um aumento', realizada: false },
      { Tarefa: 'Diminuir os custos', realizada: true },
      { Tarefa: 'Participar do jogo do bixo', realizada: false },
    ],
    Categoria: 'Financeiro',
  },
  {
    Id: 3,
    Meta: 'Ganhar 10 mil reias',
    Tarefas: [
      { Tarefa: 'Ganhar um aumento', realizada: false },
      { Tarefa: 'Diminuir os custos', realizada: false },
      { Tarefa: 'Participar do jogo do bixo', realizada: true },
    ],
    Categoria: 'Financeiro',
  },
]);

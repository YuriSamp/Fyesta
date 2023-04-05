export interface IPlannerTask {
  day: number;
  tasks: [
    { id: number; text: string; done: boolean },
    { id: number; text: string; done: boolean },
    { id: number; text: string; done: boolean },
    { id: number; text: string; done: boolean },
    { id: number; text: string; done: boolean }
  ];
}

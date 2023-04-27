export interface Idiary {
  title: string;
  data: string;
  feeling: string;
  text: string;
  id: number;
  color: string;
}

export type SetAtom<Args extends unknown[], Result> = <A extends Args>(
  ...args: A
) => Result;

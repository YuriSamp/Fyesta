import { Dispatch, SetStateAction } from 'react';

export type inputProps = {
  labelText?: string;
  Id?: string;
  type: string;
  placeholder: string;
  value: string;
  theme?: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export type passwordInputType = Omit<inputProps, 'type'>;

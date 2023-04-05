import { toast } from 'react-toastify';

export const toastNotify = (
  Comparation: boolean,
  msg: string,
  type: 'warn' | 'success' | 'error' | 'info'
) => {
  if (Comparation) {
    const notify = () => toast[type](msg);
    notify();
    throw Error(msg);
  }
};

import { toast } from 'react-toastify';

export const toastNotify = (
  Comparation: any,
  msg: string,
  type: 'warn' | 'sucess' | 'error' | 'info'
) => {
  if (Comparation) {
    const notify = () => {
      switch (type) {
        case 'sucess':
          toast.success(msg);
          break;
        case 'error':
          toast.error(msg);
          break;
        case 'info':
          toast.info(msg);
          break;
        case 'warn':
          toast.warn(msg);
          break;
      }
    };
    notify();
    throw Error(msg);
  }
};

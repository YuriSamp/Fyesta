import { Dispatch, SetStateAction } from 'react';

export type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

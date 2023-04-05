import { Dispatch, SetStateAction } from 'react'

export type ModalProps = {
  State: boolean;
  SetState: Dispatch<SetStateAction<boolean>>
}

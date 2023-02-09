import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import AvatarIcon from '.';
import {
  ExitIcon
} from '@radix-ui/react-icons';


function AvatarWithDropDown() {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <AvatarIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            <p className='italic'>FYESTA</p>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Perfil
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Atividade
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Configurações
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Ajuda
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
            Atalhos
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownMenu.Item className="DropdownMenuItem">
            <button className='flex gap-2'>
              <ExitIcon />
              Fazer Logout
            </button>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default AvatarWithDropDown

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
        <button className="rounded-full h-9 w-9 " aria-label="Customise options">
          <AvatarIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="text-black text-base flex items-center px-6 outline-none select-none">
            <p className='italic'>FYESTA</p>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-gray-800 hover:text-white">
            Perfil
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-gray-800 hover:text-white">
            Atividade
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-gray-800 hover:text-white">
            Configurações
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-gray-800 hover:text-white">
            Ajuda
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-gray-800 hover:text-white">
            Atalhos
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-[1px] m-1 bg-gray-800" />
          <DropdownMenu.Item className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-gray-800 hover:text-white">
            <button className='flex gap-2'>
              <ExitIcon />
              Fazer Logout
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default AvatarWithDropDown

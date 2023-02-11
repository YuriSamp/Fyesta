import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import AvatarIcon from '.';
import {
  ExitIcon
} from '@radix-ui/react-icons';
import Link from 'next/link';


function AvatarWithDropDown() {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="rounded-full h-9 w-9 " aria-label="Customise options">
          <AvatarIcon

          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="text-black text-base flex items-center px-6 outline-none select-none mb-1 ">
            <p className='italic'>FYESTA</p>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-gray-800 hover:text-white">
            <Link href='./seetings/perfil'>Perfil e visibilidade</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-gray-800 hover:text-white">
            <Link href='./settings'>Configurações</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-gray-800 hover:text-white">
            <Link href='./settings/atividade' >Atividade</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-gray-800 hover:text-white">
            <Link href='./seetings/shortcuts'  >Atalhos</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-gray-800 hover:text-white">
            <Link href='./settings/about' >Sobre</Link>
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

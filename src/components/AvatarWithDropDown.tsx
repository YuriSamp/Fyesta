import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import AvatarIcon from './avatar';
import { ExitIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { routes } from '@ui/SettingsHeader';
import { useRouter } from 'next/router';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from 'src/server/Firebase/ClientApp';
import nookies from 'nookies'

interface Props {
  Path: string | undefined
}

export default function AvatarWithDropDown({ Path }: Props) {
  const router = useRouter()

  const [signOut] = useSignOut(auth);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="rounded-full h-9 w-9 " aria-label="Customise options">
          <AvatarIcon
            Width='md'
            userPhoto={Path}
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="text-black text-base flex items-center px-6 outline-none select-none mb-1 ">
            <p className='italic'>FYESTA</p>
          </DropdownMenu.Item>
          {routes.map((item, index) => (
            <DropdownMenu.Item
              className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-violet-900 dark:hover:bg-gray-800 hover:text-white"
              key={index}
            >
              <Link href={item.link} className='w-full' >{item.name}</Link>
            </DropdownMenu.Item>

          ))}
          <DropdownMenu.Separator className="h-[1px] m-1 bg-gray-800" />
          <DropdownMenu.Item className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-violet-900 dark:hover:bg-gray-800 hover:text-white">
            <button
              className='flex gap-2'
              onClick={async () => {
                const sucess = await signOut()
                if (sucess)
                  nookies.destroy(undefined, 'token')
                router.push('/')
              }}>
              <ExitIcon />
              Sair da conta
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

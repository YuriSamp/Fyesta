import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import AvatarIcon from './avatar';
import { ExitIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from 'src/server/Firebase/ClientApp';
import nookies from 'nookies'
import { routes } from 'src/translate/settings/header';


type Props = {
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
        <DropdownMenu.Content className=" absolute top-[12px] left-[-190px] min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade" sideOffset={5}>
          <DropdownMenu.Item className="text-black text-base flex items-center px-6 outline-none select-none mb-1 ">
            <p className='italic'>FYESTA</p>
          </DropdownMenu.Item>
          {routes.map((item, index) => (
            <DropdownMenu.Item
              className="text-sm text-black rounded flex items-center h-6 px-5 py-0 relative pl-6 select-none outline-none cursor-pointer hover:bg-violet-900 dark:hover:bg-gray-800 hover:text-white"
              key={index}
            >
              <Link href={item.link} className='w-full' >{item['pt-BR'].name}</Link>
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

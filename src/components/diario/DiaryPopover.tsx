
import React from 'react'
import * as Popover from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useAtomValue } from 'jotai';
import { emotionsOptions } from 'src/context/emotionsOptions';
import UpperCaseFirstLetter from 'src/utils/UppercaseFirstLetter';

export function DiaryPopover() {
  const options = useAtomValue(emotionsOptions)

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className='border-[1px] border-[#2A292B] w-36 h-12 cursor-pointer rounded-md'
        >Cores
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <div className="flex flex-col gap-2.5">
            <div className='flex justify-between'>
              <p className="text-mauve12 text-[15px] leading-[19px] font-medium mb-2.5">Cores das emoções</p>
              <Popover.Close
                className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center  outline-none cursor-pointer"
                aria-label="Close"
              >
                <Cross2Icon />
              </Popover.Close>
            </div>
            <ul>
              {options.map(option => (
                <li key={option.id} className='flex justify-between items-center w-full py-1'>
                  <div className='flex gap-3 items-center'>
                    <div
                      style={{ backgroundColor: option.color }}
                      className={`h-5 w-5 rounded-md`}
                    >
                    </div>
                    <p className=''>{UpperCaseFirstLetter(option.name)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

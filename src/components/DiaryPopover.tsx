
import React from 'react'
import * as Popover from '@radix-ui/react-popover';
import { Cross2Icon } from '@radix-ui/react-icons';

function DiaryPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className='border-[1px] border-[#2A292B] w-36 h-12 cursor-pointer rounded-md'
        >Cores</button>
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
                className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center  outline-none cursor-default"
                aria-label="Close"
              >
                <Cross2Icon />
              </Popover.Close>
            </div>
            <fieldset className="flex gap-5 items-center">
              <label className="text-[13px] text-violet11 w-[75px]" htmlFor="width">
                Width
              </label>
              <input
                className="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="width"
                defaultValue="100%"
              />
            </fieldset>
            <fieldset className="flex gap-5 items-center">
              <label className="text-[13px] text-violet11 w-[75px]" htmlFor="maxWidth">
                Max. width
              </label>
              <input
                className="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="maxWidth"
                defaultValue="300px"
              />
            </fieldset>
            <fieldset className="flex gap-5 items-center">
              <label className="text-[13px] text-violet11 w-[75px]" htmlFor="height">
                Height
              </label>
              <input
                className="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="height"
                defaultValue="25px"
              />
            </fieldset>
            <fieldset className="flex gap-5 items-center">
              <label className="text-[13px] text-violet11 w-[75px]" htmlFor="maxHeight">
                Max. height
              </label>
              <input
                className="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                id="maxHeight"
                defaultValue="none"
              />
            </fieldset>
          </div>

          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default DiaryPopover

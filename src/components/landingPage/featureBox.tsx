import Image, { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';
import * as Portal from '@radix-ui/react-portal';
import { useState, SetStateAction, Dispatch } from 'react'
import { useClickOutside } from 'src/hooks/useClickOutside';
import { atom, useSetAtom } from 'jotai';


interface featureBox {
  Title: string
  Description: string
  Icon: IconType
  image1: StaticImageData
  image2: StaticImageData
  image3: StaticImageData
  image4: StaticImageData
}

interface imageZoom {
  image: StaticImageData
  alt: string
  isZoomOpen: boolean
  setisZoomOpen: Dispatch<SetStateAction<boolean>>
  setIsBlured: Dispatch<SetStateAction<boolean>>
}

export const bluredAtom = atom<boolean>(false)

export function FeatureBox({ Description, Title, Icon, image1, image2, image3, image4 }: featureBox) {

  const [image, setImage] = useState<StaticImageData>(image1)
  const [isZoomOpen, setisZoomOpen] = useState(false)
  const setIsBlured = useSetAtom(bluredAtom)

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start pt-20 gap-8'>
      <div className='flex flex-col w-[400px]'>
        <div className='flex gap-2 items-center justify-center lg:justify-start'>
          <Icon className='w-5 h-5' />
          <h3 className='text-2xl'>{Title}</h3>
        </div>
        <h3 className='text-lg pt-2 px-5 sm:px-0 text-center sm:text-left'>{Description}</h3>
      </div>
      <div className='grid grid-cols-2 justify-items-center gap-6 '>
        <Image
          src={image1}
          alt='foto da parte de login'
          width={300}
          height={500}
          className='drop-shadow-2xl rounded-md cursor-pointer'
          onClick={() => {
            setImage(image1)
            setisZoomOpen(true)
            setIsBlured(true)
          }}
        />
        <Image
          src={image2}
          alt='foto da parte de login'
          width={300}
          height={500}
          className='drop-shadow-2xl rounded-md cursor-pointer'
          onClick={() => {
            setImage(image2)
            setisZoomOpen(true)
            setIsBlured(true)
          }}
        />
        <Image
          src={image3}
          alt='foto da parte de login'
          width={300}
          height={500}
          className='drop-shadow-2xl rounded-md cursor-pointer'
          onClick={() => {
            setImage(image3)
            setisZoomOpen(true)
            setIsBlured(true)
          }}
        />
        <Image
          src={image4}
          alt='foto da parte de login'
          width={300}
          height={500}
          className='drop-shadow-2xl rounded-md cursor-pointer'
          onClick={() => {
            setImage(image4)
            setisZoomOpen(true)
            setIsBlured(true)
          }}
        />
      </div>
      <ImageZoom
        image={image}
        alt='teste'
        isZoomOpen={isZoomOpen}
        setisZoomOpen={setisZoomOpen}
        setIsBlured={setIsBlured}
      />
    </div>
  )
}


function ImageZoom({ image, alt, isZoomOpen, setisZoomOpen, setIsBlured }: imageZoom) {

  useClickOutside(() => {
    setisZoomOpen(false)
    setIsBlured(false)
  })

  return (
    <Portal.Root>
      {isZoomOpen &&
        <div className='fixed left-0 bottom-0 top-[300px] lg:top-[-100px] right-0 px-10 py-10   lg:px-48 lg:py-48 xl:px-60 xl:py-60 2xl:px-72 2xl:py-72'>
          <Image src={image} alt={alt} />
        </div>
      }
    </Portal.Root>
  )
}

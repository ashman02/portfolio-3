import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface WorkCardProps {
  id : number
  name : string
  img : StaticImageData
  skills : string[]
}

const WorkCard = ({id, name, img, skills} : WorkCardProps) => {
  return (
    <Link href={`/works/${id}`}>
    <div className='w-[280px] md:w-[464px] lg:w-[440px] h-[424px] md:h-[546px] lg:h-[512px] bg-bgshade2 px-3 md:px-4 pt-3 md:pt-4 pb-6 lg:pt-6 lg:pb-10 flex flex-col gap-3 md:gap-4 lg:gap-6 items-center justify-center cursor-pointer'>
      <Image src={img} alt='home-image' className='w-full h-full object-cover object-center'/>
      <h1 className='ex-medium-text'>{name}</h1>
      <div className="skills flex gap-2">
        <span className='bg-background px-2 py-1 text-xs leading-[120%]'>{skills[0]}</span>
        <span className='bg-background px-2 py-1 text-xs leading-[120%]'>{skills[1]}</span>
        <span className='bg-background px-2 py-1 text-xs leading-[120%]'>{skills[2]}</span>
      </div>
    </div>
    </Link>
  )
}

export default WorkCard

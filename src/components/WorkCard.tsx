import React from 'react'
import home from '../../public/images/placesur/Home.png'
import Image from 'next/image'

const WorkCard = () => {
  return (
    <div className='w-[280px] md:w-[464px] lg:w-[440px] h-[424px] md:h-[546px] lg:h-[512px] bg-bgshade2 px-3 md:px-4 pt-3 md:pt-4 pb-6 lg:pt-6 lg:pb-10 flex flex-col gap-3 md:gap-4 lg:gap-6 items-center justify-center cursor-pointer'>
      <Image src={home} alt='home-image' className='w-full h-full object-cover object-center'/>
      <h1 className='ex-medium-text'>PLACESUR</h1>
      <div className="skills flex gap-2">
        <span className='bg-background px-2 py-1 text-xs leading-[120%]'>NEXTJS</span>
        <span className='bg-background px-2 py-1 text-xs leading-[120%]'>MONGODB</span>
        <span className='bg-background px-2 py-1 text-xs leading-[120%]'>NEXTAUTH</span>
      </div>
    </div>
  )
}

export default WorkCard

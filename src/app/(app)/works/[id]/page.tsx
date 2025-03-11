"use client"
import React from 'react'
import home from "@/../public/images/placesur/Home.png"
import tab from "@/../public/images/placesur/tab.png"
import mobile from "@/../public/images/placesur/mobile.png"
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const project = {
  id : 1,
  name : "PLACESUR",
  description : "Placesur is an innovative platform designed for travelers and locals to discover, review, and rate unique places based on key aspects such as food, hotels, privacy, and security.",
  skills : ["NextJs", "MongoDB", "NextAuth", "Tailwindcss", "Typescript", "ShadCN UI"],
  homeImage : home,
  tabImage : tab,
  mobileImage : mobile,
  url : "https://www.placesur.com/"
}

const WorkDescription = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })
    tl.to(".init-fade-header", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.inOut",
    }).to(".init-fade-image", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.inOut",
    }, "")

    const fadeArray  = gsap.utils.toArray(".fade-in")
    fadeArray.forEach((element : any) => gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: element,
        start: "top 99%",
        end: "+=300px",
        scrub: true,
        markers : true
      }
    }))
  }, [])
  return (
    <main className='cont py-[128px]'>
      <section className='flex flex-col items-center justify-center gap-8'>
        <div className='overflow-hidden'>
          <h1 className='init-fade-header large-text opacity-0 translate-y-[100%]'>{project.name}</h1>
        </div>
        <div className='w-full h-full rounded-md overflow-hidden'>
          <Image src={project.homeImage} alt='home-image' className='init-fade-image w-full hover:scale-105 h-full transition-transform duration-300 ease-in-out opacity-0'/>
        </div>
        <div className='fade-in flex gap-6 md:gap-4 lg:gap-6 w-full flex-col md:flex-row opacity-0 translate-y-24'>
          <div className='w-full md:w-1/2'>
            <h1 className='medium-text'>DESCRIPTION</h1>
          </div>
          <div className='w-full md:w-1/2'>
            <p className='text-base md:text-[20px] lg:text-2xl leading-[100%] text-bgshade'>{project.description}</p>
          </div>
        </div>
        <div className='fade-in flex gap-6 md:gap-4 lg:gap-6 w-full flex-col md:flex-row opacity-0 translate-y-24'>
          <div className='w-full md:w-1/2'>
            <h1 className='medium-text'>SKILLS</h1>
          </div>
          <div className='w-full md:w-1/2 flex gap-2 flex-wrap h-fit'>
            {project.skills.map((skill) => (
              <span key={skill} className='text-[12px] md:text-base px-2 py-1 bg-bgshade2'>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className='fade-in flex gap-6 md:gap-4 lg:gap-6 w-full flex-col md:flex-row opacity-0 translate-y-24'>
          <div className='w-full md:w-1/2'>
            <h1 className='medium-text'>LIVE</h1>
          </div>
          <div className='w-full md:w-1/2'>
            <Link className='text-bgshade text-base md:text-[20px] lg:text-2xl underline' href={project.url} target='_blank'>{project.url}</Link>
          </div>
        </div>
        <div className='fade-in flex gap-6 md:gap-4 lg:gap-6 w-full flex-col md:flex-row opacity-0 translate-y-24'>
          <div className='w-full md:w-1/2 h-[498px] rounded-md overflow-hidden'>
            <Image src={project.tabImage} alt='tab-image' className='w-full hover:scale-105 h-full transition-transform duration-300 ease-in-out object-cover object-center'/>
          </div>
          <div className='w-full md:w-1/2 h-[498px] rounded-md overflow-hidden'>
            <Image src={project.mobileImage} alt='mobile-image' className='w-full hover:scale-105 h-full transition-transform duration-300 ease-in-out object-cover object-center'/>
          </div>
        </div>
        <div className='w-full h-full flex gap-8 items-center justify-center flex-col'>
            <div className='w-fit'>
              <h1 className='large-text hover:opacity-70 cursor-pointer transition-opacity duration-300 ease-in-out'>NEXT</h1>
            </div>
            <div className='flex'>
             {[1,2,3,4].map((item) => (
              <div key={item} className='w-12 h-12 bg-bgshade hover:scale-150 transition-transform duration-300 ease-in-out origin-bottom cursor-pointer'>
                
              </div>
             ))}
            </div>
        </div>
      </section>
    </main>
  )
}

export default WorkDescription

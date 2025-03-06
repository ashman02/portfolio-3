"use client"
import Image from "next/image"
import deliver from "../../public/images/deliver.png"
import design from "../../public/images/design.png"
import develop from "../../public/images/develop.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export default function Home() {
  const nameRef = useRef<HTMLHeadingElement>(null)
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })
    tl.to(".main-heading", {
      translateY: 0,
      duration: 1.5,
      ease: "power3.inOut",
    }).to(
      nameRef.current,
      {
        opacity: 1,
        duration: 2,
        ease: "power3.inOut",
      },
      "<0.2"
    )
    tl.to(
      ".img",
      {
        opacity: 1,
        duration: 2,
        ease: "power3.inOut",
      },
      "<"
    )
  }, [])
  return (
    <main className="relative cont">
      <section className="hero w-full sec items-center justify-center">
        <h1 ref={nameRef} className="medium-text opacity-0">
          Hi! I’m Ashman, I
        </h1>
        <div className="headings flex flex-col items-center justify-center">
          <div className="heading-1 flex md:gap-4 lg:gap-6 overflow-hidden">
            <h1 className="main-heading large-text translate-y-[150%]">
              DESIGN
            </h1>
            <div className="md:w-[208px] lg:w-[239px] md:h-[67px] lg:h-[92px] hidden md:block">
              <Image
                className="img opacity-0 w-full h-full object-cover object-center"
                src={design}
                alt="design-image"
              />
            </div>
          </div>
          <div className="heading-2 flex md:gap-4 lg:gap-6 overflow-hidden">
            <div className="md:w-[208px] lg:w-[239px] md:h-[67px] lg:h-[92px] hidden md:block">
              <Image
                className="img opacity-0 w-full h-full object-cover object-center"
                src={develop}
                alt="design-image"
              />
            </div>
            <h1 className="main-heading large-text translate-y-[150%]">
              DEVELOP
            </h1>
          </div>
          <div className="heading-3 flex md:gap-4 lg:gap-6 overflow-hidden">
            <h1 className="main-heading large-text translate-y-[150%]">
              DELIVER
            </h1>
            <div className="md:w-[208px] lg:w-[239px] md:h-[67px] lg:h-[92px] hidden md:block">
              <Image
                className="img opacity-0 w-full h-full object-cover object-center"
                src={deliver}
                alt="design-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="aboutme sec items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h1 className="medium-text">ABOUT</h1>
          <h1 className="medium-text">ME</h1>
        </div>
        <div className="ex-medium-text text-center text-bgshade w-full md:w-11/12 lg:w-3/4">I’m a full-stack developer and designer turning your vision into websites that captivate visitors and convert them—without the headaches.</div>
      </section>
    </main>
  )
}

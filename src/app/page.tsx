"use client"
import Image from "next/image"
import deliver from "../../public/images/deliver.png"
import design from "../../public/images/design.png"
import develop from "../../public/images/develop.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import WorkCard from "@/components/WorkCard"
import placesurHome from "@/../public/images/placesur/Home.png"
import appleHome from "@/../public/images/Apple/home.png"
import tattooHome from "@/../public/images/Tattoo/home.png"

const aboutWords = [
  "I’m",
  "a",
  "full-stack",
  "developer",
  "and",
  "designer",
  "turning",
  "your",
  "vision",
  "into",
  "websites",
  "that",
  "captivate",
  "visitors",
  "and",
  "convert",
  "them—without",
  "the",
  "headaches.",
]

export default function Home() {
  gsap.registerPlugin(ScrollTrigger)
  const aboutContRef = useRef<HTMLDivElement>(null)
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

    const tlScroll = gsap.timeline()
    tlScroll
      .to(aboutContRef.current, {
        translateY: 0,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".main-container",
          scrub: 1,
          pin: true,
          start: "top top",
          end: "+=800",
        },
      })
      .to(".about-word", {
        translateY: 0,
        stagger: {
          amount: 1,
          each: 0.2,
          from: "start",
          ease: "power3.inOut",
        },
        scrollTrigger: {
          trigger: aboutContRef.current,
          scrub: 0.1,
          start: "top 50%",
          end: "+=300",
        },
      })

    const workTl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      scrollTrigger: {
        trigger: ".main-container",
        scrub: 1,
        pin: true,
        start: "top -100%",
        end: "+=100%",
      },
    })

    workTl
      .to(".project-1", {
        opacity: 1,
        scale: 1,
        translateY: 0,
      })
      .to(".project-2", {
        opacity: 1,
        scale: 1,
        translateY: 0,
      })
      .to(".project-3", {
        opacity: 1,
        scale: 1,
        translateY: 0,
      })
  }, [])
  return (
    <main className="main-container relative cont overflow-x-hidden">
      <section className="absolute -z-20 hero w-[calc(100%-32px)] md:w-[calc(100%-48px)] lg:w-[calc(100%-80px)] sec items-center justify-center">
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
      <section className="about-section overflow-hidden">
        <div
          ref={aboutContRef}
          className="sec items-center justify-center bg-background translate-y-[100%]"
        >
          <div className="flex items-center justify-center flex-col">
            <h1 className="medium-text">ABOUT</h1>
            <h1 className="medium-text">ME</h1>
          </div>
          <div
            id="about-text"
            className="w-full md:w-11/12 lg:w-3/4 flex flex-wrap gap-x-4 items-center justify-center"
          >
            {aboutWords.map((word, index) => (
              <div key={index} className="overflow-hidden">
                <span className="ex-medium-text about-word inline-block translate-y-[200%]">
                  {word}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="works lg:pb-32">
        <div className="sec items-center justify-center overflow-hidden">
          <div className="flex items-center justify-center flex-col">
            <h1 className="medium-text">SELECTED</h1>
            <h1 className="medium-text">WORKS</h1>
          </div>
          <div className="work-container relative">
            <div className="project-1 scale-[300%] opacity-0 translate-y-[200%]">
              <WorkCard
                name="PLACESUR"
                img={placesurHome}
                skills={["NextJs", "MongoDB", "Cloudinary", "NextAuth"]}
                id={1}
              />
            </div>
            <div className="project-2 rotate-3 absolute top-0 scale-[300%]  opacity-0 w-full h-full translate-y-[200%]">
              <WorkCard
                name="INK BY ASH"
                img={tattooHome}
                skills={["Figma", "NextJs", "Typescript", "Gsap"]}
                id={2}
              />
            </div>
            <div className="project-3 -rotate-3 absolute top-0 scale-[300%] opacity-0 w-full h-full translate-y-[200%]">
              <WorkCard
                name="IPHONE"
                img={appleHome}
                skills={["ReactJs", "Gsap", "ThreeJs", "React3Fiber"]}
                id={4}
              />
            </div>
          </div>
          <div className="btn">
            <button className="small-text px-4 pt-2 pb-1 border-[1px] border-foreground hover:bg-foreground hover:text-background transition-all duration-300 ease-in-out cursor-pointer">
              EXPLORE MORE WORKS
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

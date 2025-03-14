"use client"
import Image from "next/image"
import React, { useRef } from "react"
import mypic from "@/../public/images/mypic.jpg"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { initFadeIn, scrollFadeIn } from "@/utils/gsapAnimation"

const About = () => {
  gsap.registerPlugin(ScrollTrigger)
  const cardRef = useRef<HTMLDivElement>(null)
  const secRef = useRef<HTMLElement>(null)
  useGSAP(() => {
    initFadeIn(".init-fade-in")
    scrollFadeIn(".fade-in")
    const mm = gsap.matchMedia()
    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 768px) and (max-width: 1023px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop, isTablet } = context.conditions as {
          isDesktop: boolean
          isTablet: boolean
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: secRef.current,
            start: "top 5%",
            end: isDesktop ? "+=1000" : isTablet ? "+=1300" : "+=1000", // Total scroll distance for both animations
            scrub: true,
          },
        })

        // First rotation
        tl.to(cardRef.current, {
          rotationY: -10,
          rotationX: 15,
          rotationZ: -10,
          ease: "power3.inOut",
          duration: 0.7, // Relative duration
        })
          .to(
            cardRef.current,
            {
              rotationY: 10,
              rotationX: -15,
              rotationZ: 10,
              scale: 1.1,
              ease: "power3.inOut",
              duration: 0.7, // Relative duration
            },
            "+=0.6"
          )
          .to(
            cardRef.current,
            {
              rotationY: 0,
              rotationX: 0,
              rotationZ: 0,
              scale: 1,
              ease: "power3.inOut",
              duration: 0.5, // Relative duration
            },
            "+=0.6"
          )
      }
    )

    gsap.to(cardRef.current, {
      yPercent: -230,
      scrollTrigger: {
        trigger: ".usp",
        scrub: true,
        start: "top 80%",
        end: "+=700",
      },
    })
  }, [])
  return (
    <main className="cont main-cont">
      <section ref={secRef} className="relative">
        <div className="flex h-screen lg:h-full min-h-[700px] flex-col gap-[200px] lg:gap-36 px-0 md:px-6 lg:px-8 justify-center py-32">
          <div className="flex flex-col items-center justify-center -gap-1 init-fade-in">
            <h1 className="medium-text">ABOUT</h1>
            <h1 className="medium-text">ME</h1>
          </div>
          <div>
            <h1 className="large-text init-fade-in">ASHMAN</h1>
            <h1 className="large-text init-fade-in">SIDHU</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="small-text">SCROLL</p>
            <p className="small-text">BELOW</p>
          </div>
        </div>
        <div
          ref={cardRef}
          className=" bg-bgshade2 px-2 py-3 md:px-4 md:py-4 lg:py-6 flex flex-col gap-2 md:gap-4 lg:gap-6 items-center justify-center cursor-pointer mb-5 fixed top-[30%] right-4 md:right-12 lg:right-[72px] -z-10 transform-3d transform-gpu will-change-transform init-fade-in"
        >
          <Image
            src={mypic}
            alt="home-image"
            className="w-[208px] md:w-[282px] lg:w-[320px] h-[216px] md:h-[288px] lg:h-[320px] object-cover object-center opacity-70"
          />
          <h1 className="small-text">ASHMAN SIDHU</h1>
        </div>
        <div className="about-text px-0 md:px-6 lg:px-8 flex flex-col gap-16 py-[128px]">
          <p className="para-1 medium-text w-full md:w-11/12 lg:w-5/6">
            I’m a full-stack developer and designer who bridges the gap between
            stunning visuals and rock-solid code. I don’t just build websites; I
            craft seamless digital experiences that look beautiful, work
            flawlessly, and grow with your goals.
          </p>
          <p className="para-2 medium-text w-full md:w-11/12 lg:w-5/6">
            In 2023, I wrote my first line of code. Back then, I thought
            “functionality” was enough. Then I realized: websites that look
            broken feel broken to users—even if they technically work. So I
            learned design. Now, I build sites that do both: look
            stunning and run like clockwork.
          </p>
        </div>
      </section>
      <section className="usp px-0 md:px-6 lg:px-8 flex items-center justify-center flex-col gap-16 py-[128px]">
        <h1 className="medium-text fade-in">WHAT YOU WILL GET...</h1>
        <div className="flex flex-col gap-10 lg:gap-[256px] w-full fade-in">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <h1 className="medium-text underline text-bgshade w-full lg:w-[350px]">
              End-TO-End Development
            </h1>
            <h1 className="medium-text underline text-bgshade w-full lg:w-[350px]">
              Responsive, Pixel-Perfect Design
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <h1 className="medium-text underline text-bgshade w-full lg:w-[350px]">
              Clean, Scalable Code
            </h1>
            <h1 className="medium-text underline text-bgshade w-full lg:w-[350px]">
              Interactive Animations
            </h1>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About

"use client"
import WorkCard from "@/components/WorkCard"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import React, { useRef, useState } from "react"

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef(null)

  useGSAP(() => {
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

        gsap.to(sliderRef.current, {
          translateX: `-${
            (activeIndex) * (isDesktop ? 504 : isTablet ? 528 : 344)
          }px`,
          duration: 0.5,
          ease: "power3.inOut",
        })
      }
    )
  }, [activeIndex])

  return (
    <main className="">
      <section className="flex flex-col gap-8 lg:gap-6 items-center justify-center py-[128px]">
        <div className="flex flex-col items-center justify-center cont mb-8">
          <h1 className="medium-text">SOME OF</h1>
          <h1 className="medium-text">WORKS</h1>
        </div>
        <div className="slider-wrapper w-full h-full overflow-hidden relative">
          <div
            ref={sliderRef}
            className="slider h-[448px] md:h-[570px] lg:h-[546px] w-full relative left-[calc(50%-140px)] md:left-[calc(50%-234px)] lg:left-[calc(50%-224px)] flex gap-16 items-center"
          >
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className={`${
                  i === activeIndex ? "blur-none rotate-0" : "blur-sm rotate-3"
                } transition-all duration-300 ease-in-out`}
              >
                <WorkCard />
              </div>
            ))}
          </div>
          <div
            className={`cursor-pointer absolute top-1/2 left-2 md:left-24 lg:left-72 z-30 ${
              activeIndex === 0 && "hidden"
            }`}
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="#8e8e8e"
                d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
              />
            </svg>
          </div>
          <div
            className={`cursor-pointer absolute top-1/2 right-2 md:right-[104px] lg:right-72 z-30 ${
              activeIndex === 4 && "hidden"
            }`}
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="#8e8e8e"
                d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
              />
            </svg>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Work

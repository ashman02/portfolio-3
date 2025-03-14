"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { scrollFadeIn } from "@/utils/gsapAnimation"
import { allWorks } from "@/utils/data"
import { useParams, useRouter } from "next/navigation"

const WorkDescription = () => {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const [id] = useState(parseInt(params.id))
  const [project] = useState(allWorks[id - 1])
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })
    tl.to(".init-fade-header", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.inOut",
    }).to(
      ".init-fade-image",
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
      },
      ""
    )

    const fadeArray = gsap.utils.toArray(".fade-in")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fadeArray.forEach((element: any) => scrollFadeIn(element))
  }, [])
  const handleNextClick = () => {
    if (id === allWorks.length) {
      router.push("/works/1")
    } else {
      router.push(`/works/${id + 1}`)
    }
  }
  return (
    <main className="cont py-[128px]">
      <section className="flex flex-col items-center justify-center gap-8">
        <div className="overflow-hidden">
          <h1 className="init-fade-header large-text opacity-0 translate-y-[100%]">
            {project.name}
          </h1>
        </div>
        <div className="w-full h-full rounded-md overflow-hidden">
          <Image
            src={project.homeImage}
            alt="home-image"
            className="init-fade-image w-full hover:scale-105 h-full transition-transform duration-300 ease-in-out opacity-0"
          />
        </div>
        <div className="fade-in flex gap-6 md:gap-4 lg:gap-6 w-full flex-col md:flex-row ">
          <div className="w-full md:w-1/2">
            <h1 className="medium-text">DESCRIPTION</h1>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base md:text-[20px] lg:text-2xl leading-[100%] text-bgshade">
              {project.description}
            </p>
          </div>
        </div>
        <div className="fade-in flex gap-6 md:gap-4 lg:gap-6 w-full flex-col md:flex-row ">
          <div className="w-full md:w-1/2">
            <h1 className="medium-text">SKILLS</h1>
          </div>
          <div className="w-full md:w-1/2 flex gap-2 flex-wrap h-fit">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="text-[12px] md:text-base px-2 py-1 bg-bgshade2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="fade-in flex gap-6 md:gap-4 lg:gap-6 w-full flex-col md:flex-row ">
          <div className="w-full md:w-1/2">
            <h1 className="medium-text">LIVE</h1>
          </div>
          <div className="w-full md:w-1/2">
            <Link
              className="text-bgshade text-base md:text-[20px] lg:text-2xl underline"
              href={project.url}
              target="_blank"
            >
              {project.url}
            </Link>
          </div>
        </div>
        <div className="fade-in flex gap-6 md:gap-4 lg:gap-6 w-full flex-col md:flex-row ">
          <div className="w-full md:w-1/2 h-[498px] rounded-md overflow-hidden">
            <Image
              src={project.tabImage}
              alt="tab-image"
              className="w-full hover:scale-105 h-full transition-transform duration-300 ease-in-out object-cover object-center"
            />
          </div>
          <div className="w-full md:w-1/2 h-[498px] rounded-md overflow-hidden">
            <Image
              src={project.mobileImage}
              alt="mobile-image"
              className="w-full hover:scale-105 h-full transition-transform duration-300 ease-in-out object-cover object-center"
            />
          </div>
        </div>
        <div className="w-full h-full flex gap-8 items-center justify-center flex-col">
          <div className="w-fit">
            <h1
              onClick={handleNextClick}
              className="large-text hover:opacity-70 cursor-pointer transition-opacity duration-300 ease-in-out"
            >
              NEXT
            </h1>
          </div>
          <div className="flex">
            {allWorks.map(
              (w) =>
                w.id !== id && (
                  <div
                    key={w.id}
                    className="w-12 h-12 bg-bgshade hover:scale-150 transition-transform duration-300 ease-in-out origin-bottom cursor-pointer"
                    onClick={() => router.push(`/works/${w.id}`)}
                  >
                    <Image
                      src={w.homeImage}
                      alt="project-image"
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default WorkDescription

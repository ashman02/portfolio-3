"use client"
import { socialLinks } from "@/utils/data"
import gsap from "gsap"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useRef } from "react"

const Footer = () => {
  const pathname = usePathname()
  const underlineRef = useRef(null)
  const MenuItems = [
    {
      name: "HOME",
      link: "/",
      isActive: pathname === "/",
    },
    {
      name: "ABOUT",
      link: "/about",
      isActive: pathname === "/about",
    },
    {
      name: "WORKS",
      link: "/works",
      isActive: pathname === "/works",
    },
    {
      name: "CONTACT",
      link: "/contact",
      isActive: pathname === "/contact",
    },
  ]

  const handleCtaEnter = () => {
    gsap.to(underlineRef.current, {
      scaleX: 1,
      duration: 0.5,
      ease: "power3.inOut",
      transformOrigin: "left",
    })
  }
  const handleCtaLeave = () => {
    gsap.to(underlineRef.current, {
      scaleX: 0,
      duration: 0.5,
      ease: "power3.inOut",
      transformOrigin: "left",
    })
  }
  return (
    <footer className="bg-foreground cont text-background py-10 flex flex-col gap-[400px] lg:gap-64">
      <Link href={"/contact"}>
        <div className="cta flex flex-col w-fit">
          <h1
            onMouseEnter={handleCtaEnter}
            onMouseLeave={handleCtaLeave}
            className="large-text text-bgshade hover:text-background transition-all duration-300 ease-in-out cursor-pointer"
          >
            CONTACT ME
          </h1>
          <div
            ref={underlineRef}
            className="w-full h-3 bg-background scale-x-0 origin-left"
          />
        </div>
      </Link>
      <div className="flex items-center justify-between">
        <div className="space-y-4">
          <h1 className="medium-text">MENU</h1>
          <div className="flex flex-col md:flex-row gap-1 md:gap-2">
            {MenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="overflow-hidden"
              >
                <h1
                  className={`${
                    item.isActive ? "text-background" : "text-bgshade"
                  } small-text hover:text-background transition-all duration-200 ease-in`}
                >
                  {item.name}
                </h1>
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="medium-text">SOCIALS</h1>
          <div className="links flex flex-col md:flex-row gap-1 md:gap-2">
            {socialLinks.map((l) => (
              <Link key={l.name} href={l.link} target="_blank">
                <h1 className="text-bgshade small-text hover:text-background transition-all duration-200 ease-in">
                  {l.name}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

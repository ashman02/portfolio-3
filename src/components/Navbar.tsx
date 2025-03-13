"use client"
import Link from "next/link"
import React from "react"
import gsap from "gsap"
import { usePathname } from "next/navigation"
import { socialLinks } from "@/utils/data"

const Navbar = () => {
  const pathname = usePathname()
  const MenuItems = [
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
  const handleOpenMenu = () => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
      },
    })
    tl.to(".menu", {
      translateY: 0,
      duration: 0.8,
    })
      .to(
        ".menu-item",
        {
          translateY: 0,
          duration: 0.1,
        },
        "-=0.4"
      )
      .to(
        ".socials",
        {
          translateY: 0,
          opacity: 1,
          duration: 0.4,
        },
        "<"
      )
  }
  const handleCloseMenu = () => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    })
    tl.to(".menu-item", {
      translateY: "100%",
      duration: 0.1,
    })
      .to(
        ".socials",
        {
          translateY: "100%",
          opacity: 0,
          duration: 0.4,
        },
        "<"
      )
      .to(
        ".menu",
        {
          translateY: "-100%",
          duration: 0.8,
        },
        "-=0.1"
      )
  }
  return (
    <nav className="cont p-4 md:p-5 lg:p-6 flex justify-between items-center fixed w-full z-40">
      <Link href={"/"}>
        <h1 className="text-xl md:text-[24px] leading-[120%] tracking-tight">
          ASHMAN
        </h1>
      </Link>
      <div
        onClick={handleOpenMenu}
        className="hamburger flex flex-col gap-2 cursor-pointer"
      >
        <div className="w-8 lg:w-12 h-0.5 bg-foreground" />
        <div className="w-8 lg:w-12 h-0.5 bg-foreground" />
      </div>
      <div className="menu absolute z-50 top-0 right-4 md:right-6 lg:right-10 bg-foreground p-4 md:p-5 lg:p-6 flex flex-col gap-10 w-[calc(100%-32px)] md:w-[580px] translate-y-[-100%] overflow-hidden">
        <div className="closing-icon flex flex-col w-full h-5 items-end justify-center">
          <div onClick={handleCloseMenu} className="cursor-pointer">
            <div className="w-8 h-0.5 bg-background rotate-45 mb-[-2px]" />
            <div className="w-8 h-0.5 bg-background -rotate-45" />
          </div>
        </div>
        <div className="menu-links flex flex-col gap-2">
          {MenuItems.map((item) => (
            <Link key={item.name} href={item.link} className="overflow-hidden">
              <h1
                onClick={handleCloseMenu}
                className={`menu-item ${
                  item.isActive ? "text-background" : "text-bgshade"
                } medium-text hover:text-background transition-all duration-200 ease-in translate-y-[100%]`}
              >
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
        <div className="socials flex flex-col gap-2 translate-y-[50%] opacity-0">
          <h1 className="text-[20px] md:text-2xl text-background">SOCIALS</h1>
          <div className="links flex gap-2 flex-wrap">
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
    </nav>
  )
}

export default Navbar

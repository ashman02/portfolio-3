import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const scrollFadeIn = (target: string) => {
  gsap.to(target, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: target,
      start: "top 99%",
      end: "+=300px",
      scrub: true,
    },
  })
}

export const initFadeIn = (target: string) => {
  gsap.to(target, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.inOut",
  })
}

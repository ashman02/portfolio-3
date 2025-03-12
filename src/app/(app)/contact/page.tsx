"use client"
import { useGSAP } from "@gsap/react"
import React from "react"
import { initFadeIn, scrollFadeIn } from "@/utils/gsapAnimation"
const Contact = () => {
  useGSAP(() => {
    initFadeIn(".contact-header")
    scrollFadeIn(".why-contact")
    scrollFadeIn(".contact-form")
  }, [])
  return (
    <main className="cont">
      <section className="sec items-center justify-center">
        <div className="overflow-hidden">
          <h1 className="large-text text-center contact-header init-fade-in">SAY HELLO!</h1>
        </div>
      </section>
      <section className="py-[128px] flex flex-col gap-48">
        <div className="why-contact fade-in w-full flex gap-6 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="medium-text">LET’S WORK TOGETHER</h1>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="medium-text text-bgshade">
              Got a question, idea, or collaboration in mind? Fill out the form,
              and I’ll get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className="contact-form fade-in flex flex-col gap-8 md:gap-10 lg:gap-12">
          <div className="email-name flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-6">
            <div className="w-full md:w-1/2">
              <div className="name flex flex-col">
                <label htmlFor="name" className="medium-text">
                  NAME*
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="px-4 py-4 medium-text placeholder:text-bgshade border-2 border-bgshade focus:border-foreground outline-none w-full"
                  placeholder="Your name..."
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="email flex flex-col">
                <label htmlFor="email" className="medium-text">
                  E-MAIL*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="px-4 py-4 medium-text placeholder:text-bgshade border-2 border-bgshade focus:border-foreground outline-none w-full"
                  placeholder="Your email..."
                />
              </div>
            </div>
          </div>
          <div className="message-field flex flex-col">
            <label htmlFor="message" className="medium-text">
              YOUR MESSAGE*
            </label>
            <textarea
              name="message"
              id="message"
              rows={7}
              className="px-4 py-4 medium-text placeholder:text-bgshade border-2 border-bgshade focus:border-foreground outline-none resize-none"
              placeholder="Write it down..."
            />
          </div>
          <div className="button">
            <button className="medium-text bg-bgshade text-foreground px-8 lg:px-10 py-3 md:py-4 hover:bg-foreground hover:text-background transition-all duration-300 ease-in-out cursor-pointer">
              SEND
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact

"use client"
import { useGSAP } from "@gsap/react"
import React, { useState } from "react"
import { initFadeIn, scrollFadeIn } from "@/utils/gsapAnimation"
const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [msg, setMsg] = useState("")
  useGSAP(() => {
    initFadeIn(".contact-header")
    scrollFadeIn(".why-contact")
    scrollFadeIn(".contact-form")
  }, [])

  const handleOnSubmit = async () => {
    if(!name || !email || !message) {
      setMsg("All fields are required")
    }
    setIsSending(true)
    const response = await fetch("/api/send-message", {
      method : "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name, email, message})
    })
    const res = await response.json()
    if(res.success){
      setMsg(res.message)
      setName("")
      setEmail("")
      setMessage("")
    }else{
      setMsg(res.message)
    }
    setIsSending(false)
  }

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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="button">
            <button onClick={handleOnSubmit} disabled={isSending} className={`medium-text bg-bgshade text-foreground px-8 lg:px-10 py-3 md:py-4 hover:bg-foreground hover:text-background transition-all duration-300 ease-in-out cursor-pointer disabled:opacity-60`}>
              {isSending ? "SENDING..." : "SEND"}
            </button>
          </div>
          {msg && <p className="medium-text text-bgshade">{msg}</p>}
        </div>
      </section>
    </main>
  )
}

export default Contact

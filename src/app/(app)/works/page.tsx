"use client"
import WorkCard from "@/components/WorkCard"
import React, { useState } from "react"


const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <main className="">
      <section className="flex flex-col gap-8 lg:gap-6 items-center justify-center py-[128px]">
        <div className="flex flex-col items-center justify-center cont mb-8">
          <h1 className="medium-text">SOME OF</h1>
          <h1 className="medium-text">WORKS</h1>
        </div>
        
      </section>
    </main>
  )
}

export default Work
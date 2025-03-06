"use client"
import React from 'react'
import {ReactLenis, useLenis} from "lenis/react"

const LenisProvider = ({children} : {children : React.ReactNode}) => {
    useLenis(({}) => {

    })
  return (
    <ReactLenis root options={{lerp : 0.04}}>{children}</ReactLenis>
  )
}

export default LenisProvider

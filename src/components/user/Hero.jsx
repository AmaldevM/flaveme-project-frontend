import React from 'react'
import './Hero.css'


export const Hero = () => {
  return (
      <div className="flex justify-center items-center py-3 sm:py-4 shadow-lg sticky top-0 left-0 bg-black z-10 gap-3">
          <section class="relative grid place-content-center min-h-screen overflow-hidden bg-gradient-to-b from-[oklch(63%_0.1_204)] to-[oklch(98%_0.01_170)]">
          <h1 class="font-marko text-white text-center text-[clamp(3rem,10vw,6rem)] shadow-lg">
          gradient.style
          </h1>

          <picture class="absolute bottom-[-200px] left-0 w-[var(--size-fluid-11)] origin-left-bottom blur-sm animate-float">
          <img src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/hero-section-gradient.style/img/palm.png" alt="palm image" />
          </picture>
          </section> 
    </div>
  )
}

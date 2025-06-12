import { FRONT_PAGE_DESC, FRONT_PAGE_NAME } from '../root.link';
import React from "react";

const Hero = () => {
  return (
      <div id="Hero">
          <section className="h-screen flex flex-col flex-wrap justify-around items-start p-8 md:p-12">
              <div className='w-full md:w-1/2 space-y-4'>
                  <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>{FRONT_PAGE_NAME}</h1>
                  <p className='tracking-wide leading-relaxed text-lg md:text-xl'>
                      {FRONT_PAGE_DESC}{' '}
                  </p>
                  <picture className='flex w-full shadow-lg '>
                      <img src="/images/advCard.webp" alt="An adventurer card of Kaho Cli"/>
                  </picture>
                  <p className='tracking-wide leading-relaxed text-lg md:text-xl'>
                      Been to Thailand, Vietnam, China, Japan, Cambodia,
                      as well as five different US National Parks and many states across the US.
                  </p>
                  <p className='tracking-wide leading-relaxed text-sm text-sky-300/10'>
                      (definitely not basing this on my work portfolio)
                  </p>
              </div>
          </section>
      </div>
  );
};

export default Hero;

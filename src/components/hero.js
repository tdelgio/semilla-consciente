import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"

import Navbar from "./navbar"

const Hero = () => {
  return (
    <div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div className="sm:h-screen relative bg-white overflow-hidden">
        <div className="max-w-8xl mx-auto lg:smy-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="sm:h-screen hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div>
              <Navbar />
              <main className="mt-10 max-w-8xl px-4 sm:mt-12 sm:px-6 md:mt-16 md:w-screen lg:-mt-16 lg:h-screen lg:flex lg:flex-col justify-center lg:px-8 ">
                <div className="sm:text-center lg:text-left">
                  <h1 className="lg:hidden">
                    Somos{" "}
                    <span className="inline text-blue-lagoon">Semilla</span>

                    <span className="block text-blue-lagoon">
                      Consciente.
                    </span>
                  </h1>
                  <h1 className="hidden lg:block">
                    Somos{" "}
                    <span className="block text-blue-lagoon">
                      Semilla Consciente.
                    </span>
                  </h1>
                  <p className="mt-3 text-winter-gray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Somos una cooperativa de desarrollo local, con el objetivo
                    de contribuir a la solución de la problemática laboral,
                    habitacional y alimentaria de la población de El Chaltén.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <button
                        onClick={() => scrollTo("#about")}
                        className="font-semibold tracking-wider w-full flex items-center justify-center px-8 py-3 border border-transparent rounded-md text-white bg-blue-lagoon  md:py-4 md:text-lg md:px-10"
                      >
                        La Cooperativa
                      </button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="https://www.patreon.com/c/communities"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold tracking-wider w-full flex items-center justify-center px-8 py-3 border border-transparent rounded-md text-blue-lagoon bg-white md:py-4 md:text-lg md:px-10 shadow-md"
                      >
                        Asociate
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <span className="hidden lg:block">
              <StaticImage
                width={1731}
                height={2597}
                placeholder="blurred"
                className=" h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="../images/hero.png"
                alt="cordon del cerro Chalten"
              />
            </span>
            <span className="lg:hidden">
              <StaticImage
                width={376}
                height={224}
                placeholder="blurred"
                className="h-56 w-full object-cover sm:h-72 md:h-96"
                src="../images/heroMobile.png"
                alt="cordon del cerro Chalten"
              />
            </span>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

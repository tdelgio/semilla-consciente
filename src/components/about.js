import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <>
      <div className="max-w-8xl mx-auto lg:flex lg:flex-row-reverse lg:items-center xl:my-28">
        <main className="my-10 max-w-8xl px-4 sm:my-12 sm:px-6  md:w-screen lg:w-1/2 lg:ml-14 lg:px-8 2xl:ml-28 ">
          <div className="sm:text-center lg:text-left lg:my-8">
            <h4 className="strong text-blue-lagoon">
              Quienes somos.
            </h4>
            <h2 className="mt-2 text-gray-900">
              <span className="block xl:inline">La Cooperativa.</span>
            </h2>
            <p className="mt-6 text-base text-winter-gray sm:mt-5 sm:text-lg sm:max-w-md sm:mx-auto md:mt-5 md:text-lg lg:mx-0  lg:max-w-full xl:w-full">
              Somos un grupo de vecinos de El Chalten con el anhelo de generar
              un cambio de paradigma hacia el crecimiento sustentable. Un
              crecimiento que respete el medio ambiente, tome en cuenta el
              bienestar y necesidades de las generaciones presentes, un
              crecimiento justo que no sacrifique los derechos de las
              generaciones que vendrán.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="font-semibold w-full flex items-center justify-center px-8 py-3 border border-transparent text-base  rounded-md text-white bg-blue-lagoon  md:py-4 md:text-lg md:px-10"
                >
                  Asociate
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className="my-8 lg:w-1/2">
          <div>
            <div className="relative z-10 my-8 bg-white sm:pb-16 md:pb-0 md:max-w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl lg:w-full lg:pb-0 xl:pb-0">
              <StaticImage
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:max-h-full"
                src="../images/about.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

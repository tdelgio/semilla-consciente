import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { IconMountain } from "./icons"

const Location = () => {
  return (
<<<<<<< HEAD
    <div id="location" className="border border-transparent">
=======
    <>
>>>>>>> a0c718a5c41d53a7a1d2d2b96b3dab1b094983e9
      <div className="max-w-8xl mx-auto lg:flex lg:flex-row lg:items-center xl:my-28">
        <div className="mx-auto  my-8 lg:w-1/2 lg:my-0 lg:hidden ">
          <StaticImage
            width={579}
            height={552}
            className="hidden lg:block w-full ml-auto"
            src="../images/location.png"
            placeholder="blurred"
            alt="town image"
          />
        </div>
        <main className="my-10 max-w-8xl px-4 sm:my-12 sm:px-6  md:w-screen lg:w-1/2 lg:ml-14 lg:px-8 2xl:ml-28 ">
          <div className="sm:text-center lg:text-left lg:my-8">
            <IconMountain />
            <h2 className="mt-2 text-gray-900">
              <span className="block xl:inline">Ubicación</span>
            </h2>
            <p className="mt-6 text-base text-winter-gray sm:mt-5 sm:text-lg sm:max-w-md sm:mx-auto md:mt-5 md:text-lg lg:mx-0  lg:max-w-full xl:w-full">
              A través de la Cooperativa de Desarrollo Local Semilla Consciente
              se busca unificar criterios y esfuerzos para llevar a cabo las condiciones necesarias para la habitabilidad de la zona de El Álamo, patrimonio de la provincia de Santa Cruz, con cerca de 4.000 hectáreas, haciendo posible la construcción de la primera zona de Chacras Rurales planificada en la Patagonia sur, orientada a la sustentabilidad y producción de alimentos. Cabe resaltar que, de las 4.000 hectáreas disponibles, únicamente cerca de 500 hectáreas tienen las cualidades para la construcción de Chacras, las restantes, por sus características geológicas tienen cualidades menos accesibles. El desarrollo eco-sostenible de esa zona, se plantea en el Marco de referencia normativo para el aprovechamiento agropecuario del agua en Santa Cruz y la Ley N°  25.127 que regula la producción ecológica, biológica u orgánica.
            </p>

          </div>
        </main>
<<<<<<< HEAD
        <div className="mx-auto  my-8 lg:w-1/2 lg:my-0 hidden lg:block lg:shadow-lg">
=======
        <div className="mx-auto  my-8 lg:w-1/2 lg:my-0 hidden lg:block ">
>>>>>>> a0c718a5c41d53a7a1d2d2b96b3dab1b094983e9
          <StaticImage
            width={579}
            height={552}
            className="hidden lg:block w-full ml-auto"
            src="../images/location.png"
            placeholder="blurred"
            alt="town image"
          />
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> a0c718a5c41d53a7a1d2d2b96b3dab1b094983e9
  )
}

export default Location

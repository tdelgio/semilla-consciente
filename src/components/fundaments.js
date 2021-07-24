import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Fundaments = () => {
  return (
    <div id id="fundamentals" className="border border-transparent">
      <div className="max-w-6xl py-10 mx-auto">
        <div className="w-full h-full flex justify-center lg:hidden -mb-32">
          <StaticImage
            width={344}
            height={206}
            src="../images/fundamentsMobile.png"
            placeholder="blurred"
            alt="people in round sitting on the floor "
            className="block z-20"
          />
        </div>

        <div className="w-full mx-auto">
          <div className="relative w-full lg:max-w-4xl bg-blue-lagoon text-white sm:text-center sm:px-16 lg:text-left px-3 pt-28 pb-16 lg:w-3/4 lg:min-h-1/2 lg:ml-auto lg:rounded-3xl lg:pl-64 lg:m-4 lg:max-w-4xl lg:shadow-lg">
            <h2 className="mb-3">Fundamentos.</h2>
            <p>
              La Localidad de El Chaltén, provincia de Santa Cruz, es un pueblo de alrededor de 86 hectáreas situado en la zona sur de la Patagonia, inserta en el Parque Nacional Los Glaciares, con una temperatura media de  7,6°C (con mínimas de -16°C). El Chaltén ha crecido de forma notable a lo largo de las últimas décadas. Con apenas 41 habitantes permanentes registrados en el Censo de 1991, según proyecciones del INDEC, en el año 2020 la población alcanzó los 3123 habitantes. </p>
            <p>La economía de El Chaltén está concentrada en el turismo (sobre todo internacional). La temporada turística empieza en septiembre u octubre y termina en abril o mayo, generando en ese período entre 40 y 50 millones de dólares. Si bien, a primera vista, el poder adquisitivo de la población en su conjunto puede ser considerado bueno, de mayo a septiembre para “pasar el invierno” la mayor parte de la población vive con lo que logró ahorrar en la “temporada de verano”. Aún con una economía pujante el pueblo sufre tres problemáticas que afectan sustancialmente su calidad de vida: la escasa diversidad laboral, dificultad de acceso a alimentos frescos y la dificultad de acceso al hábitat.
          </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="https://www.patreon.com/c/communities"
                  className="font-semibold w-full flex items-center justify-center px-8 py-3 border border-transparent text-base  rounded-md text-blue-lagoon bg-white  md:py-4 md:text-lg md:px-10"
                  target="_blank"
                  rel="noreferrer"
                >
                  Asociate
                </a>
              </div>
            </div>
            <div className="absolute top-48 left-0 max-w-xl hidden lg:trasnform lg:scale-75 lg:block lg:-ml-64 ">
              <StaticImage
                width={446}
                height={446}
                src="../images/fundamentsDesktop.png"
                placeholder="blurred"
                alt="people in round sitting on the floor "
              />
            </div>
          </div>
        </div>
      </div >

    </div>
  );
};

export default Fundaments; 
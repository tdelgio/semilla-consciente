import React from 'react';
import { IconPlant } from "./icons"

const MisionWidget = (props) => {
  return (
    <>
      <div className="mt-2 mr-2 sm:ml-2 mb-2 max-w-xl md:max-w-2xl lg:ml-16 lg:mr-4 flex">
        <IconPlant />
        <div className="ml-3 flex flex-col items-start">
          <p className="text-lg lg:text-xl font-semibold leading-6 tracking-wide sm:font-normal pb-1">{props.title}</p>
          <p className="flex-shrink-1 text-justify text-light tracking-wide text-winter-gray">{props.text}</p>
        </div>
      </div>
    </>
  )
}

export const Mision = () => {
  return (
    <div id="mision" className="border border-transparent" >
      <div className="w-full max-w-screen py-4 lg:py-12 lg:mx-auto lg:py-40">
        {/* Desktop */}
        <div className="hidden lg:block w-full h-full">
          <div className="space-y-3 text-center">
            <p className="text-blue-lagoon strong sm:text-lg md:text-xl 2xl:text-2xl ">¿Cuál es nuestra misión?</p>
            <h2 className="mt-2 text-gray-900">
              <span className="block xl:inline">Objetivos.</span>
            </h2>
            <h5 className="text-winter-gray py-2">Te invitamos a que nos conozcas y te sumes a nuestro proyecto!</h5>
          </div>

          <div className="my-10 flex items-center justify-around w-full lg:my-16 ">
            <div className="w-1/2 flex flex-col items-end space-y-8">
              <MisionWidget
                title="Crear un centro de Desarrollo Rural Sustentable."
                text="Que funcione como eje de un polo rural de agro-producción y hábitat, a través de una cooperativa de desarrollo local, a fin
            de contribuir a la solución de la problemática laboral, habitacional y alimentaria de la población de El Chaltén." />
              <MisionWidget
                title="Crear un complejo integral Eco - Sustentable."
                text="Para el desarrollo del hábitat en condiciones rurales comunitarias y de procesos productivos pertinentes." />

            </div>
            <div className="w-1/2 flex flex-col items-start justify-center space-y-8">
              <MisionWidget
                title="Desarrollar el complejo agroindustrial ecológico."
                text="Para la producción de alimentos." />
              <MisionWidget
                title="Impulsar la creación de grupos pre-cooperativos."
                text="Para la construcción de las chacras (viviendas, invernadero, granja)." />
              <MisionWidget
                title="Impulsar la creación de un centro comunitario."
                text="Para la comercialización de productos y manufacturas. Almacén popular." />
            </div>

          </div>


        </div>
        {/* Mobile */}
        <div className="max-w-screen lg:hidden  ml-3 mr-1 sm:text-center">
          <div className="space-y-2">
            <p className="text-blue-lagoon strong sm:text-lg md:text-xl 2xl:text-2xl ">¿Cuál es nuestra misión?</p>
            <h2 className="mt-2 text-gray-900">
              <span className="block xl:inline">Objetivos.</span>
            </h2>
            <p className="text-winter-gray py-2">Te invitamos a que nos conozcas y te sumes a nuestro proyecto!</p>
          </div>

          <div className="my-4 flex flex-col items-start sm:items-center w-full lg:hidden ">
            <div className="space-y-6">
              <MisionWidget
                title="Crear un centro de Desarrollo Rural Sustentable."
                text="Que funcione como eje de un polo rural de agro-producción y hábitat, a través de una cooperativa de desarrollo local, a fin
            de contribuir a la solución de la problemática laboral, habitacional y alimentaria de la población de El Chaltén." />
              <MisionWidget
                title="Crear un complejo integral Eco - Sustentable."
                text="Para el desarrollo del hábitat en condiciones rurales comunitarias y de procesos productivos pertinentes." />
              <MisionWidget
                title="Desarrollar el complejo agroindustrial ecológico."
                text="Para la producción de alimentos." />
              <MisionWidget
                title="Impulsar la creación de grupos pre-cooperativos."
                text="Para la construcción de las chacras (viviendas, invernadero, granja)." />
              <MisionWidget
                title="Impulsar la creación de un centro comunitario."
                text="Para la comercialización de productos y manufacturas. Almacén popular." />
            </div>
          </div>


        </div>
      </div >
    </div>
  );
};

export default Mision


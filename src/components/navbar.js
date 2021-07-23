import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  IconCoop,
  IconFundamentos,
  IconObjetivos,
  IconUbicacion,
  IconContacto,
} from "./icons"

const Navbar = () => {
  return (
    <>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className=" relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Semilla Consciente</span>
                <StaticImage
                  height={40}
                  width={41}
                  src="../images/logo.png"
                  alt=""
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-winter-gray hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <!-- Heroicon name: outline/menu --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <a
              href="#"
              className="whitespace-nowrap text-winter-gray transform hover:scale-125 hover:text-blue-lagoon"
            >
              La Cooperativa
            </a>

            <a
              href="#"
              className=" text-winter-gray transform hover:scale-105 hover:text-blue-lagoon"
            >
              Fundamento
            </a>

            <a
              href="#"
              className=" text-winter-gray transform hover:scale-105 hover:text-blue-lagoon"
            >
              Objetivo
            </a>

            <a
              href="#"
              className=" text-winter-gray transform hover:scale-105 hover:text-blue-lagoon"
            >
              Ubicación
            </a>

            <a
              href="#"
              className=" text-winter-gray transform hover:scale-105 hover:text-blue-lagoon"
            >
              Contacto
            </a>
          </div>
        </nav>
      </div>

      {/* <!--
                  Mobile menu, show/hide based on menu open state.

                  Entering: "duration-150 ease-out"
                    From: "opacity-0 scale-95"
                    To: "opacity-100 scale-100"
                  Leaving: "duration-100 ease-in"
                    From: "opacity-100 scale-100"
                    To: "opacity-0 scale-95"
                --> */}
      <div className="block top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <StaticImage
                height={40}
                width={41}
                src="../images/logo.png"
                alt=""
              />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-winter-gray hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close main menu</span>
                {/* <!-- Heroicon name: outline/x --> */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="flex items-center text-winter-gray hover:text-white hover:bg-blue-lagoon px-3 py-2 rounded-md text-base"
              aria-current="page"
            >
              <IconCoop />
              La Cooperativa
            </a>

            <a
              href="#"
              className="flex items-center text-winter-gray hover:text-white hover:bg-blue-lagoon px-3 py-2 rounded-md text-base"
            >
              <IconFundamentos />
              Fundamentos
            </a>

            <a
              href="#"
              className="flex items-center text-winter-gray hover:text-white hover:bg-blue-lagoon px-3 py-2 rounded-md text-base"
            >
              <IconObjetivos />
              Objetivos
            </a>

            <a
              href="#"
              className="flex items-center text-winter-gray hover:text-white hover:bg-blue-lagoon px-3 py-2 rounded-md text-base"
            >
              <IconUbicacion />
              Ubicación
            </a>
            <a
              href="#"
              className="flex items-center text-winter-gray hover:text-white hover:bg-blue-lagoon px-3 py-2 rounded-md text-base"
            >
              <IconContacto />
              Contacto
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

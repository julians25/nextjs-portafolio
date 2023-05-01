import React from "react";
import Image from "next/image";
import Appnswer from "../public/Appnswer.png";
import gamesData from "../public/GamesData.png";
import { GrReactjs } from "react-icons/gr";
import { TbBrandCss3,  TbBrandReactNative } from "react-icons/tb";
import {
  SiJavascript,
  SiFirebase,
} from "react-icons/si";

export const GridPortfolio = () => {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap text-center justify-center">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <a href="https://appnswer-ba06b.firebaseapp.com/"
              target="_blank">
                <Image className="rounded-t-lg" src={Appnswer} alt="" />
              </a>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Appnswer
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Appnswer es un proyecto universitario en el cual se desarrolló un software multiplataforma donde los estudiantes pueden publicar contenido sobre programación. 
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                para la construcción del proyecto, desarrollo del frontend y despliegue de la plataforma se utilizó React native y las herramientas de Expo, para el backend se utilizo Fire base, la plataforma se entregó cumpliendo todos los objetivos propuestos.
                </p>
                <div className="text-4xl flex justify-center gap-10  text-slate-700 dark:text-gray-400">
                  <SiFirebase
                    className="hover:-translate-y-1  cursor-pointer"
                    title="FireBase"
                  />
                  <TbBrandReactNative
                    className="hover:-translate-y-1  cursor-pointer"
                    title="React Native"
                  />
                  <TbBrandCss3
                    className="hover:-translate-y-1  cursor-pointer"
                    title="Css3"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <a href="https://gamesdata-3eb60.web.app/"
              target="_blank">
                <Image className="rounded-t-lg" src={gamesData} alt="" />
              </a>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  GamesData
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                GamesData es un proyecto de practica que utiliza la api de www.freetogame.com para mostrar información de diferentes juegos publicados en la web, se desarrollo utilizando React js y CSS, tambien librerias como react router para la navegacion interna y La API Fetch para obtener recursos de forma asíncrona por la red.
                </p>
                <div className="text-4xl flex justify-center gap-10  text-slate-700 dark:text-gray-400">
                  <GrReactjs
                    className="hover:-translate-y-1  cursor-pointer"
                    title="React js"
                  />
                  <TbBrandCss3
                    className="hover:-translate-y-1  cursor-pointer"
                    title="Css3"
                  />
                  <SiJavascript
                    className="hover:-translate-y-1  cursor-pointer"
                    title="Javacript"
                  />
                </div>
              </div>
            </div>
          </div>
  );
};

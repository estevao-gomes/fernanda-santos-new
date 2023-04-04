"use client";
import { useEffect, useState } from "react";

import TextTransition, { presets } from "react-text-transition";

import Image from "next/image";
import { Open_Sans } from "next/font/google";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faRetweet,
  faFingerprint
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/button";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: "800"
})

const transitionTexts = ["VIVER", "VIAJAR", "CANTAR", "TRABALHAR"];

export function CTA() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="-mt-24 bg-slate-100 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
            <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white text-blue-900 shadow-lg">
              <div className="flex-auto px-4 py-5">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 p-3 text-center text-white shadow-lg">
                  <FontAwesomeIcon icon={faAward} />
                </div>
                <h6 className="text-xl font-semibold">
                  Certificação Internacional
                </h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Professora certificada internacionalmente através da broasdasd
                  academy.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 text-center md:w-4/12">
            <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white text-blue-900 shadow-lg">
              <div className="flex-auto px-4 py-5">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 p-3 text-center text-white shadow-lg">
                  <FontAwesomeIcon icon={faRetweet} />
                </div>
                <h6 className="text-xl font-semibold">Conteúdo atualizado</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Aprenda sempre com os conteúdos mais atuais e com o uso das
                  técnicas que mais se adequem a sua maneira de aprender.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-4 pt-6 text-center md:w-4/12">
            <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white text-blue-900 shadow-lg">
              <div className="flex-auto px-4 py-5">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 p-3 text-center text-white shadow-lg">
                  <FontAwesomeIcon icon={faFingerprint} />
                </div>
                <h6 className="text-xl font-semibold">Feito para você</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Material e aulas montadas de acordo com a sua necessidade,
                  para você aprender o inglês que você precisa.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 flex flex-wrap items-center">
          <div className="mr-auto ml-auto mb-12 w-full px-4 md:mb-0 md:w-5/12">
            <h3 className={`${open_sans.className} mb-2 text-5xl font-bold leading-normal text-blue-900 md:text-6xl`}>
              Inglês para você{" "}
              <TextTransition springConfig={presets.wobbly}>
                <h1 className="bg-gradient-to-tr from-brightred-500 to-blue-900 bg-clip-text text-transparent">
                  {transitionTexts[index % transitionTexts.length]}
                </h1>
              </TextTransition>
            </h3>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-blue-900">
              Aqui o aprendizado é moldado a sua necessidade. Aprenda com foco
              no que você precisa, e não de maneira genérica.
            </p>
            <p className="mt-0 mb-4 text-lg leading-relaxed text-blue-900">
              Aulas especializadas na seu uso, seja esse para atividades
              técnicas ou recreativas.
            </p>
            <Button url="contact" text="Fale comigo!" />
          </div>

          <div className="mr-auto ml-auto w-full px-4 md:w-4/12">
            <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-blue-900 shadow-lg">
              <Image
                src="https://picsum.photos/800/600"
                alt="placeholder image"
                width={800}
                height={600}
              />
              <div className="w-full rounded-t-lg align-middle" />
              <blockquote className="relative mb-4 p-8">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 block w-full"
                  style={{
                    height: "95px",
                    top: "-94px",
                  }}
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="fill-current text-blue-900"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Aulas didáticas e dinâmicas.
                </h4>
                <p className="text-md mt-2 font-light text-white">
                  Aprenda da maneira mais rápida e de forma eficiente. Tudo
                  adaptado para a melhor experiência.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

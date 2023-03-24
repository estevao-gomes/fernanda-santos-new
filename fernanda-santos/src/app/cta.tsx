"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faAward,
  faRetweet,
  faFingerprint,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";

const transitionTexts = ["viver", "viajar", "cantar", "trabalhar"];

export function CTA() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="pb-20 -mt-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
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

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
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

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
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

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-transparent bg-gradient-to-tr from-brightred to-blue-900">
              Inglês para você{" "}
              <TextTransition springConfig={presets.wobbly}>
                {transitionTexts[index % transitionTexts.length]}
              </TextTransition>
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
              Don&apos; let your uses guess by attaching tooltips and popoves to
              any element. Just make sure you enable them first via JavaScript.
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you&apos;e good to
              go. Just make sure you enable them first via JavaScript.
            </p>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-brightred-500">
              <Image
                src="https://picsum.photos/800/600"
                alt="placeholder image"
                width={800}
                height={600}
              />
              <div className="w-full align-middle rounded-t-lg" />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  style={{
                    height: "95px",
                    top: "-94px",
                  }}
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-brightred-500 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Top Notch Services
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

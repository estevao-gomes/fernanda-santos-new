"use client";
import { Open_Sans } from "next/font/google";
import image from "@/assets/InstagramImage.jpg";
import image1 from "@/assets/InstagramImage1.jpeg";
import image2 from "@/assets/InstagramImage2.jpeg";

import Image from "next/image";

const open_sans = Open_Sans({
  weight: "800",
  subsets: ["latin"],
});

export function Social() {
  return (
    <section className="overflow-x-hidden pt-20 pb-48">
      <div className="flex flex-col items-center justify-center px-4">
        <div className="mb-24 flex flex-wrap justify-center text-center">
          <div className="w-full px-4">
            <h2
              className={`${open_sans.className} text-4xl font-semibold text-blue-900`}
            >
              Veja alguns stories
            </h2>
            <p className="m-4 text-lg leading-relaxed text-gray-600">
              Saiba um pouco do que meus alunos tem a dizer sobre as aulas.
            </p>
          </div>
        </div>
        <div className="relative grid w-2/3 grid-rows-3 justify-center gap-2 p-2 sm:grid-cols-3 sm:grid-rows-1 xl:block xl:min-h-[800px] xl:min-w-[200px] xl:max-w-[400px]">
          <div className="delay-250 peer mx-1 aspect-[5/6] min-h-fit -translate-x-16 -rotate-12 transform-none rounded-lg bg-red-500 transition-none transition duration-500 ease-in-out hover:translate-x-0 hover:rotate-0 hover:scale-125 hover:opacity-100 xl:absolute xl:mx-0 xl:w-full xl:transform xl:opacity-60 xl:transition">
            <Image src={image} alt="Placeholder" />
          </div>
          <div className="delay-250 peer mx-1 aspect-[5/6] -translate-y-4 transform-none rounded-lg bg-orange-600 transition duration-500 ease-in-out hover:rotate-0 hover:scale-125 hover:opacity-100 peer-hover:translate-x-80 peer-hover:rotate-45 peer-hover:opacity-0 xl:absolute xl:mx-0 xl:w-full xl:transform xl:opacity-60">
            <Image src={image1} alt="Placeholder" />
          </div>
          <div className="delay-250 peer mx-1 aspect-[5/6] translate-x-16 rotate-12 transform-none rounded-lg bg-blue-500 transition duration-500 ease-in-out hover:translate-x-16 hover:rotate-0 hover:scale-125 hover:opacity-100 peer-hover:translate-x-80 peer-hover:rotate-45 peer-hover:opacity-0 xl:absolute xl:mx-0 xl:w-full xl:transform xl:opacity-60">
            <Image src={image2} alt="Placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
}

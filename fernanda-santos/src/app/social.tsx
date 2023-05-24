"use client";
import { Card } from "@/components/card";
import { Carousel } from "react-responsive-carousel";
import { Open_Sans } from 'next/font/google'
import image from '@/assets/logo.jpg'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";

const open_sans = Open_Sans({
  weight: "800",
  subsets: ["latin"]
})


export function Social() {
  return (
    <section className="pt-20 pb-48 overflow-x-hidden">
      <div className="flex flex-col justify-center items-center px-4">
        <div className="mb-24 flex flex-wrap justify-center text-center">
          <div className="w-full px-4">
            <h2 className={`${open_sans.className} text-4xl font-semibold text-blue-900`}>
              Veja alguns stories
            </h2>
            <p className="m-4 text-lg leading-relaxed text-gray-600">
              Saiba um pouco do que meus alunos tem a dizer sobre as
              aulas.
            </p>
          </div>
        </div>
        <div className="w-1/3 h-96 relative p-2">
          <div className="absolute aspect-[9/16] w-full -rotate-12 -translate-x-16 rounded-lg bg-red-500 opacity-60 transition duration-500 delay-250 ease-in-out hover:translate-x-0 hover:rotate-0 hover:scale-125 hover:opacity-100 peer"><Image src={image} alt="Placeholder"/></div>
          <div className="absolute aspect-[9/16] w-full -translate-y-4 rounded-lg bg-orange-600 opacity-60 transition duration-500 delay-250 ease-in-out hover:rotate-0 hover:scale-125 hover:opacity-100 peer peer-hover:rotate-45 peer-hover:translate-x-80"></div>
          <div className="absolute aspect-[9/16] w-full translate-x-16 rotate-12 rounded-lg bg-blue-500 opacity-60 transition duration-500 delay-250 ease-in-out hover:translate-x-16 hover:rotate-0 hover:scale-125 hover:opacity-100 peer peer-hover:rotate-45 peer-hover:translate-x-80"></div>
        </div>
        {/* <Carousel className="w-3/4 shadow-lg shadow-blue-900 rounded-lg" showThumbs={false} infiniteLoop autoPlay interval={4000} showStatus={false}>
          <Card
            name="Interesting Person"
            description="Essa aula de inglês tem me ajudado imensamente. Minha pronunciação melhorou e consigo me comunicar mais facil e rapidamente."
            source="https://api.dicebear.com/6.x/big-smile/svg?seed=Felix&size=48"
            altText="Placeholder Image"
          />
          <Card
            name="Interesting Person 2"
            description="Essa aula de inglês tem me ajudado imensamente. Minha pronunciação melhorou e consigo me comunicar mais facil e rapidamente."
            source="https://api.dicebear.com/6.x/big-smile/svg?seed=Aneka&size=48"
            altText="Placeholder Image"
          />
          <Card
            name="Interesting Person 3"
            description="Essa aula de inglês tem me ajudado imensamente. Minha pronunciação melhorou e consigo me comunicar mais facil e rapidamente."
            source="https://api.dicebear.com/6.x/big-smile/svg?seed=Felix&size=48"
            altText="Placeholder Image"
          />
        </Carousel> */}
      </div>
    </section>
  );
}

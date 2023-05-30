import { Open_Sans, PT_Sans_Narrow } from "next/font/google";
import Image from "next/image";

import HeroImage from "@/assets/Hero.jpg";
import { Button } from "@/components/button";

const open_sans = Open_Sans({
  weight: "800",
  subsets: ["latin"],
  display: "swap"
});

const pt_sans = PT_Sans_Narrow({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap"
});

export function Hero() {
  return (
    <div className="h-screen min-h-[75vh] overflow-hidden bg-white lg:grid lg:grid-cols-2">
      <div className="flex items-center px-4 text-center lg:col-span-1">
        <div className="flex flex-col md:pl-24">
          <p
            className={`${pt_sans} border-1 mt-4 mb-4 rounded-md p-2 text-left text-2xl lg:text-5xl xl:text-6xl`}
          >
            Desbloqueie seu{" "}
            <span className="font-semibold text-blue-900">INGLÊS</span> com as
            aulas da
          </p>
          <h1
            className={`${open_sans.className} rounded-lg border bg-brightred-500 p-2 text-2xl font-semibold text-white shadow-lg shadow-blue-900 lg:text-5xl xl:text-6xl`}
          >
            Professora <p className="drop-shadow-lg">Fernanda Santos</p>
          </h1>
          <h2 className="mt-4 text-base lg:max-w-[75%] lg:self-end lg:text-right lg:text-2xl">
            Aulas online particulares ou em grupo, no seu tempo, e com um preço
            que cabe no seu bolso!
          </h2>
          <div className="mt-8 text-left">
            <Button text="Entre em contato!" url="contact" blue />
          </div>
        </div>
      </div>
      <div className="relative flex h-full justify-center lg:col-span-1 lg:auto-cols-min lg:items-center lg:justify-end">
        <div className="relative mt-16 aspect-[3/2] h-1/4 md:mt-32 lg:mt-0 lg:h-1/2 lg:translate-x-8">
          <div className="absolute h-full w-full translate-x-4 translate-y-4 bg-blue-900 lg:-z-10 lg:translate-x-8 lg:translate-y-8"></div>
          <div className="absolute h-full w-full -translate-x-4 -translate-y-4 bg-brightred-500 lg:-z-10 lg:-translate-x-8 lg:-translate-y-8"></div>
          <Image priority fill src={HeroImage} alt="Imagem de um prédio com a bandeira da Inglaterra projetada." />
        </div>
      </div>
    </div>
  );
}

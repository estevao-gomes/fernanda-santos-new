import { Open_Sans, PT_Sans, PT_Sans_Narrow } from "next/font/google";
import Image from "next/image";

import HeroImage from "@/assets/Hero.jpg";
import blob from "@/assets/blob.svg";
import { Button } from "@/components/button";

const open_sans = Open_Sans({
  weight: "800",
  subsets: ["latin"],
});

const pt_sans = PT_Sans_Narrow({
  weight: ["400"],
  subsets: ["latin"],
});

export function Hero() {
  return (
    // <div className="h-screen min-h-[75vh] relative">
    //   <div className="flex items-center col-span-1 px-4 text-center">
    //     <div className="md:pr-12">
    //       <p className={`${pt_sans} border-1 mt-4 mb-4 rounded-md p-2 text-sm font-semibold text-white shadow-md md:text-base text-left lg:text-7xl xl:text-8xl`}>
    //         Desbloqueie seu inglês com as aulas da
    //       </p>
    //       <h1
    //         className={`${open_sans.className} rounded-lg border bg-brightred-500 p-2 text-lg font-semibold text-white shadow-md lg:text-7xl xl:text-8xl`}
    //       >
    //         Professora <p>Fernanda Santos</p>
    //       </h1>
    //       <h2 className="text-white">
    //         Aulas online particulares ou em grupo, no seu tempo, e com um preço que cabe no seu bolso!
    //       </h2>
    //     </div>
    //   </div>
    //     <Image className="align-bottom object-cover -z-10" fill src={HeroImage} alt="Hero image" />
    // </div>
    <div className="h-screen min-h-[75vh] overflow-hidden bg-white lg:grid lg:grid-cols-2">
      <div className="flex items-center px-4 text-center lg:col-span-1">
        <div className="flex flex-col md:pl-24">
          <p
            className={`${pt_sans} border-1 mt-4 mb-4 rounded-md p-2 text-left md:text-2xl lg:text-5xl xl:text-6xl`}
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
          <h2 className="mt-4 text-lg lg:max-w-[75%] lg:self-end lg:text-right lg:text-2xl">
            Aulas online particulares ou em grupo, no seu tempo, e com um preço
            que cabe no seu bolso!
          </h2>
          <div className="mt-8 text-left">
            <Button text="Entre em contato!" url="contact" blue />
          </div>
        </div>
      </div>
      <div className="relative flex h-full items-center justify-end self-center lg:col-span-1 lg:auto-cols-min">
        <div className="relative h-1/2 w-full translate-x-32">
          <div className="absolute -z-10 h-full w-full translate-x-8 translate-y-8 bg-blue-900"></div>
          <div className="absolute -z-10 h-full w-full -translate-x-8 -translate-y-8 bg-brightred-500"></div>
          <Image
            // className="object-contain"
            fill
            // width={1400}
            // height={500}
            src={HeroImage}
            alt="Hero image"
          />
        </div>
      </div>
    </div>
  );
}

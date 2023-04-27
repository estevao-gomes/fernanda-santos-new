import { Open_Sans, PT_Sans, PT_Sans_Narrow } from "next/font/google";
import Image from "next/image";

import HeroImage from "@/assets/HeroImage3.png";
import blob from "@/assets/blob.svg";

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
    <div className="bg-slate-50 h-screen min-h-[75vh] lg:grid lg:grid-cols-2">
      <div className="flex items-center px-4 text-center lg:col-span-1">
        <div className="md:pr-12">
          <p
            className={`${pt_sans} border-1 mt-4 mb-4 rounded-md p-2 text-left md:text-2xl lg:text-5xl xl:text-6xl`}
          >
            Desbloqueie seu{" "}
            <span className="font-semibold text-blue-900">INGLÊS</span> com as
            aulas da
          </p>
          <h1
            className={`${open_sans.className} rounded-lg border bg-brightred-500 p-2 text-2xl font-semibold text-white shadow-md lg:text-5xl xl:text-6xl`}
          >
            Professora <p>Fernanda Santos</p>
          </h1>
          <h2 className="mt-4 text-lg lg:text-right lg:text-2xl">
            Aulas online particulares ou em grupo, no seu tempo, e com um preço
            que cabe no seu bolso!
          </h2>
        </div>
      </div>
      <div className="justify-end self-center border-8 border-blue-900 rounded-full overflow-hidden h-[75%] relative m-16 mt-0 flex items-center lg:m-0 lg:h-5/6 lg:auto-cols-min lg:col-span-1">
        <Image className="absolute -z-10" src={blob} alt="background blob" fill/>
        <Image
          className="object-contain"
          fill
          src={HeroImage}
          alt="Hero image"
        />
      </div>
    </div>
  );
}

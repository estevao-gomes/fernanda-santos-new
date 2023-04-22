import { Open_Sans } from "next/font/google";
import Image from "next/image";

import HeroImage from "@/assets/Hero.jpg";
import blobs from "@/assets/blobs(2).svg";

const open_sans = Open_Sans({
  weight: "800",
  subsets: ["latin"],
});

export function Hero() {
  return (
    <div
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{
        minHeight: "75vh",
      }}
    >
      <div className={`-z-2 absolute h-full w-full`}>
        <Image
          src={blobs}
          // width={1800}
          // height={660}
          alt="Background image"
          style={{ height: "100vh" }}
        />
      </div>
      <div className="container absolute z-0 mx-auto w-9/12">
        <div className="flex flex-wrap items-center">
          <div className="flex w-full px-4 text-center lg:w-6/12">
            <div className="md:pr-12">
              <h1
                className={`${open_sans.className} rounded-lg border bg-brightred-500 p-2 text-lg font-semibold text-white shadow-md lg:text-5xl`}
              >
                Professora <p>Fernanda Santos</p>
              </h1>
              <p className="border-1 mt-4 mb-4 rounded-md bg-blue-900 p-2 text-sm font-semibold text-white shadow-md md:mb-0 md:text-base lg:text-lg">
                Aulas de inglês particulares individuais ou em grupo. Aprenda no
                conforto da sua casa, no seu ritmo.
              </p>
            </div>
          </div>
          <Image src={HeroImage} width={600} height={400} alt="Hero image" />
        </div>
      </div>
    </div>
  );
}

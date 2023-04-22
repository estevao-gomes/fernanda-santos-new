import {
  faFingerprint,
  faPaperPlane,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import { Open_Sans } from "next/font/google";

import benefitsImage from "@/assets/benefits.jpg";

const open_sans = Open_Sans({
  weight: "800",
  subsets: ["latin"],
});

export function Benefits() {
  return (
    <section className="relative py-20">
      <div
        className="pointer-events-none absolute bottom-auto top-0 left-0 right-0 -mt-20 w-full overflow-hidden"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-current text-white"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto mb-4 w-full px-4 md:mb-0 md:w-4/12">
            <Image
              src={benefitsImage}
              alt="Placeholder Image"
              width={400}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="md:pr-12">
              <h3
                className={`${open_sans.className} text-3xl font-semibold text-blue-900`}
              >
                Preço que cabe no seu bolso
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Aprenda sem apertar o seu orçamento, várias opções de aula para
                você melhorar seu inglês.
              </p>
              <ul className="mt-6 list-none">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="mr-3 inline-block rounded-full bg-blue-800 py-1 px-2 text-xs font-semibold uppercase text-white">
                        <FontAwesomeIcon icon={faFingerprint} />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">
                        Aulas individuais ou em grupo. Economize aprendendo com
                        seus amigos!
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="mr-3 inline-block rounded-full bg-blue-800 py-1 px-2 text-xs font-semibold uppercase text-white">
                        <FontAwesomeIcon icon={faCode} />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">
                        Feedback individualizado e atenção personalizada do
                        professor, proporcionando excelente valor pelo seu
                        preço.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="mr-3 inline-block rounded-full bg-blue-800 py-1 px-2 text-xs font-semibold uppercase text-white">
                        <FontAwesomeIcon icon={faPaperPlane} />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">
                        Alcance seus objetivos de aprendizado de forma mais
                        eficiente e economize tempo e dinheiro.
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

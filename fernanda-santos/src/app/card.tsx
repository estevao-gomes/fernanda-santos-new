import Image from "next/image";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface cardProps{
    name: string;
    description: string;
    source: string;
    altText: string;
}

export function Card({name, description, source, altText}: cardProps){
    return(
        <div className={`w-9/12 lg:mb-0 mb-12 px-4`}>
                <div className="px-6 flex">
                  <Image 
                    src={source}
                    alt={altText}
                    width={400}
                    height={600}
                    className="flex-1"
                  />
                  <div className="pt-6 ml-4 text-center flex-1">
                    <h5 className="text-xl font-bold">
                      {name}
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      {description}
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    )
}
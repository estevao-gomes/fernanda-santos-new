import Image from "next/image";

interface cardProps {
  source: string;
  altText: string;
  translate: string;
  rotate: string;
  peerTranslate?: string;
  peerRotate?: string;
}

export function Card({
  source,
  altText,
  translate,
  rotate,
  peerTranslate,
  peerRotate,
}: cardProps) {
  //Tenho que passar a string completa do estilo para o Tailwind reconhecer
  const translateString = `xl:${translate}`;
  const rotateString = `xl:${rotate}`;
  const peerRotateString = `xl:peer-hover:${peerRotate}`;
  const peerTranslateString = `xl:peer-hover:${peerTranslate}`;
  return (
    <div
      className={`xl:delay-250 xl:peer aspect-[5/6] xl:absolute xl:w-full ${translateString} ${rotateString} rounded-lg bg-red-500 opacity-60 hover:opacity-100 xl:transition xl:duration-500 xl:ease-in-out xl:hover:translate-x-0 xl:hover:rotate-0 xl:hover:scale-125 ${
        peerRotate ? peerRotateString : ""
      } ${peerTranslate ? peerTranslateString : ""} `}
    >
      <Image src={source} alt={altText} fill />
    </div>
  );
}

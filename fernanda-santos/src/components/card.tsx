import Image from "next/image";

interface cardProps {
  name: string;
  description: string;
  source: string;
  altText: string;
}

export function Card({ name, description, source, altText }: cardProps) {
  return (
    <div className={`mb-12 px-2 lg:mb-0`}>
      <div className="flex px-6">
        <Image
          src={source}
          alt={altText}
          width={400}
          height={600}
          className="flex-1"
        />
        <div className="ml-4 flex flex-1 flex-col justify-center pt-6 text-left">
          <h5 className="text-xl font-semibold">{name}</h5>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

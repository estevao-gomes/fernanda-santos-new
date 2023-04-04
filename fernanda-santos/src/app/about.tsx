import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({
  weight: "800",
  subsets: ["latin"]
})

export function About() {
  return (
    <section className="relative block bg-blue-900 pb-20">
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
            className="fill-current text-blue-900"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto mb-4 px-4 md:mb-0 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full px-4 lg:w-6/12">
            <h2 className={`${open_sans.className} text-4xl font-semibold text-white`}>Quem sou eu?</h2>
            <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-400">
              Professora de inglês a X anos, sou certificada pela Brodway
              International, e já dei aulas para mais de Y Alunos.{" "}
              <span className="text-xl font-semibold text-white">
                Venha aprender comigo!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

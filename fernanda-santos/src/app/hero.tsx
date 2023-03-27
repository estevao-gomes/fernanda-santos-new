export function Hero() {
  return (
    <div
      className="relative flex content-center items-center justify-center pt-16 pb-32"
      style={{
        minHeight: "75vh",
      }}
    >
      <div
        className="absolute top-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/800/600')",
        }}
      >
        <span
          id="blackOverlay"
          className="absolute h-full w-full bg-black opacity-75"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
            <div className="pr-12">
              <h1 className="text-5xl font-semibold text-white">
                Professora <p>Fernanda Santos</p>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Aulas de inglês particulares individuais ou em grupo. Aprenda no
                conforto da sua casa, no seu ritmo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute top-auto bottom-0 left-0 right-0 w-full overflow-hidden"
        style={{ height: "70px" }}
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
            className="fill-current text-slate-100"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  );
}

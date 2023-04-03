"use client";
import { Card } from "@/components/card";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function Social() {
  return (
    <section className="pt-20 pb-48">
      <div className="mx-auto px-4">
        <div className="mb-24 flex flex-wrap justify-center text-center">
          <div className="w-full px-4 lg:w-6/12">
            <h2 className="text-4xl font-semibold text-blue-900">
              Veja alguns depoimentos
            </h2>
            <p className="m-4 text-lg leading-relaxed text-gray-600">
              Saiba um pouco do que nossos alunos tem a dizer sobre nossas
              aulas.
            </p>
          </div>
        </div>
        <Carousel infiniteLoop autoPlay interval={4000} showStatus={false}>
          <Card
            name="Interesting Person"
            description="Essa aula de inglês tem me ajudado imensamente. Minha pronunciação melhorou e consigo me comunicar mais facil e rapidamente."
            source="https://api.dicebear.com/6.x/big-smile/svg?seed=Felix&size=48"
            altText="Placeholder Image"
          />
          <Card
            name="Interesting Person 2"
            description="Essa aula de inglês tem me ajudado imensamente. Minha pronunciação melhorou e consigo me comunicar mais facil e rapidamente."
            source="https://api.dicebear.com/6.x/big-smile/svg?seed=Aneka&size=48"
            altText="Placeholder Image"
          />
          <Card
            name="Interesting Person 3"
            description="Essa aula de inglês tem me ajudado imensamente. Minha pronunciação melhorou e consigo me comunicar mais facil e rapidamente."
            source="https://api.dicebear.com/6.x/big-smile/svg?seed=Felix&size=48"
            altText="Placeholder Image"
          />
        </Carousel>
      </div>
    </section>
  );
}

import Image from "next/image"
import { Card } from "./card"

export function Social(){
    return(
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Here are our heroes
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <Card
                name="Interesting Person"
                description="Nice Description"
                source="https://picsum.photos/800/600"
                altText="Placeholder Image"
              />
              <Card
                name="Interesting Person"
                description="Nice Description"
                source="https://picsum.photos/800/600"
                altText="Placeholder Image"
              />
              <Card
                name="Interesting Person"
                description="Nice Description"
                source="https://picsum.photos/800/600"
                altText="Placeholder Image"
              />
              <Card
                name="Interesting Person"
                description="Nice Description"
                source="https://picsum.photos/800/600"
                altText="Placeholder Image"
              />
            </div>
          </div>
        </section>
    )
}
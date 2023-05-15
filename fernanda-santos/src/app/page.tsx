import { About } from "./about";
import { Benefits } from "./benefits";
import { Contact } from "./contact";
import { CTA } from "./cta";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { Social } from "./social";

// Social aguardando depoimentos
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CTA />
      <Benefits />
      {/* <Social /> */}
      <About />
      <Contact />
    </main>
  );
}

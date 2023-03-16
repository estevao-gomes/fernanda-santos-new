import Image from 'next/image'
import { About } from './about'
import { Benefits } from './benefits'
import { Contact } from './contact'
import { CTA } from './cta'
import { Hero } from './hero'
import { Social } from './social'

export default function Home() {
  return (
      <main>
        <Hero />
        <CTA />
        <Benefits />
        <Social />
        <About />
        <Contact />
      </main>
  )
}

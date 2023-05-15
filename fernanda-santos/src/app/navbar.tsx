import Image from "next/image";

import logo from "@/assets/logo.jpg";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 w-full bg-darkBlue-500">
      <Image
        className="ml-32"
        src={logo}
        height={80}
        alt="Logo Professora Fernanda Santos"
      />
    </nav>
  );
}

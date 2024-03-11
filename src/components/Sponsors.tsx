import Image, { StaticImageData } from "next/image";

import { Container } from "@/components/Container";
import logoLaravel from "@/images/logos/laravel.svg";
import logoMirage from "@/images/logos/mirage.svg";
import logoStatamic from "@/images/logos/statamic.svg";
import logoStaticKit from "@/images/logos/statickit.svg";
import logoTransistor from "@/images/logos/transistor.svg";
import logoTuple from "@/images/logos/tuple.svg";

type Sponsor = {
  name: string;
  logo: StaticImageData;
  link: string;
};
const sponsors: Sponsor[] = [];

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Sponsors and partners
        </h2>
        {sponsors.length === 0 && (
          <div className="mx-auto mt-10 max-w-max ">
            <p className="block text-center w-full">
              Contact us at{" "}
              <a
                className="underline text-blue-600"
                href="mailto:contact@oneforthecity.com"
              >
                contact@oneforthecity.com
              </a>{" "}
              out if you'd like more information on becoming a sponsor or
              partner.
            </p>
          </div>
        )}
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

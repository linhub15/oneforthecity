import { BackgroundImage } from "@/components/BackgroundImage";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-semibold tracking-tighter text-blue-600 sm:text-6xl">
            <span className="sr-only">One for the City Vol. 4</span>One for the
            City <span className="text-blue-900 whitespace-nowrap">Vol. 4</span>
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              One for the City is street dance event founded in 2021 and
              dedicated to fostering the Alberta street dance community. Over
              the past three years we have created a platform that not only
              provides performance and development opportunities for street
              dance artists but also expands access for the broader public.
              Rooted in Hip-hop culture the event includes battles,
              performances, and opportunities for training, and fostering
              cultural connections.
            </p>
            <p>
              This year marks the fourth volume, and back in our home town
              Edmonton, AB. With two day event will allow us to have more
              cyphers, workshops and community exchange.
            </p>
          </div>
          <Button href="/tickets" className="mt-10 w-full sm:hidden">
            Get tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["Date", "June 29-30"],
              ["Venue", "St Basil's Cultural Centre"],
              ["Location", "Edmonton"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}

import { BackgroundImage } from "@/components/BackgroundImage";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

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
              Edmonton. With two day event will allow us to have more
              cyphers, workshops and community exchange.
            </p>
          </div>
          <Button href="/tickets" className="mt-10 w-full sm:hidden">
            Tickets & Registration
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["2 Day Event", "June 29-30"],
              ["Edmonton, Alberta", "St. Basil's Cultural Centre"],
              ["Breaking & Open Style", "Crew vs Crew Battle"],
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
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12 flex justify-center pt-12">
          <iframe
          className="rounded-xl shadow w-full h-72 lg:h-96"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9491.3685338932!2d-113.5099987!3d53.5070154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a021ffa16b56c5%3A0x78ca962164391760!2sSt%20Basil&#39;s%20Cultural%20Centre!5e0!3m2!1sen!2sca!4v1710199056276!5m2!1sen!2sca"
            width="600"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </div>
  );
}

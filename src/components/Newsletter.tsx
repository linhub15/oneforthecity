import Image from "next/image";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-newsletter.jpg";
import instagramImage from "@/images/logos/instagram.svg";

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Newsletter() {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Stay up to date
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Get updates on One for the City and be the first to get
                notified when tickets go on sale.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-blue-900">
                Follow us on socials <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="py-10">
                <a
                  className="inline-block px-6 py-4 rounded-lg bg-indigo-600 text-white font-semibold bg-opacity-80"
                  href="https://www.instagram.com/oneforthecity/"
                  target="_blank"
                >
                  <Image
                    className="inline w-6"
                    src={instagramImage}
                    alt="Instagram logo"
                  />{" "}
                  @oneforthecity
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

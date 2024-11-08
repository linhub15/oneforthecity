import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Link href="/">
          <Logo />
        </Link>
        <div className="text-center md:text-left">
          <p className="mt-6 text-base text-slate-500 md:mt-0">
            Copyright &copy; {new Date().getFullYear()}{" "}
            Mahol Arts Ltd.
          </p>
          <p className="text-sm text-slate-500">
            Website by{" "}
            <a
              className="underline hover:text-slate-400"
              href="https://www.linkedin.com/in/linhub"
            >
              Hubert Lin
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

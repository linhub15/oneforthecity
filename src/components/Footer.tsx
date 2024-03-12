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
        <p className="mt-6 text-base text-center text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()}{" "}
          Mahol Arts Ltd. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

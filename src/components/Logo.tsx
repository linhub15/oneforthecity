import Image from "next/image";
import brandImage from "@/images/brand/logo.jpg";

export function Logo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <Image
      className="rounded-xl"
      src={brandImage}
      alt="One for the City logo"
      width="124"
    />
  );
}

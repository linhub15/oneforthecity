import Image from "next/image";
import brandImage from "@/images/brand/logo.jpg";

export function Logo(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props}>
      <div className="absolute h-24 w-32 bg-gray-300 rounded-xl rotate-3 z-0">
      </div>
      <div className="absolute h-24 w-32 bg-gray-200 rounded-xl rotate-12 z-0 shadow">
      </div>
      <Image
        className="absolute rounded-xl h-24 object-cover z-10 shadow-lg"
        src={brandImage}
        alt="One for the City logo"
        width="128"
      />
    </div>
  );
}

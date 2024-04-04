import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { Schedule } from "@/components/Schedule";
import { People } from "@/components/People";
import { Hotels } from "@/components/Hotels";
import { Sponsors } from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <People />
      <Schedule />
      <Hotels />
      <Sponsors />
      <Newsletter />
    </>
  );
}

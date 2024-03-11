import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function Tickets() {
  return (
    <>
      <Header action={<Link className="underline text-blue-600 hover:bg-blue-100 rounded-xl p-4" href="/">Go Home</Link>} />
      <div className="mt-10 md:mt-20 w-full mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative space-y-12">
        <div className="mx-auto max-w-2xl lg:mx-0 space-y-4">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Tickets & Registration
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Pre-sales open on March 23, 2024. To register for the competition
            purchase the crew pass. Once your registration has been received you
            will receive a confirmation.
          </p>
        </div>
        <div className="py-10">
          <script async src="https://js.stripe.com/v3/pricing-table.js" />
          <stripe-pricing-table
            pricing-table-id="prctbl_1OsVONIuLhs6aDZvWFXNoNlT"
            publishable-key="pk_test_51Of8xFIuLhs6aDZvJHEe5pFdEUzgm7jK7tST4TdPSt4y3ZbkAzOoTXsHkJUZZb0TeJWHCHOBLWg4Z69cXc8xUApu00L0v97Usa"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

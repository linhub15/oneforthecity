export default function Tickets() {
  return (
    <>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table
        pricing-table-id="prctbl_1OsVONIuLhs6aDZvWFXNoNlT"
        publishable-key="pk_test_51Of8xFIuLhs6aDZvJHEe5pFdEUzgm7jK7tST4TdPSt4y3ZbkAzOoTXsHkJUZZb0TeJWHCHOBLWg4Z69cXc8xUApu00L0v97Usa"
      />
    </>
  );
}

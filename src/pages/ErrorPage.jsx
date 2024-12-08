import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-5">
      <h2 className="text-center text-2xl">Something went Wrong</h2>
      <Link to={"/"} className="bg-blue-600 px-4 py-2 text-center text-white">
        Continue Shopping
      </Link>
    </section>
  );
};

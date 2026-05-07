import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#244D3F] via-[#1B3A30] to-[#10241D] text-white px-4">
      <div className="text-center max-w-lg">
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold bg-linear-to-r from-[#4E9F83] to-[#A7D7C5] text-transparent bg-clip-text">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-300 mt-3">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-linear-to-r from-[#2E6B57] to-[#4E9F83] rounded-xl font-medium hover:scale-105 transition duration-300 shadow-lg hover:shadow-[#4E9F83]/40">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

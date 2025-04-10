import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-white to-blue-200 px-4">
      <div className="max-w-md w-full text-center bg-white p-10 rounded-2xl shadow-xl">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <p className="text-xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </p>
        <p className="text-gray-500 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/protected/landing">
          <Button>Go back home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

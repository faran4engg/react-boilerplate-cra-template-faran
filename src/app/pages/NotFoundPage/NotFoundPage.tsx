import { Helmet } from 'react-helmet-async';

import { ForbiddenIcon } from 'assets/icons';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>404 Not Found</title>
      <meta name="description" content="not found page" />
    </Helmet>
    <div className="flex flex-col items-center">
      <ForbiddenIcon
        className="w-12 h-12 mt-8 text-theme-color-light dark:text-theme-color-dark"
        aria-hidden="true"
      />
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
        404
      </h1>
      <p className="text-gray-700 dark:text-gray-300 my-4">
        Page not found. Check the address or
      </p>

      <Link
        className="animate-bounce text-theme-color-light dark:text-theme-color-dark hover:underline"
        to="/"
      >
        Go to Home page
      </Link>
    </div>
  </>
);

export default NotFoundPage;

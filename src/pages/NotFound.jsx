import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../components/Icons';

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-6xl font-extrabold text-primary sm:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight text-ink-light dark:text-ink-dark sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted-light dark:text-muted-dark">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeftIcon className="h-5 w-5" />
        Back to Home
      </Link>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-max text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">404 error</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">Page not found.</h1>
        <p className="mt-4 text-lg text-neutral-600">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link to="/">Go back home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Contact support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

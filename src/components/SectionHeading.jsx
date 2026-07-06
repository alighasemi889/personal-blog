import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './Icons';

export default function SectionHeading({ title, subtitle, linkTo, linkLabel }) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {subtitle && (
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{subtitle}</p>
        )}
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink-light dark:text-ink-dark sm:text-3xl">
          {title}
        </h2>
      </div>
      {linkTo && linkLabel && (
        <Link
          to={linkTo}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all duration-300 hover:gap-2"
        >
          {linkLabel}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

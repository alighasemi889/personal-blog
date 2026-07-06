import { Link } from 'react-router-dom';
import { HeartIcon } from './Icons';

const quickLinks = [
  { to: '/articles', label: 'Articles' },
  { to: '/podcasts', label: 'Podcasts' },
  { to: '/about', label: 'About' },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-edge-light bg-surface-cardLight/50 dark:border-edge-dark dark:bg-surface-cardDark/50">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink-light dark:text-ink-dark">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
                A
              </span>
              Personal Blog
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-light dark:text-muted-dark">
              Thoughts on frontend development, React, JavaScript, TypeScript, and the craft of building for the web — by Ali Ghasemi.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-light dark:text-ink-dark">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-light transition-colors duration-300 hover:text-primary dark:text-muted-dark dark:hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-edge-light pt-6 dark:border-edge-dark sm:flex-row sm:justify-between">
          <p className="flex items-center gap-1.5 text-sm text-muted-light dark:text-muted-dark">
            Made with
            <HeartIcon className="h-4 w-4 text-red-500" />
            by Ali Ghasemi
          </p>
          <p className="text-sm text-muted-light dark:text-muted-dark">
            &copy; {new Date().getFullYear()} Ali Ghasemi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

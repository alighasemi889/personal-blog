import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from './Icons';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/articles', label: 'Articles' },
  { to: '/podcasts', label: 'Podcasts' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-edge-light bg-surface-light/80 backdrop-blur-lg dark:border-edge-dark dark:bg-surface-dark/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-18" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink-light dark:text-ink-dark">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
            A
          </span>
          <span className="hidden sm:inline">Ali Ghasemi</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-light hover:text-ink-light dark:text-muted-dark dark:hover:text-ink-dark'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-edge-light bg-surface-cardLight text-ink-light transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary dark:border-edge-dark dark:bg-surface-cardDark dark:text-ink-dark dark:hover:border-primary dark:hover:text-primary"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-edge-light bg-surface-cardLight text-ink-light transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary dark:border-edge-dark dark:bg-surface-cardDark dark:text-ink-dark dark:hover:border-primary dark:hover:text-primary md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 top-16 z-40 bg-surface-dark/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <ul className="container-page relative z-50 space-y-1 pb-6 pt-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-primary-50 text-primary dark:bg-primary-900/40 dark:text-primary-300'
                        : 'text-muted-light hover:bg-surface-cardLight hover:text-ink-light dark:text-muted-dark dark:hover:bg-surface-cardDark dark:hover:text-ink-dark'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

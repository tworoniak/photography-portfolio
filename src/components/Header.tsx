import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { DesktopNav } from './DesktopNav';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/featured', label: 'Featured' },
  { to: '/galleries', label: 'Galleries' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const ACCENT_R = 176;
const ACCENT_G = 28;
const ACCENT_B = 46;

export const Header = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Scroll-aware header style
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!isMobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileOpen]);

  // Close mobile menu on click outside
  useEffect(() => {
    if (!isMobileOpen) return;
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (
        !panelRef.current?.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isMobileOpen]);

  const isItemActive = (to: string) =>
    to === '/'
      ? pathname === '/'
      : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <header
      className={[
        'relative sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300',
        isScrolled
          ? 'border-b border-white/10 bg-background/80 shadow-lg backdrop-blur-xl'
          : 'border-b border-white/10 bg-background/60 backdrop-blur',
      ].join(' ')}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4'>
        {/* Logo */}
        <NavLink
          to='/'
          end
          className='text-muted text-sm md:text-2xl font-bold transition-colors duration-300'
        >
          Thomas Woroniak Photography
        </NavLink>

        <DesktopNav navItems={navItems} pathname={pathname} />

        {/* Mobile menu button */}
        <button
          ref={buttonRef}
          type='button'
          onClick={() => setIsMobileOpen((open) => !open)}
          className='inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden'
          style={{
            boxShadow: isMobileOpen
              ? `0 0 0 1px rgb(${ACCENT_R} ${ACCENT_G} ${ACCENT_B} / 0.5)`
              : undefined,
          }}
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <HiX size={18} /> : <HiMenu size={18} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMobileOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/20 md:hidden'
              aria-hidden='true'
            />

            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className='border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden'
            >
              <nav className='mx-auto flex max-w-7xl flex-col px-4 py-3'>
                {navItems.map((item) => {
                  const active = isItemActive(item.to);
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.end}
                      onClick={() => setIsMobileOpen(false)}
                      className={({ isActive }) =>
                        [
                          'relative rounded-md px-3 py-3 text-sm uppercase tracking-wide transition-colors duration-300',
                          isActive
                            ? 'text-white'
                            : 'text-white/50 hover:bg-white/5 hover:text-white',
                        ].join(' ')
                      }
                    >
                      <span className='relative z-10'>{item.label}</span>

                      {active ? (
                        <motion.span
                          className='absolute inset-0 rounded-md'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          style={{
                            background: `linear-gradient(90deg, rgb(${ACCENT_R} ${ACCENT_G} ${ACCENT_B} / 0.14), transparent 85%)`,
                            boxShadow: `inset 0 0 0 1px rgb(${ACCENT_R} ${ACCENT_G} ${ACCENT_B} / 0.24)`,
                          }}
                          aria-hidden='true'
                        />
                      ) : null}
                    </NavLink>
                  );
                })}
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

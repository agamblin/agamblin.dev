'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DEFAULT_TRANSITION } from '@/constants';

const SECTIONS = ['about', 'experience', 'projects'] as const;

type Section = (typeof SECTIONS)[number];

function Navigation() {
  const [activeSection, setActiveSection] = React.useState<Section | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as Section);
          }
        });
      },
      { threshold: 1 },
    );

    // Observe each section
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="mt-20  hidden flex-col border-l-[1px] border-l-primary-500 lg:flex">
      {SECTIONS.map(section => (
        <a
          key={section}
          href={`#${section}`}
          className={`${
            section === activeSection ? 'text-primary-200' : 'text-primary-400'
          } relative py-2  pl-4 text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary-200`}
        >
          {section}
          {section === activeSection && (
            <motion.div
              className="absolute left-[-1px] top-0 z-20 h-full w-[1px] bg-primary-200 "
              layoutId="active"
              transition={DEFAULT_TRANSITION}
            />
          )}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;

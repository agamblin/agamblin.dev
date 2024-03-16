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
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');
      const sectionTops = Array.from(sections).map(section => {
        return {
          id: section.id as Section,
          top: section.getBoundingClientRect().top + scrollPosition,
        };
      });

      const currentSection = sectionTops.find(
        section => section.top > scrollPosition,
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    }
    window.addEventListener('scroll', handleScroll);
    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
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

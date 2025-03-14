'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DEFAULT_TRANSITION } from '@/constants';
import { cn } from '@/utils';

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
    <nav className={`
      mt-20 hidden flex-col border-l-[1px] border-l-primary-500
      lg:flex
    `}>
      {SECTIONS.map((section, idx) => (
        <a
          key={section}
          href={`#${section}`}
          className={cn(
            `
              relative py-2 pl-4 text-xs font-bold uppercase tracking-widest text-primary-400
              transition-colors
              hover:text-primary-200
            `,
            {
              'text-primary-200': section === activeSection,
            },
          )}
        >
          {section}
          {section === activeSection && (
            <motion.div
              className={`
                absolute left-[-1px] top-0 z-20 h-full w-[1px] bg-primary-200
                shadow-[0_0_9px_3px_hsl(219,46%,48%)]
              `}
              layoutId="active"
              transition={
                idx === 0 || idx === SECTIONS.length - 1
                  ? DEFAULT_TRANSITION
                  : { ...DEFAULT_TRANSITION, damping: 40 }
              }
            />
          )}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;

'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown } from 'react-feather';

export type CollapsibleProps = {
  treshold?: number;
  className?: string;
  name: string;
};

function ExpandableList({
  children,
  treshold = 3,
  name,
  className = '',
}: React.PropsWithChildren<CollapsibleProps>) {
  const childrenArray = React.Children.toArray(children);
  const [isOpen, setIsOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : {
        type: 'spring',
        stiffness: 500,
        damping: 40,
      };

  return (
    <Collapsible.Root onOpenChange={setIsOpen} open={isOpen}>
      <ol className={`flex flex-col gap-12 ${className}`}>
        {childrenArray.slice(0, treshold).map(child => child)}
        <Collapsible.Content forceMount asChild>
          {/* We use the negative margin to compensate for the empty space left by the content when it's collapsed */}
          <motion.ol
            className={`flex flex-col gap-12 overflow-hidden will-change-[height] ${
              !isOpen ? '-mt-12' : ''
            }`}
            animate={{
              height: isOpen ? 'var(--collapsible-content-height)' : '0px',
            }}
            initial={false}
            transition={transition}
          >
            {childrenArray.slice(treshold).map(child => child)}
          </motion.ol>
        </Collapsible.Content>
      </ol>
      <Collapsible.Trigger
        className={`relative mt-12 flex items-center gap-2 font-medium capitalize tracking-tight text-primary-100 after:absolute after:-inset-[var(--tap-increment)] after:content-[''] lg:after:content-none`}
      >
        {(!isOpen ? 'Expand' : 'Collapse') + ` ${name}`}
        <ChevronDown
          size={16}
          className={`${
            isOpen ? 'rotate-180' : 'rotate-0'
          } transition-transform`}
        />
      </Collapsible.Trigger>
    </Collapsible.Root>
  );
}

export default ExpandableList;

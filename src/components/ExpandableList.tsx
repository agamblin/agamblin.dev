'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown } from 'react-feather';
import { cn } from '@/utils';

export type CollapsibleProps = {
  treshold?: number;
  className?: string;
};

function ExpandableList({
  children,
  treshold = 3,
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

  const isExpandable = childrenArray.length > treshold;

  return (
    <Collapsible.Root onOpenChange={setIsOpen} open={isOpen}>
      <ul className={cn('flex flex-col gap-12', className)}>
        {childrenArray.slice(0, treshold).map(child => child)}
        {isExpandable && (
          <Collapsible.Content forceMount asChild>
            {/* We use the negative margin to compensate for the empty space left by the content when it's collapsed */}
            <motion.ol
              className={cn(
                'flex flex-col gap-12 overflow-hidden will-change-[height]',
                {
                  '-mt-12': !isOpen,
                },
              )}
              animate={{
                height: isOpen ? 'var(--collapsible-content-height)' : '0px',
              }}
              initial={false}
              transition={transition}
            >
              {childrenArray.slice(treshold).map(child => child)}
            </motion.ol>
          </Collapsible.Content>
        )}
      </ul>
      {isExpandable && (
        <Collapsible.Trigger
          className={`relative mt-12 flex items-center gap-2 font-medium capitalize tracking-tight text-primary-100 after:absolute after:-inset-[var(--tap-increment)] after:content-[''] lg:after:content-none`}
        >
          {!isOpen ? 'View more' : 'View less'}
          <ChevronDown
            size={16}
            className={cn('transition-transform', {
              'rotate-180': isOpen,
            })}
          />
        </Collapsible.Trigger>
      )}
    </Collapsible.Root>
  );
}

export default ExpandableList;

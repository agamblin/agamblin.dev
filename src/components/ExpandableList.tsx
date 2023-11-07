'use client';
import React from 'react';
import { motion } from 'framer-motion';
import * as Collapsible from '@radix-ui/react-collapsible';

export type CollapsibleProps = {
  treshold?: number;
  gap?: number;
  className?: string;
};

function ExpandableList({
  children,
  treshold = 3,
  gap = 12,
  className = '',
}: React.PropsWithChildren<CollapsibleProps>) {
  const childrenArray = React.Children.toArray(children);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible.Root onOpenChange={setIsOpen}>
      <ol className={`flex flex-col gap-${gap} ${className}`}>
        {childrenArray.slice(0, treshold).map(child => child)}
        <Collapsible.Content forceMount asChild>
          {/* We use the negative margin to compensate for the empty space left by the content when it's collapsed */}
          <motion.ol
            className={`flex flex-col gap-${gap} overflow-hidden will-change-[height] ${
              !isOpen ? '-mt-' + gap : ''
            }`}
            animate={{
              height: isOpen ? 'var(--collapsible-content-height)' : '0px',
            }}
            initial={false}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 40,
            }}
          >
            {childrenArray.slice(treshold).map(child => child)}
          </motion.ol>
        </Collapsible.Content>
      </ol>
      <Collapsible.Trigger>View more</Collapsible.Trigger>
    </Collapsible.Root>
  );
}

export default ExpandableList;

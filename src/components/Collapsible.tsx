'use client';

import React from 'react';
import { motion } from 'framer-motion';

type CollapsibleProps = {
  treshold?: number;
};

const DEFAULT_VALUES: CollapsibleProps = {
  treshold: 3,
};

function Collapsible({
  children,
}: React.PropsWithChildren<CollapsibleProps> = DEFAULT_VALUES) {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const arrayChildren = React.Children.toArray(children);

  return (
    <>
      <motion.ol
        layout={true}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 40,
          mass: 1,
          restDelta: 0.01,
        }}
        className="group/list mt-2 flex flex-col gap-12 lg:mt-0"
      >
        {arrayChildren.slice(
          0,
          isCollapsed ? DEFAULT_VALUES.treshold : arrayChildren.length,
        )}
      </motion.ol>
      <motion.button
        onClick={() => setIsCollapsed(cValue => !cValue)}
        layout="position"
      >
        View more
      </motion.button>
    </>
  );
}

export default Collapsible;

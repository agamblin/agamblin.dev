'use client';

import React, { MouseEvent } from 'react';
import {
  SpringOptions,
  motion,
  useMotionTemplate,
  useSpring,
} from 'framer-motion';

const SPRING_CONFIG = {
  damping: 10,
  stiffness: 100,
} satisfies SpringOptions;

function SpotlightOverlay({ children }: React.PropsWithChildren) {
  const xSpring = useSpring(0, SPRING_CONFIG);
  const ySpring = useSpring(0, SPRING_CONFIG);

  const background = useMotionTemplate`
    radial-gradient(
      650px at ${xSpring}px ${ySpring}px,
      rgba(29, 78, 216, 0.15), rgba(31, 75, 205, 0.15), rgba(36, 69, 178, 0.15),
      rgba(39, 61, 143, 0.15), rgba(39, 52, 109, 0.15), rgba(37, 43, 81, 0.15),
      rgba(33, 37, 62, 0.15), transparent
    )
  `;

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    xSpring.set(clientX - left);
    ySpring.set(clientY - top);
  }

  return (
    <body
      className="relative min-h-screen bg-primary-950 font-body text-primary-300"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none fixed inset-0 lg:absolute"
        style={{
          background,
        }}
      />
      {children}
    </body>
  );
}

export default SpotlightOverlay;

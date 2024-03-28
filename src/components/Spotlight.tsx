'use client';

import React, { MouseEvent } from 'react';
import {
  SpringOptions,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';

const SPRING_CONFIG = {
  damping: 10,
  stiffness: 100,
} satisfies SpringOptions;

function SpotlightOverlay({ children }: React.PropsWithChildren) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <body
      className="relative min-h-screen bg-primary-950 font-body text-primary-300"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none fixed inset-0 lg:absolute"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px at ${useSpring(mouseX, SPRING_CONFIG)}px ${useSpring(
                mouseY,
                SPRING_CONFIG,
              )}px,
              rgba(29, 78, 216, 0.15),
              rgba(31, 75, 205, 0.15),
              rgba(36, 69, 178, 0.15),
              rgba(39, 61, 143, 0.15),
              rgba(39, 52, 109, 0.15),
              rgba(37, 43, 81, 0.15),
              rgba(33, 37, 62, 0.15),
              transparent
            )
        `,
        }}
      />
      {children}
    </body>
  );
}

export default SpotlightOverlay;

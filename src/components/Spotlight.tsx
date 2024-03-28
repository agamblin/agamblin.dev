'use client';

import React, { MouseEvent } from 'react';
import {
  SpringOptions,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  MotionValue,
} from 'framer-motion';

const SPRING_CONFIG = {
  damping: 10,
  stiffness: 100,
} satisfies SpringOptions;

function useSpotlightBackground(
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>,
) {
  const xSpring = useSpring(mouseX, SPRING_CONFIG);
  const ySpring = useSpring(mouseY, SPRING_CONFIG);

  const background = useMotionTemplate`
    radial-gradient(
      650px at ${xSpring}px ${ySpring}px,
      rgba(29, 78, 216, 0.15), rgba(31, 75, 205, 0.15), rgba(36, 69, 178, 0.15),
      rgba(39, 61, 143, 0.15), rgba(39, 52, 109, 0.15), rgba(37, 43, 81, 0.15),
      rgba(33, 37, 62, 0.15), transparent
    )
  `;

  return background;
}

function SpotlightOverlay({ children }: React.PropsWithChildren) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightBackground = useSpotlightBackground(mouseX, mouseY);

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
          background: spotlightBackground,
        }}
      />
      {children}
    </body>
  );
}

export default SpotlightOverlay;

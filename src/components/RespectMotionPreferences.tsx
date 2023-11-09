'use client';

import React from 'react';
import { MotionConfig } from 'framer-motion';

function RespectMotionPreferences({ children }: React.PropsWithChildren<{}>) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default RespectMotionPreferences;

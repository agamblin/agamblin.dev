'use client';

import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
} from '@radix-ui/react-dropdown-menu';
import { FileText } from 'react-feather';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const AnimatedContent = motion(Content);

function DropdownMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Root open={isOpen} onOpenChange={setOpen}>
      <Trigger
        className={`
          after:content-['
          ']
          after:with-0 after:transition[width]
          relative inline-block p-2 text-primary-300
          after:absolute after:bottom-0 after:left-0 after:block after:h-[1px] after:w-0
          after:bg-primary-200 after:duration-200
          hover:text-primary-100 hover:after:w-full
          focus:after:w-full
          active:after:w-full
        `}
      >
        <FileText size={20} />
      </Trigger>
      <AnimatePresence>
        {isOpen && (
          <Portal forceMount>
            <Content className="rounded-md bg-primary-900 shadow-md" asChild>
              <motion.div
                transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
              >
                <Item
                  className={`
                    relative flex items-center px-2 py-1 font-semibold text-foreground-darker
                    before:mr-2 before:content-['🇫🇷']
                    hover:text-foreground-lighter
                  `}
                >
                  FR
                </Item>
                <Item
                  className={`
                    relative flex items-center px-2 py-1 font-semibold text-foreground-darker
                    before:mr-2 before:content-['🇺🇸']
                    hover:text-foreground-lighter
                  `}
                >
                  EN
                </Item>
              </motion.div>
            </Content>
          </Portal>
        )}
      </AnimatePresence>
    </Root>
  );
}

export default DropdownMenu;

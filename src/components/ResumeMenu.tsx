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

const RESUME_LINKS = [
  {
    label: 'FR',
    flag: '🇫🇷',
    url: '/resume_fr.pdf',
  },
  {
    label: 'EN',
    flag: '🇺🇸',
    url: '/resume_en.pdf',
  },
];

function ResumeDropdownMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Root open={isOpen} onOpenChange={setOpen}>
      <Trigger
        aria-label="Open resume menu"
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
          data-[state=open]:text-primary-100 data-[state=open]:after:w-full
        `}
      >
        <FileText size={20} />
      </Trigger>
      <AnimatePresence>
        {isOpen && (
          <Portal forceMount>
            <Content
              sideOffset={5}
              className={`
                flex origin-top flex-col items-center justify-center gap-1 rounded-md border
                border-primary-900 py-1 shadow-md
              `}
              asChild
            >
              <motion.div
                transition={{
                  type: 'spring',
                  duration: 0.4,
                  bounce: 0.2,
                }}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.4 }}
              >
                {RESUME_LINKS.map(resume => (
                  <Item
                    key={resume.label}
                    className={`
                      leading-0 flex items-center gap-2 px-2 pr-3 text-foreground-darker
                      hover:text-foreground-lighter
                    `}
                    asChild
                  >
                    <motion.a
                      href={resume.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, delay: 0.115 }}
                    >
                      <span className="text-xs">{resume.flag}</span>
                      <span className="font-normal tracking-wider">
                        {resume.label}
                      </span>
                    </motion.a>
                  </Item>
                ))}
              </motion.div>
            </Content>
          </Portal>
        )}
      </AnimatePresence>
    </Root>
  );
}

export default ResumeDropdownMenu;

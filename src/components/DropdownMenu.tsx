'use client';

import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
} from '@radix-ui/react-dropdown-menu';
import { FileText } from 'react-feather';

function DropdownMenu() {
  return (
    <Root>
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
      <Portal>
        <Content className="rounded-md bg-primary-900 shadow-xl">
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
        </Content>
      </Portal>
    </Root>
  );
}

export default DropdownMenu;

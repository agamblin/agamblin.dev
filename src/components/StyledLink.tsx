import { cn } from '@/utils';
import { AnchorHTMLAttributes } from 'react';

function StyledLink({
  children,
  className = '',
  ...props
}: React.PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a
      {...props}
      className={cn(
        "after:content-[' '] after:with-0 after:transition[width]  relative inline-block text-primary-100 after:absolute after:bottom-0 after:left-0 after:block after:h-[1px] after:w-0 after:bg-primary-200 after:duration-200 hover:after:w-full focus:after:w-full active:after:w-full",
        className,
      )}
    >
      {children}
    </a>
  );
}

export default StyledLink;

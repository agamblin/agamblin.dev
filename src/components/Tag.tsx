import React from 'react';

function Tag({ children }: React.PropsWithChildren) {
  return (
    <li className="inline-block whitespace-nowrap rounded-full bg-primary-900 px-3 py-1 text-xs text-primary-200 group-hover/item:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover/item:drop-shadow-sm">
      {children}
    </li>
  );
}

export default Tag;

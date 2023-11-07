'use client';

import * as CollapsibleBase from '@radix-ui/react-collapsible';

export function CollapsibleRoot({
  children,
  ...props
}: React.PropsWithChildren<CollapsibleBase.CollapsibleProps>) {
  return <CollapsibleBase.Root {...props}>{children}</CollapsibleBase.Root>;
}

export function CollapsibleTrigger({
  children,
  ...props
}: React.PropsWithChildren<CollapsibleBase.CollapsibleTriggerProps>) {
  return (
    <CollapsibleBase.Trigger {...props}>{children}</CollapsibleBase.Trigger>
  );
}

export function CollapsibleContent({
  children,
  ...props
}: React.PropsWithChildren<CollapsibleBase.CollapsibleContentProps>) {
  return (
    <CollapsibleBase.Content {...props}>{children}</CollapsibleBase.Content>
  );
}

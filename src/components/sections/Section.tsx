import type { HTMLAttributes } from 'react';

export type SectionProps = {
  title: string;
  className?: HTMLAttributes<HTMLElement>['className'];
};

function Section({
  children,
  title,
  className = '',
}: React.PropsWithChildren<SectionProps>) {
  return (
    <section
      className={`tracking-relaxed flex flex-col gap-4 leading-relaxed ${className}`}
      id={title.toLowerCase()}
    >
      <h2 className="sticky top-0 z-10 bg-primary-950/70 py-2 font-semibold uppercase tracking-wider text-primary-100 backdrop-blur lg:sr-only">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Section;

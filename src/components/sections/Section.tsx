export type SectionProps = {
  title: string;
};

function Section({ children, title }: React.PropsWithChildren<SectionProps>) {
  return (
    <section className="tracking-relaxed  flex flex-col gap-4 leading-relaxed">
      <h2 className="sticky top-0 z-10 bg-primary-950/70 py-2 font-semibold uppercase tracking-wider text-primary-100 backdrop-blur lg:sr-only">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Section;

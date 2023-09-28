export type SectionProps = {
  title: string;
};

function Section({ children, title }: React.PropsWithChildren<SectionProps>) {
  return (
    <section className="tracking-relaxed flex flex-col gap-4 leading-relaxed">
      <h2 className="font-semibold uppercase tracking-wider text-primary-100 lg:sr-only">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Section;

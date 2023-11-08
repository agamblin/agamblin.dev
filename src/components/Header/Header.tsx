import Socials from './Socials';

function Header() {
  return (
    <header className="relative top-0 block max-h-screen justify-between  sm:flex lg:sticky lg:row-span-2 lg:flex-col lg:py-24">
      <div className="mb-8 sm:mb-0">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-primary-100 sm:text-5xl">
          Arthur Gamblin
        </h1>
        <h2 className="mt-2 text-xl tracking-tight text-primary-100">
          Fullstack Software Engineer at Ionis
        </h2>
        <p className="mt-4 max-w-sm leading-normal">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
      </div>
      <Socials />
    </header>
  );
}

export default Header;

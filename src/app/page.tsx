import About from '@/components/sections/About';
import JobList from '@/components/sections/Jobs/JobList';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16  md:gap-y-24  lg:max-w-xl lg:flex-1 lg:gap-y-36 lg:pt-24 ">
      <About />
      <JobList />
    </main>
  );
}

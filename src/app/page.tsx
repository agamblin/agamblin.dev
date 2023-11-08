import About from '@/components/sections/About';
import JobList from '@/components/sections/Jobs/JobList';

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16 py-12 pt-24 md:gap-y-24 md:py-20 lg:max-w-xl lg:flex-1 lg:gap-y-36 lg:py-24">
      <About />
      <JobList />
    </main>
  );
}

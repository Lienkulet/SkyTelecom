import Hero from "./components/herro/Hero";
import Programs from "./components/programs/Programs";
import SubHero from "./components/subHero/SubHero";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1900px] flex-col justify-center items-center w-full">
      <Hero />
      <SubHero />
      <Programs />
    </main>
  )
}

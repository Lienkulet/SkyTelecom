import Hero from "@/components/herro/Hero";
import Programs from "@/components/programs/Programs";
import SubHero from "@/components/subHero/SubHero";
import TryBuy from "@/components/trybuy/TryBuy";


export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1900px] flex-col overflow-hidden w-full">
      <Hero />
      <SubHero />
      <Programs />
      <TryBuy />
    </main>
  )
}

import CallService from "@/components/callService/CallService";
import CoverMap from "@/components/coverMap/CoverMap";
import Hero from "@/components/herro/Hero";
import Programs from "@/components/programs/Programs";
import SmartHome from "@/components/smarthome/SmartHome";
import SubHero from "@/components/subHero/SubHero";
import Testimonials from "@/components/testimonials/Testimonials";
import TryBuy from "@/components/trybuy/TryBuy";


export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1900px] flex-col overflow-hidden w-full">
      <Hero />
      <SubHero />
      <Programs />
      <TryBuy />
      <SmartHome />
      <CallService />
      <CoverMap />
      <Testimonials />
    </main>
  )
}

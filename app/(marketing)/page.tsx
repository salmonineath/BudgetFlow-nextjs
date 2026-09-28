import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { InterfacePreview } from "@/components/marketing/interface-preview";
import { Manifesto } from "@/components/marketing/manifesto";
import { Personas } from "@/components/marketing/personas";
import { Cta } from "@/components/marketing/cta";
import { Footer } from "@/components/marketing/footer";

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <InterfacePreview />
      <Manifesto />
      <Personas />
      <Cta />
      <Footer />
    </main>
  );
}

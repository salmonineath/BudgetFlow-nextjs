import { createLandingDemo } from "@/components/marketing/demo-data";
import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { InterfacePreview } from "@/components/marketing/interface-preview";
import { Manifesto } from "@/components/marketing/manifesto";
import { Personas } from "@/components/marketing/personas";
import { Cta } from "@/components/marketing/cta";
import { Footer } from "@/components/marketing/footer";

// Refresh the example reporting period without requiring a new deployment.
export const revalidate = 3600;

export default function MarketingPage() {
  const demo = createLandingDemo(new Date());
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero demo={demo} />
      <Features />
      <HowItWorks demo={demo} />
      <InterfacePreview demo={demo} />
      <Manifesto />
      <Personas />
      <Cta />
      <Footer />
    </main>
  );
}

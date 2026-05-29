import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CarShowcase } from "@/components/CarShowcase";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Results } from "@/components/Results";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Torque Motors · Oficina automotiva premium" },
      {
        name: "description",
        content:
          "Oficina automotiva premium: diagnóstico computadorizado, manutenção e performance com tecnologia e transparência. Agende pelo WhatsApp.",
      },
      { property: "og:title", content: "Torque Motors · Oficina automotiva premium" },
      {
        property: "og:description",
        content:
          "Diagnóstico, manutenção e performance com tecnologia e transparência.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <CarShowcase />
      <Services />
      <Features />
      <Results />
      <Testimonials />
      <CTASection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}

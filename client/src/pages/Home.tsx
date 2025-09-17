import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StaticBookViewer from "@/components/StaticBookViewer";
import PageLeafing from "@/components/PageLeafing";
import MultimediaDemo from "@/components/MultimediaDemo";
import SimpleProcess from "@/components/SimpleProcess";
import FounderSpotlight from "@/components/FounderSpotlight";
import SuccessMetrics from "@/components/SuccessMetrics";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

// Premium Divider Component
function PremiumDivider({ variant = "primary" }: { variant?: "primary" | "secondary" | "tertiary" }) {
  const colors = {
    primary: {
      line: "from-transparent via-primary/30 to-primary/60",
      dots: ["bg-primary/40", "bg-primary/60", "bg-primary/40"]
    },
    secondary: {
      line: "from-transparent via-emerald-500/30 to-emerald-500/60", 
      dots: ["bg-emerald-500/40", "bg-emerald-500/60", "bg-emerald-500/40"]
    },
    tertiary: {
      line: "from-transparent via-purple-500/30 to-purple-500/60",
      dots: ["bg-purple-500/40", "bg-purple-500/60", "bg-purple-500/40"]
    }
  };

  const colorScheme = colors[variant];

  return (
    <div className="flex items-center justify-center py-16">
      <div className="flex items-center gap-4 max-w-md">
        <div className={`h-px flex-1 bg-gradient-to-r ${colorScheme.line}`}></div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${colorScheme.dots[0]}`}></div>
          <div className={`w-3 h-3 rounded-full ${colorScheme.dots[1]}`}></div>
          <div className={`w-2 h-2 rounded-full ${colorScheme.dots[2]}`}></div>
        </div>
        <div className={`h-px flex-1 bg-gradient-to-l ${colorScheme.line}`}></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PremiumDivider variant="primary" />
        <StaticBookViewer />
        <PremiumDivider variant="secondary" />
        <PageLeafing />
        <PremiumDivider variant="tertiary" />
        <MultimediaDemo />
        <PremiumDivider variant="primary" />
        <SuccessMetrics />
        <PremiumDivider variant="secondary" />
        <SimpleProcess />
        <PremiumDivider variant="tertiary" />
        <FounderSpotlight />
        <PremiumDivider variant="primary" />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import liamHayesImage from "@assets/1057673_1_org_bn-941622_5c41072122924c43a49fbb0887277c6c_1757588217356.jpg";
import paschalTaggartImage from "@assets/Paschal-Taggart20190826011-scaled_1757588217355.jpg";
import gerPerdisattImage from "@assets/Ger Perdisatt headshot_1757588420632.jpg";

export default function FounderSpotlight() {
  const founders = [
    {
      name: "Liam Hayes",
      title: "CEO and Founder",
      image: liamHayesImage,
      description: "All-Star footballer and two-time All-Ireland winner (1987, 1988) with Meath during their golden era under Seán Boylan. Transitioned from the pitch to become chief sports writer for The Sunday Press and respected TV3 GAA analyst. Bestselling author of Out of Our Skins and founder of Hero Books/Umbrella Publishing, specializing in GAA histories and local sporting legends. As CEO, Liam combines unparalleled GAA credibility with proven publishing expertise, ensuring every club story captures the authentic spirit and passion that makes Irish sport so special."
    },
    {
      name: "Paschal Taggart",
      title: "Chairman and Strategic Advisor", 
      image: paschalTaggartImage,
      description: "Veteran Irish business leader and dealmaker with over 40 years of executive experience across property development, retail, and corporate governance. Currently holds 37 active directorships and has been involved in many landmark corporate deals over decades. Former Chairman of Bord na gCon (Greyhound Racing Ireland) and active board member across multiple sectors. As Chairman, Paschal brings extensive networks, proven dealmaking expertise, and strategic vision to position My Club History as the definitive leader in heritage publishing across Ireland and the UK."
    },
    {
      name: "Ger Perdisatt", 
      title: "Chief Technology Officer",
      image: gerPerdisattImage,
      description: "Leads technology strategy and AI implementation at My Club History, architecting the intelligent systems that transform club memories into professional heritage publications. Simultaneously serves as CEO & Founder of Acuity AI Advisory, providing strategic AI guidance to enterprises and boards. Former Enterprise COO for Microsoft Western Europe, with 14+ years driving enterprise transformation. Independent Non-Executive Director at DAA plc and UCD Board Committee member. MBA from UCD Smurfit Business School. Ger brings proven enterprise leadership and board-level expertise to both his technology vision for MCH and his broader AI advisory practice."
    }
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-card-foreground mb-6">
            <span className="text-primary">Sports Authenticity</span> + Innovation + Wisdom
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Grassroots credibility meets cutting-edge technology, guided by proven business judgment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card key={index} className="hover-elevate bg-gradient-to-br from-background to-primary/5 border-card-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  {founder.image ? (
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-lg hover:shadow-primary/25 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary/15 to-primary/10 flex items-center justify-center border-4 border-primary/20 shadow-lg">
                      <span className="text-2xl font-serif font-bold text-primary">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-card-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-muted-foreground mb-4">{founder.title}</p>
                
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {founder.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Strength Summary */}
        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                The Perfect Combination for Sports Clubs
              </h3>
              <p className="text-lg text-card-foreground leading-relaxed mb-4">
                "Having lived the sporting experience from the pitch to the press box, I understand what makes each club's story truly special. 
                Combined with Ger's innovative technology platform and Paschal's strategic guidance, we're not just creating books – we're preserving the soul of Irish sport for future generations."
              </p>
              <p className="text-right text-primary font-semibold">— Liam Hayes, All-Star & All Ireland Winner, CEO and Founder</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
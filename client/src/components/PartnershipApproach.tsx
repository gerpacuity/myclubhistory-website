import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, TrendingUp, Clock } from "lucide-react";

export default function PartnershipApproach() {
  const benefits = [
    {
      icon: Shield,
      title: "Zero Financial Risk",
      description: "Access our entire platform and expertise at zero cost during the story-gathering and production phase"
    },
    {
      icon: TrendingUp,
      title: "Start Small, Scale Confidently",
      description: "Most clubs return for additional orders as demand exceeds expectations"
    },
    {
      icon: CheckCircle,
      title: "Complete Control",
      description: "We shoulder the production and commissioning risk while you maintain complete control"
    },
    {
      icon: Clock,
      title: "Print-on-Demand",
      description: "No massive print runs – reorder exactly what you need, when you need it"
    }
  ];

  const howItWorks = [
    "Access our entire platform and expertise at zero cost during the story-gathering and production phase",
    "When your book is complete, simply commit to an initial order (typically 300 books at €40-50 each, with a 6-week print timeline)",
    "Our print-on-demand model means no massive print runs – reorder exactly what you need, when you need it",
    "Additional copies available with 6 weeks' lead time – no risk of unsold inventory gathering dust"
  ];

  const whyClubsLove = [
    "Start small, scale confidently – most clubs return for additional orders as demand exceeds expectations",
    "Your book stays current with our \"Keeping Books Alive\" promise – free updates mean you always have access to the latest version",
    "We shoulder the production and commissioning risk while you maintain complete control",
    "A transparent, pragmatic partnership where our success depends on yours"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 text-sm bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-primary/20">
            Partnership Model
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Partnership Approach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No upfront investment. No financial risk. Just exceptional results.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4 leading-relaxed">
            We've eliminated the traditional barriers to creating a premium club history book. You pay nothing until your book is ready to print – no deposits, no hidden fees, no commissioning costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* How it works */}
          <Card className="hover-elevate border-card-border bg-gradient-to-br from-background to-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                How it works
              </h3>
              <ul className="space-y-4">
                {howItWorks.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Why clubs love this */}
          <Card className="hover-elevate border-card-border bg-gradient-to-br from-background to-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Why clubs love this approach
              </h3>
              <ul className="space-y-4">
                {whyClubsLove.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Benefits grid */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-elevate border-card-border bg-gradient-to-br from-background to-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="hover-elevate border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Investment in Your Success</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We invest our expertise, technology, and resources upfront because we believe in the power of preserving your club's legacy. 
              You invest only when you have a finished product you're proud to share with your community.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
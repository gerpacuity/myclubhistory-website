import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Trophy, Shield, TrendingUp } from "lucide-react";
import launchImagePath from "@assets/Screenshot 2025-09-12 155642_1757689091787.png";

export default function SimpleProcess() {
  const processSteps = [
    {
      icon: Users,
      title: "Effortless Story Collection",
      description: "Our proven methods help you gather your club's treasures - photos, memories, old documents, match reports, newspaper clippings, interviews with legends - whatever you've got! No overwhelming paperwork, just smart organization.",
      timeline: "Months 1-2"
    },
    {
      icon: CheckCircle,
      title: "We Handle the Writing",
      description: "Here's where we shine: professional storytelling, design, and layout creation while you focus on what you know best. Regular updates keep you involved as your story takes shape.",
      timeline: "Months 3-4"
    },
    {
      icon: Trophy,
      title: "Premium Delivery & Launch",
      description: "Final review together, then museum-quality books delivered to treasure forever. Launch day is our favourite part - watching clubs hold their finished legacy for the first time, seeing generations come together over stories they thought were lost. The pride and emotion never gets old.",
      timeline: "Months 5-6"
    }
  ];

  const proofPoints = [
    "20+ clubs completed successfully",
    "50+ clubs currently in production", 
    "20% of contacted clubs say yes immediately",
    "€600k+ already contracted by trusting clubs"
  ];

  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            We Work <span className="text-primary">Together</span> to Bring<br />
            Your Story to <span className="text-accent">Life</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You know your club best — we know how to tell that story beautifully. Your memories + our expertise = something extraordinary.
          </p>
        </div>


        {/* Process Timeline */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="hover-elevate text-center border-card-border bg-gradient-to-br from-background to-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <Badge variant="secondary" className="mb-4">
                      {step.timeline}
                    </Badge>
                    
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-primary/20 mb-2 border border-primary/20 backdrop-blur-sm transition-all duration-500">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-blue-600 shadow-inner">
                          <Icon className="w-7 h-7 text-white drop-shadow-sm" />
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Proof Points - Improved Layout */}
        <div className="grid grid-cols-12 gap-x-12 gap-y-12 items-start">
          {/* Proof Points - Primary Column */}
          <div className="col-span-12 md:col-span-7 order-2 md:order-1">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">
              The Best Books Come From <span className="text-primary">Clubs Who Skip the Writing Marathon</span>
            </h3>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-primary/15 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground leading-relaxed">Every club has incredible stories — you help us find them</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-primary/15 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground leading-relaxed">Your members share the memories, we craft the compelling narrative</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-primary/15 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground leading-relaxed">You bring the gold, we turn it into something precious</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gradient-to-br from-primary/15 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground leading-relaxed">20+ clubs have escaped the daunting writing process and created something they're genuinely proud to pass down</span>
              </div>
            </div>
          </div>

          {/* Launch Image - Supporting Visual */}
          <div className="col-span-12 md:col-span-5 order-1 md:order-2">
            <Card className="max-w-lg md:max-w-none mx-auto overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative h-[clamp(12rem,28vh,18rem)] sm:h-[clamp(14rem,32vh,20rem)] md:h-[clamp(16rem,30vh,22rem)]">
                  <img 
                    src={launchImagePath} 
                    alt="Sports club history book launch with proud club members holding their finished books"
                    className="w-full h-full object-contain"
                    data-testid="img-launch-celebration"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground italic text-center">
                    Launch day magic: Sports club members proudly holding their completed heritage book.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partnership Approach Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              Our Partnership Approach
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              No upfront investment. No financial risk. Just exceptional results.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4 leading-relaxed">
              We've eliminated the traditional barriers to creating a premium club history book. You pay nothing until your book is ready to print – no deposits, no hidden fees, no commissioning costs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* How it works */}
            <Card className="hover-elevate border-card-border bg-gradient-to-br from-background to-primary/5">
              <CardContent className="p-8">
                <h4 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/15 to-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  How it works
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <span className="text-muted-foreground leading-relaxed">Access our entire platform and expertise at zero cost during the story-gathering and production phase</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <span className="text-muted-foreground leading-relaxed">When your book is complete, simply commit to an initial order (typically 300 books at €40-50 each, with a 6-week print timeline)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <span className="text-muted-foreground leading-relaxed">Our print-on-demand model means no massive print runs – reorder exactly what you need, when you need it</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">4</span>
                    </div>
                    <span className="text-muted-foreground leading-relaxed">Additional copies available with 6 weeks' lead time – no risk of unsold inventory gathering dust</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why clubs love this */}
            <Card className="hover-elevate border-card-border bg-gradient-to-br from-background to-primary/5">
              <CardContent className="p-8">
                <h4 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/15 to-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  Why clubs love this approach
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">Start small, scale confidently – most clubs return for additional orders as demand exceeds expectations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">Your book stays current with our "Keeping Books Alive" promise – free updates mean you always have access to the latest version</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">We shoulder the production and commissioning risk while you maintain complete control</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">A transparent, pragmatic partnership where our success depends on yours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="hover-elevate border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8 text-center">
              <h4 className="text-2xl font-serif font-semibold text-foreground mb-4">Our Investment in Your Success</h4>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We invest our expertise, technology, and resources upfront because we believe in the power of preserving your club's legacy. 
                You invest only when you have a finished product you're proud to share with your community.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
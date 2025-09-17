import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Award, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import frontCover from "@assets/WhatsApp Image 2025-09-11 at 13.10.36_1757592678186.jpeg";
import backCover from "@assets/WhatsApp Image 2025-09-11 at 13.10.36 (1)_1757592678184.jpeg";  
import spineDetail from "@assets/WhatsApp Image 2025-09-11 at 13.10.37_1757592678183.jpeg";
import insideCover from "@assets/WhatsApp Image 2025-09-11 at 13.10.37 (1)_1757592678182.jpeg";
import bindingQuality from "@assets/WhatsApp Image 2025-09-11 at 13.10.37 (2)_1757592678181.jpeg";

export default function StaticBookViewer() {
  const [currentView, setCurrentView] = useState(0);

  const bookViews = [
    {
      name: "Front Cover",
      description: "Premium hardcover with custom club design",
      image: frontCover
    },
    {
      name: "Binding & Quality", 
      description: "Feel the weight and premium materials",
      image: backCover
    },
    {
      name: "Inside Cover & Layout",
      description: "Premium layout design and typography quality",
      image: spineDetail
    },
    {
      name: "Rich Image Mix",
      description: "Blend of historic photos and club stories",
      image: insideCover
    },
    {
      name: "Back Cover",
      description: "Heritage timeline and club achievements",
      image: bindingQuality
    }
  ];

  const qualityFeatures = [
    {
      icon: Award,
      title: "Premium Hardcover",
      description: "Museum-quality binding that lasts generations"
    },
    {
      icon: Sparkles,
      title: "Luxury Materials", 
      description: "High-grade paper and professional printing"
    },
    {
      icon: Star,
      title: "Custom Design",
      description: "Tailored specifically to your club's heritage"
    }
  ];

  const nextView = () => {
    setCurrentView((prev) => (prev + 1) % bookViews.length);
  };

  const prevView = () => {
    setCurrentView((prev) => (prev - 1 + bookViews.length) % bookViews.length);
  };

  return (
    <section id="showcase" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Museum Quality Preview
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Examine Every Detail of Your <span className="text-primary">Premium Book</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse through different views to appreciate the museum-quality craftsmanship
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Book Viewer */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-background to-primary/5 shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Current View Info - Moved to Top */}
              <div className="mb-6 text-center">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {bookViews[currentView].name}
                </h3>
                <p className="text-muted-foreground">
                  {bookViews[currentView].description}
                </p>
              </div>
              
              <div className="relative">
                {/* Main Book Image */}
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center shadow-inner">
                  <img 
                    src={bookViews[currentView].image}
                    alt={bookViews[currentView].name}
                    className="w-full h-full object-contain transition-opacity duration-300"
                  />
                </div>

                {/* Navigation Controls */}
                <div className="absolute inset-y-0 left-2 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevView}
                    className="bg-primary/10 hover:bg-primary/20 text-primary shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    data-testid="button-prev-view"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextView}
                    className="bg-primary/10 hover:bg-primary/20 text-primary shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    data-testid="button-next-view"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                {/* View Indicator */}
                <div className="absolute top-4 left-4 bg-primary/15 backdrop-blur-sm rounded-full px-3 py-1 border border-primary/20">
                  <span className="text-sm font-medium text-primary">
                    {currentView + 1} / {bookViews.length}
                  </span>
                </div>
              </div>

              {/* View Navigation Dots */}
              <div className="flex justify-center mt-4 gap-2">
                {bookViews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentView(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentView 
                        ? 'bg-primary shadow-lg shadow-primary/50' 
                        : 'bg-muted-foreground/30 hover:bg-primary/50'
                    }`}
                    data-testid={`view-dot-${index}`}
                  />
                ))}
              </div>
            </Card>
          </div>

          {/* Quality Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Experience Championship Quality
              </h3>
              <p className="text-muted-foreground mb-8">
                Every angle reveals the premium materials and craftsmanship that make these books worthy of your club's heritage.
              </p>
            </div>

            <div className="space-y-6">
              {qualityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 hover-elevate border-card-border bg-gradient-to-br from-background to-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/15 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6 border border-primary/20 shadow-md">
              <h4 className="font-semibold text-foreground mb-2">Complete View Experience</h4>
              <p className="text-muted-foreground text-sm">
                Browse through all angles of your premium hardcover book. From the elegant front cover to the detailed binding, 
                every view showcases the museum-quality materials and craftsmanship that makes each book a lasting treasure.
              </p>
            </div>
          </div>
        </div>

        {/* Quick View Gallery */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-serif font-semibold text-center text-foreground mb-8">
            Quick View Gallery
          </h3>
          
          <div className="grid grid-cols-5 gap-4">
            {bookViews.map((view, index) => (
              <Card 
                key={index} 
                className={`p-3 cursor-pointer transition-all duration-300 hover-elevate hover:shadow-lg hover:shadow-primary/20 hover:scale-105 ${
                  index === currentView ? 'ring-2 ring-primary shadow-lg shadow-primary/25 bg-primary/5' : 'hover:bg-primary/5'
                }`}
                onClick={() => setCurrentView(index)}
                data-testid={`quick-view-${index}`}
              >
                <div className="aspect-[3/4] bg-muted/50 rounded-md mb-2 overflow-hidden">
                  <img 
                    src={view.image} 
                    alt={view.name}
                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-xs font-medium text-foreground text-center truncate">
                  {view.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
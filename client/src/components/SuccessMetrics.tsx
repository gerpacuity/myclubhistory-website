import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, TrendingUp, Star } from "lucide-react";
import { useState, useEffect } from "react";
import brianWilloughbyImage from "@assets/1721394797997_1757942968900.jpg";
import kieranMcGannImage from "@assets/oeiTR-eV_400x400_1757943220848.jpg";
import donieJimImage from "@assets/492452544_1214218870710818_1711095541898128088_n_1757943326237.jpg";
import nickyKeelingImage from "@assets/b02b40a8-aa01-11ed-b7b3-0210609a3fe2_1757943403339.jpg";

interface Metric {
  icon: any;
  value: string;
  label: string;
  description: string;
  color: string;
}

export default function SuccessMetrics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('metrics');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const metrics: Metric[] = [
    {
      icon: BookOpen,
      value: "30+",
      label: "Club Stories Preserved",
      description: "Premium hardcover histories celebrating club heritage",
      color: "text-primary"
    },
    {
      icon: Users,
      value: "70+",
      label: "Clubs in Production",
      description: "Currently creating their multimedia history books",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      value: "100+",
      label: "Years of History",
      description: "Combined club heritage brought to life through technology",
      color: "text-chart-3"
    },
    {
      icon: Star,
      value: "1000s",
      label: "Members Amazed",
      description: "Club members experiencing their history come alive",
      color: "text-chart-4"
    }
  ];

  const testimonials = [
    {
      club: "Lismore GAA Club",
      county: "Waterford",
      quote: "Enormous thanks to Liam Hayes of MyClubHistory, who has been a font of knowledge, and guided me along the way",
      member: "Brian Willoughby",
      image: brianWilloughbyImage
    },
    {
      club: "East Cork GAA Board",
      county: "Cork", 
      quote: "We in East Cork GAA found the team at MyClubHistory brilliantly supportive and professional from first to last in the production of our centenary book. We are so very proud of the publication they helped us build",
      member: "Kieran McGann, Author, A Centenary Celebration 2024",
      image: kieranMcGannImage
    },
    {
      club: "Summerhill GAA Club",
      county: "Meath",
      quote: "Unfailingly helpful and professional ... always available for consultation and advice",
      member: "Donie Mooney and Jim Gilligan, Authors, A History in Blue and Gold",
      image: donieJimImage
    },
    {
      club: "Faythe Harriers Hurling and Camogie Club",
      county: "Wexford",
      quote: "I want to give my thanks to our wonderfully supportive publisher, Liam Hayes, and his company MyClubHistory. The patience, understanding and commitment demonstrated during the whole of this process was phenomenal",
      member: "Nicky Keeling, Chairperson",
      image: nickyKeelingImage
    }
  ];

  return (
    <section id="metrics" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Club <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how sports clubs across Ireland are preserving their heritage and amazing their members with living history books
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="hover-elevate text-center border-card-border bg-gradient-to-br from-background to-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-2 shadow-lg hover:shadow-primary/20 border border-primary/20 backdrop-blur-sm transition-all duration-500">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-blue-600 shadow-inner">
                        <Icon className="w-7 h-7 text-white drop-shadow-sm" />
                      </div>
                    </div>
                  </div>
                  <div className={`text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-center text-foreground mb-12">
            What Club Members Are Saying
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate border-card-border bg-gradient-to-br from-background to-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-6">
                  {testimonial.image && (
                    <div className="mb-4 flex justify-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.member}
                        className="w-32 h-32 rounded-full object-cover border-2 border-primary/20 shadow-md"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-start gap-3 mb-4">
                    <Badge variant="secondary" className="text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-primary/20 whitespace-normal leading-tight max-w-[200px] h-auto py-1">
                      {testimonial.club}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.county}
                    </span>
                  </div>
                  
                  <blockquote className="text-card-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <p className="text-sm text-muted-foreground text-right">
                    — {testimonial.member}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import heritage1 from "@assets/inpho_00788517_1757930987604.jpg";
import heritage2 from "@assets/1959_1757930987605.jpg";
import heritage3 from "@assets/S2_image_1_1757930987606.jpg";
import heritage4 from "@assets/1953_1757930987607.jpg";
import heritage5 from "@assets/120_1757930987608.jpg";
import heritage6 from "@assets/u18_1757930987609.jpg";
import heritage7 from "@assets/AX0I7464_1757930987610.jpg";
import heritage8 from "@assets/shill_1757930987611.jpg";
import heritage9 from "@assets/2009_1757930987611.jpg";
import heritage10 from "@assets/VS24_1757930987612.jpg";
import harriers from "@assets/harriers_1757931886902.jpg";
import heritage3v2 from "@assets/S2_image_1v2_1757932558982.jpg";
import heritage5v2 from "@assets/120v2_1757933061802.png";

export default function Hero() {
  // Authentic heritage photos showcasing Irish sporting club moments across decades
  const heritageImages = [
    {
      year: "Modern",
      image: heritage1,
      alt: "Women's team in vibrant yellow jerseys celebrating championship victory with trophy"
    },
    {
      year: "1959",
      image: heritage2,
      alt: "Historic 1959 SFC Winners team photo - classic black and white heritage"
    },
    {
      year: "Athletics Team",
      image: harriers,
      alt: "Mullingar Harriers athletics team in matching burgundy and white uniforms celebrating after race"
    },
    {
      year: "Classic Era",
      image: heritage3v2,
      alt: "Vintage black and white team photo capturing the timeless spirit of Irish sport"
    },
    {
      year: "Modern Athletics",
      image: heritage5v2,
      alt: "Athletes in green and white tracksuits on championship podium with medals"
    },
    {
      year: "1931",
      image: heritage8,
      alt: "Historic 1931 Shill Junior Champions - earliest club photo showing deep sporting tradition"
    },
    {
      year: "Rugby Heritage",
      image: heritage6,
      alt: "Women's rugby team in burgundy and white stripes celebrating victory with pure joy"
    },
    {
      year: "1953",
      image: heritage4,
      alt: "1953 Juvenile Champions in sepia tones - young players with trophy representing club legacy"
    },
    {
      year: "GAA Triumph",
      image: heritage7,
      alt: "Young GAA team in green and yellow celebrating with championship shield and trophy"
    },
    {
      year: "Youth Success",
      image: heritage9,
      alt: "U14 team from 2009 in blue jerseys proudly holding their championship trophy"
    },
    {
      year: "Rugby Action",
      image: heritage10,
      alt: "Dynamic rugby action shot with young players in burgundy and blue competing passionately"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("opacity-100");

  // Rotate through sports images every 7 seconds with softer transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("opacity-30"); // Start softer fade out
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % heritageImages.length
        );
        setFadeClass("opacity-100"); // Fade back in
      }, 600); // Longer transition time for softer effect
      
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, [heritageImages.length]);

  const handleGetStarted = () => {
    console.log("Get Started clicked");
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWatchDemo = () => {
    console.log("Watch Demo clicked");
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image with Dark Wash - Revolving Sports Images */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out ${fadeClass}`}
        style={{ backgroundImage: `url(${heritageImages[currentImageIndex].image})` }}
        aria-label={heritageImages[currentImageIndex].alt}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-blue-800/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-primary/10" />
      
      {/* Sport indicator dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heritageImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => {
              setCurrentImageIndex(index);
              setFadeClass("opacity-100");
            }}
            aria-label={`Switch to ${heritageImages[index].year} heritage photo`}
            data-testid={`dot-heritage-${index}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in">
            Your Club's Greatest Moments Deserve to <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent font-bold">Live Forever</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
            Every championship, every legend, every unforgettable day — preserved for generations in museum-quality books
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            From your club founders to today's young stars — everyone becomes part of your club's story. We work together to make it happen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-[1.02] border-0"
              onClick={handleGetStarted}
              data-testid="button-get-started"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center mr-2 shadow-inner">
                <Sparkles className="w-4 h-4 text-white drop-shadow-sm" />
              </div>
              Start Your Club's Story
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-primary hover:from-blue-600/90 hover:to-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-[1.02] border-0"
              onClick={handleWatchDemo}
              data-testid="button-watch-demo"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center mr-2 shadow-inner">
                <Play className="w-4 h-4 text-white drop-shadow-sm" />
              </div>
              See It In Action
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
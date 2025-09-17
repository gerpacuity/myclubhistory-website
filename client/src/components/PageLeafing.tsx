import { useState, useRef, useEffect, forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import the 10 new spread images
import page1 from "@assets/Screenshot 2025-09-15 210604_1757966851432.png";  // Book cover
import page2 from "@assets/Screenshot 2025-09-15 165130_1757953304650.png";  // Congratulations - Jarlath Burns
import page3 from "@assets/Screenshot 2025-09-15 165214_1757953304650.png";  // Welcome - Dick Murphy
import page4 from "@assets/Screenshot 2025-09-15 165303_1757953304649.png";  // 1968 Triple Team
import page5 from "@assets/Screenshot 2025-09-15 165339_1757953304647.png";  // The Clubhouse
import page6 from "@assets/Screenshot 2025-09-15 165451_1757953304646.png";  // Clancy Family Three generations
import page7 from "@assets/Screenshot 2025-09-15 165516_1757953304645.png";  // Programme - Anniversary Week
import page8 from "@assets/Screenshot 2025-09-15 171729_1757953304644.png";  // The De Búrca Family in Action
import page9 from "@assets/Screenshot 2025-09-15 171816_1757953304643.png";  // Facilities at Alfe Byrne Road
import page10 from "@assets/Screenshot 2025-09-15 171957_1757953304642.png"; // Past Presidents
import page11 from "@assets/Screenshot 2025-09-15 173018_1757953905814.png"; // Team photos - Under-16 Boys 2014 and 2022 Shield Winners
import page12 from "@assets/Screenshot 2025-09-15 173130_1757953905813.png"; // Larry McVeigh on bicycle

// Array in display order: page1 → page2 → page3 → etc.
const spreadImages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12];

// Create front/back pairs for realistic page flipping
// Each pair becomes one leaf: [front, back] so underside shows next image
const leafPairs = [];
for (let i = 0; i < spreadImages.length; i += 2) {
  if (i + 1 < spreadImages.length) {
    leafPairs.push(spreadImages[i], spreadImages[i + 1]);
  } else {
    leafPairs.push(spreadImages[i]);
  }
}

// Simple Page component for react-pageflip
const Page = forwardRef<HTMLDivElement, { image: string; pageIndex: number }>(
  ({ image, pageIndex }, ref) => (
    <div ref={ref} className="page overflow-hidden bg-white">
      <div className="w-full h-full flex items-center justify-center">
        <img 
          src={image} 
          alt={`Page ${pageIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  )
);

Page.displayName = 'Page';

export default function PageLeafing() {
  const [currentPage, setCurrentPage] = useState(0);
  const [HTMLFlipBook, setHTMLFlipBook] = useState<any>(null);
  const flipBookRef = useRef<any>(null);

  // Load react-pageflip dynamically
  useEffect(() => {
    const loadFlipBook = async () => {
      try {
        const module = await import('react-pageflip');
        setHTMLFlipBook(() => module.default);
      } catch (error) {
        console.error('Failed to load react-pageflip:', error);
      }
    };

    loadFlipBook();
  }, []);

  // Handle page flip events
  const handleFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  // Navigation functions
  const nextPage = () => {
    if (flipBookRef.current && currentPage < spreadImages.length - 1) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (flipBookRef.current && currentPage > 0) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const goToPage = (pageIndex: number) => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flip(pageIndex);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevPage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextPage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  if (!HTMLFlipBook) {
    return (
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="leafing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Experience Your Club's <span className="text-primary">Living History</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              See how your club's story comes to life in a premium hardcover book. Click and drag to turn pages, just like you would with the real thing. Each page combines traditional storytelling with cutting-edge technology.
            </p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Click pages to flip
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Use arrow keys
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
                Drag to turn pages
              </span>
            </div>
          </div>

          {/* Interactive Flipbook */}
          <div className="relative mx-auto flex justify-center items-center min-h-[700px]">
            <HTMLFlipBook
              ref={flipBookRef}
              width={700}
              height={500}
              size="fixed"
              maxShadowOpacity={0.3}
              showCover={false}
              mobileScrollSupport={false}
              onFlip={handleFlip}
              onChangeOrientation={() => {}}
              onChangeState={() => {}}
              className="flipbook single-page"
              style={{ margin: '0 auto' }}
              usePortrait={true}
              startPage={0}
              drawShadow={true}
              flippingTime={800}
              useMouseEvents={true}
              swipeDistance={30}
              clickEventForward={true}
              disableFlipByClick={false}
              showPageCorners={true}
              autoSize={false}
            >
              {/* Render paired children so underside shows next image */}
              {leafPairs.map((image, index) => (
                <Page
                  key={index}
                  image={image}
                  pageIndex={index}
                />
              ))}
            </HTMLFlipBook>

            {/* Navigation Controls */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevPage}
                disabled={currentPage === 0}
                className="h-16 w-8 rounded-r-lg bg-background/80 hover:bg-background border-r border-border z-10 disabled:opacity-50"
                data-testid="button-prev-page"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={nextPage}
                disabled={currentPage === spreadImages.length - 1}
                className="h-16 w-8 rounded-l-lg bg-background/80 hover:bg-background border-l border-border z-10 disabled:opacity-50"
                data-testid="button-next-page"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Page Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {spreadImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage 
                    ? 'bg-primary' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                data-testid={`page-dot-${index}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
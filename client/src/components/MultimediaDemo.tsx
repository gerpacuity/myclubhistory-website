import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Volume2, Sparkles, Zap } from "lucide-react";
import qrCodeExample from "@assets/Screenshot 2025-09-15 164138_1757950981404.png";
import audioQrExample from "@assets/Screenshot 2025-09-12 150603_1757686088216.png";
import audioQrCode from "@assets/qr-code (9)_1757686158695.png";
import videoQrCode from "@assets/qr-code (10)_1757951158554.png";
import historicTeamPhoto from "@assets/495580752_1266834832108902_1107663637498975323_n_1757687212658.jpg";
import aiAnimatedPhoto from "@assets/watermarked-670d0931-0542-4d98-8f91-7aa1e7d55840 (1)_1757687200737.mp4";

export default function MultimediaDemo() {

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Your <span className="text-primary">Legends Come Alive</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Using QR codes, we link directly to video content so you can relive those magical moments over and over again — your legends' greatest achievements preserved forever
          </p>
        </div>

        {/* QR Code Example Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-semibold text-foreground">
                      Watch the Greatest Moments
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Key video moments in your club's story include QR codes that link directly to exclusive footage. Just scan with your phone to watch that legendary goal, that championship celebration, or witness history unfold again.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Scan the QR Code</h4>
                      <p className="text-sm text-muted-foreground">Point your phone camera at any QR code in the book</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Watch the Magic</h4>
                      <p className="text-sm text-muted-foreground">Instantly access exclusive video footage of that exact moment</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <img 
                      src={qrCodeExample} 
                      alt="Sports club book page showing QR code linking to video content" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 flex items-center gap-3">
                    <div className="bg-white p-3 rounded-xl shadow-xl">
                      <img 
                        src={videoQrCode} 
                        alt="Scan this video QR code to watch club history" 
                        className="w-32 h-32"
                        data-testid="img-video-qr-code"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-semibold">Scan to Watch!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audio QR Code Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-500/5 to-teal-600/10 rounded-2xl p-8 border border-emerald-500/20 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <img 
                      src={audioQrExample} 
                      alt="Sports club book page showing audio QR code for member's story" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 flex items-center gap-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-semibold">Scan to Listen!</span>
                    </div>
                    <div className="bg-white p-3 rounded-xl shadow-xl">
                      <img 
                        src={audioQrCode} 
                        alt="Scan this audio QR code to hear club legends" 
                        className="w-32 h-32"
                        data-testid="img-audio-qr-code"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-semibold text-foreground">
                      Hear Your Legends Speak
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Audio QR codes let you hear club legends tell their stories in their own words. Listen to championship speeches, locker room talks, and personal memories that bring the human side of your club's history to life.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-emerald-500/10">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Scan for Sound</h4>
                      <p className="text-sm text-muted-foreground">Point your phone at the audio QR code</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-emerald-500/10">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Hear the Stories</h4>
                      <p className="text-sm text-muted-foreground">Listen to exclusive audio from your club's greatest voices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Photo Animation Section */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500/5 to-violet-600/10 rounded-2xl p-8 border border-purple-500/20 shadow-lg">
              <div className="space-y-8">
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-serif font-semibold text-foreground">
                      AI Brings Old Photos to Life
                    </h3>
                    <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
                      Using cutting-edge AI technology, we transform your club's treasured still photographs into moving memories. Watch as this 1953 championship team subtly comes alive.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 justify-center">
                    <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-purple-500/10">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Select Historic Photos</h4>
                        <p className="text-sm text-muted-foreground">We choose the most impactful images from your collection</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-purple-500/10">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">AI Animation Magic</h4>
                        <p className="text-sm text-muted-foreground">Advanced AI algorithms create subtle, respectful movement that honors your history</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Before/After Comparison - Now Larger and Below Text */}
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="grid grid-cols-2 gap-0">
                      {/* Before - Static Photo */}
                      <div className="relative aspect-[4/3]">
                        <img 
                          src={historicTeamPhoto} 
                          alt="1953 Co. Senior Champions - Original historic photo"
                          className="w-full h-full object-cover"
                          data-testid="img-historic-team-photo"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded text-sm font-medium">
                          Before
                        </div>
                      </div>
                      
                      {/* After - AI Animation */}
                      <div className="relative aspect-[4/3]">
                        <video 
                          src={aiAnimatedPhoto}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          data-testid="video-ai-animation"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-500/90 to-violet-600/90 backdrop-blur-sm text-white px-3 py-2 rounded text-sm font-medium">
                          <div className="flex items-center gap-1">
                            <Sparkles className="w-4 h-4" />
                            After AI
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-3">
                      <div className="text-center">
                        <h4 className="font-semibold text-foreground text-lg">1953 Co. Senior Champions</h4>
                        <p className="text-muted-foreground">Static Photo → Living Memory</p>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <div className="flex items-center gap-1 text-purple-600">
                          <Zap className="w-5 h-5" />
                          <span className="text-sm font-medium">AI Animation Technology</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-semibold">Pure Magic!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
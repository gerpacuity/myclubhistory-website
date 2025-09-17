import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary to-blue-900 text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-foreground/15 to-primary-foreground/10 rounded-md flex items-center justify-center shadow-inner">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">My Club History</h3>
                <p className="text-sm text-primary-foreground/80">Umbrella Publishing</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 max-w-md">
              Transforming sports club heritage into premium multimedia books that preserve your stories for future generations.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Founded by Liam Hayes, Ger Perdisatt & Paschal Taggart</p>
              <p>Dublin, Ireland</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <button 
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
                className="block hover:text-primary-foreground hover:translate-x-1 transition-all duration-200"
                data-testid="footer-demo-link"
              >
                See Preview
              </button>
              <button 
                onClick={() => document.getElementById("metrics")?.scrollIntoView({ behavior: "smooth" })}
                className="block hover:text-primary-foreground hover:translate-x-1 transition-all duration-200"
                data-testid="footer-success-link"
              >
                Success Stories
              </button>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="block hover:text-primary-foreground hover:translate-x-1 transition-all duration-200"
                data-testid="footer-contact-link"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+353 1 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@myclubhistory.ie</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Dublin, Ireland</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} Umbrella Publishing (My Club History). All rights reserved.</p>
          <p className="mt-2">Preserving sports heritage through innovative storytelling technology.</p>
        </div>
      </div>
    </footer>
  );
}
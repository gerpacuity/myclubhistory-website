import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";


export default function ContactForm() {

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-card to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-card-foreground mb-6">
            Don't Let Another Year Pass Without <span className="text-primary">Preserving Your Legacy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The heroes who built your club, the moments that defined you — they deserve to live forever in a book so beautiful it becomes a family heirloom.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="max-w-2xl w-full">
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-center">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex flex-col sm:flex-row sm:justify-center sm:gap-12 sm:space-y-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Call Us</p>
                    <p className="text-muted-foreground">+353 1 234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Email Us</p>
                    <p className="text-muted-foreground">hello@myclubhistory.ie</p>
                  </div>
                </div>
                
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}
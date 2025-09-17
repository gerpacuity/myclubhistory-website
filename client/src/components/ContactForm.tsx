import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

const contactSchema = z.object({
  clubName: z.string().min(2, "Club name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  county: z.string().min(2, "Please specify your county"),
  message: z.string().min(10, "Please tell us more about your club's story")
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      clubName: "",
      contactName: "",
      email: "",
      phone: "",
      county: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      console.log("Submitting contact form:", data);
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      console.log("Response received:", response.status, response.statusText);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error:", errorText);
        throw new Error(`Failed to submit contact form: ${response.status}`);
      }
      
      const result = await response.json();
      console.log("Response data:", result);
      return result;
    },
    onSuccess: (data) => {
      console.log("Form submission successful:", data);
      toast({
        title: "Inquiry Received!",
        description: "We'll contact you within 24 hours to discuss your club's story.",
      });
      form.reset();
    },
    onError: (error) => {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    console.log("Form submitted with data:", data);
    console.log("Form validation errors:", form.formState.errors);
    console.log("Form is valid:", form.formState.isValid);
    console.log("Form dirty fields:", form.formState.dirtyFields);
    contactMutation.mutate(data);
  };

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

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
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
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-chart-3/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-chart-3" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Visit Us</p>
                    <p className="text-muted-foreground">Dublin, Ireland</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Tell Us About Your Club</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="clubName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Club Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., St. Patrick's Sports Club"
                                data-testid="input-club-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="county"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>County</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Cork"
                                data-testid="input-county"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., Seán O'Sullivan"
                                data-testid="input-contact-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your.email@example.com"
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+353 87 123 4567"
                              data-testid="input-phone"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tell Us About Your Club's Story</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Share your club's founding year, major achievements, memorable moments, or any specific stories you'd like to include..."
                              className="min-h-32"
                              data-testid="textarea-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full sm:w-auto px-8 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-inquiry"
                    >
                      Send Inquiry
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
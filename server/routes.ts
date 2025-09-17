import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your inquiry! We'll contact you within 24 hours.",
        id: inquiry.id
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Please check your information and try again." 
      });
    }
  });

  // Get all contact inquiries (for internal use)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error fetching inquiries" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

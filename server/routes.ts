import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { emailService } from "./email";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const formData = contactFormSchema.parse(req.body);
      
      // Send emails
      await emailService.sendContactForm(formData);
      await emailService.sendConfirmationEmail(formData);
      
      res.json({ 
        success: true, 
        message: "Nachricht erfolgreich gesendet. Sie erhalten eine Bestätigung per E-Mail." 
      });
    } catch (error) {
      console.error("Fehler beim Verarbeiten der Kontaktanfrage:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Ungültige Eingabedaten",
          errors: error.errors
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

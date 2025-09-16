import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich").max(100, "Name ist zu lang"),
  email: z.string().email("Ungültige E-Mail-Adresse").max(255, "E-Mail ist zu lang"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein").max(5000, "Nachricht ist zu lang"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

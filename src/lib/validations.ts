import { z } from "zod";

// Email form schema (for LandingFinalCTA)
export const emailFormSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

export type EmailFormData = z.infer<typeof emailFormSchema>;

// Hero form schema (for LandingHero)
export const heroFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  company: z
    .string()
    .min(1, "Company name is required")
    .min(2, "Company name must be at least 2 characters"),
  website: z.string().optional(),
});

export type HeroFormData = z.infer<typeof heroFormSchema>;

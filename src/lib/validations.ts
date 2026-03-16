import * as z from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
});

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be at most 100 characters."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters.")
    .max(200, "Subject must be at most 200 characters."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be at most 2000 characters."),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
export type ContactFormValues = z.infer<typeof contactSchema>;

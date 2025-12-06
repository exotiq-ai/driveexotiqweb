import * as z from 'zod';

export const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  currentCity: z.string().min(2, 'Current city is required'),
  cityOfInterest: z.enum(['Denver', 'Scottsdale', 'Miami', 'Other'], {
    errorMap: () => ({ message: 'Please select a city' }),
  }),
  briefIntro: z.string().min(10, 'Please tell us why you want to join (minimum 10 characters)').max(200, 'Maximum 200 characters'),
  inviteCode: z.string().optional(),
  agreedToTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms',
  }),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

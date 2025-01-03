import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address',
    }),
    password: z.string().min(1, {
        message: "Please enter your password",
    }),

    code: z.optional(z.string()),
})

export const SignupSchema = z.object({
    firstName: z.string().min(3, {
        message: "Enter your first name",
    }),
    lastName: z.string().min(3, {
        message: "Enter your last name",
    }),
    email: z.string().email({
        message: 'Please enter a valid email address',
    }),
    password: z.string().min(8, {
        message: "Minimum 8 characters",
    }),
    confirmPassword: z.string().min(8, {
        message: "Please confirm your password",
    }),
});
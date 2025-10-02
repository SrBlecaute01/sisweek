import { z } from 'zod';

export const registrationSchema = z.object({
  name: z.string().min(3, "Precisa possuir no mínimo 3 caracteres."),
  email: z.email("Precisa ser um e-mail válido."),
  password: z.string()
      .min(8, "Precisa possuir no mínimo 8 caracteres.")
      .max(16, "Não pode possuir mais de 16 caracteres."),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
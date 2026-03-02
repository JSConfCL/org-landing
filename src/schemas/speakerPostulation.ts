import { z } from 'zod';

export const speakerPostulationSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Debe ser un correo electrónico válido.' }),
  evento: z.string().optional(),
  titulo: z.string().min(5, { message: 'El título de la charla debe tener al menos 5 caracteres.' }),
  descripcion: z.string().min(20, { message: 'La descripción debe tener al menos 20 caracteres para detallar tu charla.' }),
});

// Inferimos el tipo de TypeScript automáticamente desde el esquema.
// Esto es súper útil para tener autocompletado exacto en los formularios.
export type SpeakerPostulationFormValues = z.infer<typeof speakerPostulationSchema>;

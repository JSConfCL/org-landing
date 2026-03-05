'use server';

import { Resend } from 'resend';
import { speakerPostulationSchema } from '@/schemas/speakerPostulation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendSpeakerPostulation(prevState: any, formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData.entries());
    
    // Validación con Zod
    const validatedFields = speakerPostulationSchema.safeParse(rawData);

    if (!validatedFields.success) {
      // Extraemos el primer error para mostrarlo al usuario de forma amigable
      const firstError = validatedFields.error?.issues[0]?.message || 'Error de validación en el formulario.';
      return { success: false, message: firstError };
    }

    const { nombre, email, evento, titulo, descripcion } = validatedFields.data;

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_tuclave') {
      return { 
        success: false, 
        message: 'Aún no has configurado tu RESEND_API_KEY en .env.local. Revisar el plan para instrucciones.' 
      };
    }

    const { data, error } = await resend.emails.send({
      from: 'JSChile Website <onboarding@resend.dev>', // Temporary Resend testing domain (change when domain is verified)
      to: ['armando@jschile.org'],
      subject: `Nueva Propuesta de Charla: ${titulo} - ${nombre}`,
      html: `
        <h2>Nueva postulación recibida para Speaker</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Evento de interés:</strong> ${evento || 'No especificado'}</p>
        <br/>
        <h3>Título de la Charla:</h3>
        <p>${titulo}</p>
        <h3>Descripción / Resumen:</h3>
        <p style="white-space: pre-wrap;">${descripcion}</p>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return { success: false, message: 'Ocurrió un error al enviar el correo a través de Resend.' };
    }

    return { success: true, message: '¡Propuesta enviada con éxito! Nos pondremos en contacto pronto.' };
    
  } catch (err: unknown) {
    console.error('Action error:', err);
    return { success: false, message: 'Error interno del servidor.' };
  }
}

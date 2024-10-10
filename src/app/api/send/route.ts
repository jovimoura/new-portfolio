import { ContactEmail } from '@/components/emails/contact-email';
import { Resend } from 'resend';
import { FormValidator } from '@/lib/validators/form';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, phone, message } = FormValidator.parse(body);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['joaovictors.mouraa@gmail.com'],
      subject: 'Message from John Portfolio',
      react: ContactEmail({ name, email, phone, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  }  catch (error) {
    if (error instanceof z.ZodError) {
        return new NextResponse("Invalid request data passed", { status: 400 });
    }

    return new NextResponse("Unable to send message", { status: 500 });
}
}

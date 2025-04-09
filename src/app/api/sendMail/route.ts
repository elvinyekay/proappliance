import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, phone, email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Gmail
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'proapplianceexpress@gmail.com',
      subject: 'Yeni Müraciət',
      html: `
        <h3>Yeni Müraciət:</h3>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log('Mail error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

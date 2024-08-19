// pages/api/send-email.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  email: string;
  projectDetails: string;
  projects: string[];
  budget: string | null;
}

export  async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
   
    const { name, email, projectDetails, projects, budget }: FormData = await req.json()

    console.log({
      name, email, projectDetails, projects, budget
    })
    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your preferred email service
      auth: {
        user: process.env.EMAIL_USERNAME, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or app password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_RECEIVER, // The recipient's email address
        subject: `New Project Received from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Projects: ${projects}
          Budget: ${budget}
          Project Details: ${projectDetails}
        `,
      });
      return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ message: 'Error sending email. Please try again later.' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });

  }
}

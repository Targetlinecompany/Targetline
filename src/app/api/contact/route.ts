import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import prisma from '@/lib/prismaDB';

import adminEmailTemplate from '@/utils/admin-sendinfo-template';
import customerEmailTemplate from '@/utils/customer-email-template';

interface EmailRequestBody {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  budget: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { fullName, email, company, phone, message, budget }: EmailRequestBody =
    await request.json();

  if (!fullName || !email || !company || !phone || !message || !budget) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const transport: Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const adminEmails = process.env.ADMIN_EMAILS!.split(',');

  const adminMailOptions = (adminEmail: string): Mail.Options => ({
    from: process.env.EMAIL,
    to: adminEmail,
    subject: `Message from ${fullName} (${email})`,
    html: adminEmailTemplate(fullName, email, company, phone, message, budget),
  });

  const customerMailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Thank you for contacting us!',
    html: customerEmailTemplate(fullName),
  };

  const sendMail = (mailOptions: Mail.Options): Promise<string> => {
    return new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, (err) => {
        if (err) {
          reject(err.message);
        } else {
          resolve('Email sent');
        }
      });
    });
  };

  try {
    // Send emails to all admins
    await Promise.all(
      adminEmails.map((email) => sendMail(adminMailOptions(email)))
    );
    // Send email to the customer
    await sendMail(customerMailOptions);

    await prisma.user.create({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      fullName,
      email,
      company,
      phone,
      message,
      budget,
    });

    return NextResponse.json({ message: 'Emails sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

'use client';
import emailjs from '@emailjs/browser';

export const sendEmail = async ({ name, email, message }) => {
  try {
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    console.log('SUCCESS!', response.status, response.text);
    return { success: true };
  } catch (error) {
    console.error('FAILED...', error);
    return { success: false, error };
  }
};

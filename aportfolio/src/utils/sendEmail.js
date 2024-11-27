import emailjs from "@emailjs/browser";

export const sendEmail = async (form) => {
  try {
    const response = await emailjs.send(
      process.env.VITE_APP_EMAILJS_SERVICE_ID,
      process.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Aman",
        from_email: form.email,
        to_email: "amankwork2005@gmail.com",
        message: form.message,
      },
      process.env.VITE_APP_EMAILJS_PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Email sending failed" };
  }
};
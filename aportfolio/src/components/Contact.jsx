import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas"; // Assuming EarthCanvas is your 3D canvas
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Optimized onChange handler using useCallback to debounce re-renders
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);

  // Optimized async form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser submission
    setLoading(true); // Show loading state

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Aman",
          from_email: form.email,
          to_email: "amankwork2005@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      alert("Thank you! I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="text-white font-medium mb-4">Get in touch</p>
        <h3 className="text-white text-3xl font-bold">Contact Me</h3>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* Name Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          {/* Email Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          {/* Message Input */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth Canvas Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <React.Suspense fallback={<div>Loading 3D Model...</div>}>
          <EarthCanvas />
        </React.Suspense>
      </motion.div>
    </div>
  );
};

export default Contact;

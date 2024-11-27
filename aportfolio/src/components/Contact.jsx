import React, { useState, useCallback, Suspense } from "react";
import { sendEmail } from "../utils/sendEmail";
import { motion } from "framer-motion";

import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { memo } from "react";

const Contact = memo(() => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);
 // Import the utility function

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  
  const result = await sendEmail(form);

  if (result.success) {
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  } else {
    alert(result.error || "Something went wrong.");
  }

  setLoading(false);
};


  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="text-white font-medium mb-4">Get in touch</p>
        <h3 className="text-white text-3xl font-bold">Contact Me</h3>
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
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
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Suspense fallback={<div>Loading 3D Model...</div>}>
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </div>
  );
});

export default Contact;

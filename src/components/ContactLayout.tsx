"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/contact", formData);
      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ email: "", name: "", message: "" });
      } else {
        toast.error("Something went wrong.");
      }
    } catch {
      toast.error("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center ">
      <h1 className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight p-8">
        Let&apos;s create something
        <span className="text-[#8d4aea]"> Amazing</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md mx-auto p-4 border rounded-xl "
      >
        <h2 className="text-xl font-semibold text-white">Contact Me</h2>
        <Input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="text-white"
        />
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="text-white"
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="text-white"
        />
        <Button
          type="submit"
          disabled={loading}
          className="bg-[#8B5CF6] cursor-pointer text-white px-5 py-2 text-base rounded hover:bg-[#7C3AED] mt-6 font-bold"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}

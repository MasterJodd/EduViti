"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FAQs } from "@/data/faq";
import Btn from "@/app/components/btn";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

  return (
    <section className="w-screen bg-white flex justify-center py-16">
      <div className="md:w-1/2 min-h-screen mx-auto flex flex-col text-center space-y-4">
        <h1 className="text-black text-5xl font-black">Join Our Team</h1>
        <h2 className="mx-4">
          Become a part of something bigger! Help students succeed and share
          your knowledge with a growing community.
        </h2>
        <div className="w-5/6 mx-auto space-y-4">
          {FAQs.map((faq) => (
            <Accordion type="single" collapsible key={faq.id}>
              <AccordionItem value={`item-${faq.id}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        {/* ------------Contact------------ */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="email"
            placeholder="Your Email\Phone no."
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="flex flex-col sm:flex-row sm:justify-evenly w-5/6 mx-auto sm:space-y-0 space-y-3">
            <span className="sm:w-1/2 sm:text-start">
              <p className="text-sm text-gray-500">
                We will answer your questions via Email/Discord/Whatsapp within
                48 hours.
              </p>
            </span>
            <Btn className="mx-auto" displayText="Start Contributing" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
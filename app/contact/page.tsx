"use client";
import React from "react";
import { LuPhoneOutgoing } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { LiaLinkedin } from "react-icons/lia";
import { Coffee, Sparkles } from "lucide-react";

const medium = [
  {
    icon: MdEmail,
    title: "Email Me",
    description: "adishreekarthik@gmail.com",
    link: "mailto:adishreekarthik@gmail.com",
    category: "Gmail",
  },
  {
    icon: LuPhoneOutgoing,
    title: "Call Me",
    description: "6364858213",
    link: "tel:6364858213",
    category: "IN",
  },
  {
    icon: LiaLinkedin,
    title: "Connect with Me",
    description: "Adishree",
    link: "https://www.linkedin.com/in/adishreekarthick/",
    category: "LinkedIn",
  },
];

const ContactPage = () => {
  return (
    <div className="flex flex-col animate-fade-in">
      {/* Header Section */}
      <div className="pl-6 md:pl-90 mt-10 mb-8">
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h1>
          <Sparkles className="w-6 h-6 text-pink-500 animate-pulse" />
        </div>
        <p className="text-gray-600 text-base md:text-lg mt-2">
          I&apos;m always up for a chat or coffee{" "}
          <Coffee className="inline-block w-5 h-5 text-purple-500 animate-bounce" />
          ! Feel free to reach out.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="pl-6 md:pl-90">
        <HoverEffect items={medium} />
      </div>
    </div>
  );
};

export default ContactPage;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { site } from "@/lib/site";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: <FaEnvelope />, title: "Email", description: site.email, href: `mailto:${site.email}` },
  { icon: <FaMapMarkerAlt />, title: "Location", description: site.location },
];


const topics = [
  "Werkstudent position",
  "Full-time position",
  "Internship / thesis",
  "Other",
];

const Contact = () => {
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState("idle"); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.topic = topic;

  
    if (!site.formspreeId) {
      const body = `${data.message}\n\n— ${data.firstname} ${data.lastname}\n${data.email}\n${data.phone || ""}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        topic || "Contact via portfolio"
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
      setTopic("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Looking for a Werkstudent or a full-stack developer for your team?
                Send me a message and I&apos;ll get back to you within 24 hours.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="First name" required />
                <Input name="lastname" type="text" placeholder="Last name" required />
                <Input name="email" type="email" placeholder="Email address" required />
                <Input name="phone" type="tel" placeholder="Phone number (optional)" />
              </div>
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="What is it about?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {topics.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              <div className="flex items-center justify-end gap-4">
                {status === "sent" && <p className="text-accent">Thanks! Your message was sent.</p>}
                {status === "error" && (
                  <p className="text-red-400">Something went wrong – please email me directly.</p>
                )}
                <Button type="submit" size="md" className="max-w-40" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send message"}
                </Button>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center order-1 xl:order-none mb-8">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                const content = (
                  <>
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </>
                );
                return (
                  <li key={index}>
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-6 hover:text-accent transition-all">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-6">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

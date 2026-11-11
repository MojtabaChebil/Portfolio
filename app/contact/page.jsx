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
import { useLang } from "@/components/LanguageProvider";

// Keys of the topics; the labels are in lib/dictionaries.js (contact.topics)
const topicKeys = ["werkstudent", "fulltime", "internship", "other"];

const Contact = () => {
  const { t: dict } = useLang();
  const t = dict.contact;
  const info = [
    { icon: <FaPhoneAlt />, title: t.phoneLabel, description: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: <FaEnvelope />, title: t.emailLabel, description: site.email, href: `mailto:${site.email}` },
    { icon: <FaMapMarkerAlt />, title: t.locationLabel, description: dict.site.location },
  ];
  const [topic, setTopic] = useState(""); // topic key, e.g. "werkstudent"
  const [status, setStatus] = useState("idle"); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const topicLabel = topic ? t.topics[topic] : "";
    data.topic = topicLabel;

  
    if (!site.formspreeId) {
      const body = `${data.message}\n\n— ${data.firstname} ${data.lastname}\n${data.email}\n${data.phone || ""}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        topicLabel || t.defaultSubject
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
              <h3 className="text-4xl text-accent">{t.title}</h3>
              <p className="text-white/60">{t.text}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder={t.firstname} required />
                <Input name="lastname" type="text" placeholder={t.lastname} required />
                <Input name="email" type="email" placeholder={t.email} required />
                <Input name="phone" type="tel" placeholder={t.phone} />
              </div>
              <Select value={topic} onValueChange={setTopic}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t.topicPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {topicKeys.map((key) => (
                      <SelectItem key={key} value={key}>
                        {t.topics[key]}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder={t.message}
                required
              />
              <div className="flex items-center justify-end gap-4">
                {status === "sent" && <p className="text-accent">{t.sent}</p>}
                {status === "error" && (
                  <p className="text-red-400">{t.error}</p>
                )}
                <Button type="submit" size="md" className="max-w-40" disabled={status === "sending"}>
                  {status === "sending" ? t.sending : t.submit}
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

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// ✅ Stable icons
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function MapleSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Healthcare");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const tabs = ["Healthcare", "Finance", "Logistics"];

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-gray-50 to-white">

      {/* NAVBAR */}
      <header className="fixed w-full bg-white/70 backdrop-blur-lg border-b z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Maple Korporation" className="h-10 w-auto" />
            <span className="font-extrabold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Maple Korporation
            </span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {["about", "solutions", "contact"].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-blue-600">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white px-6 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Transforming Healthcare with Intelligent AI
        </motion.h1>

        <p className="max-w-2xl text-lg opacity-90 mb-8">
          Delivering premium medical and dental equipment combined with AI-driven intelligence to power next-generation enterprises.
        </p>

        <div className="flex gap-4">
          <Button className="bg-white text-blue-700">Explore Products</Button>
          <Button className="border border-white text-white bg-white/10 hover:bg-white/20">
            AI Solutions
          </Button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Us
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto">
           Maple Korporation is a trusted provider of high-quality medical and dental equipment, delivering precision-engineered solutions to clinics and hospitals. Alongside our healthcare expertise, we are building intelligent AI systems that enhance efficiency, streamline operations, and unlock data-driven decision-making.
        </p>

        {/* Vision + Mission */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2 text-blue-600">Our Vision</h3>
              <p className="text-gray-600">
                 To become a global leader at the intersection of healthcare and artificial intelligence, driving meaningful innovation that improves lives, enhances clinical outcomes, and empowers businesses worldwide.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2 text-purple-600">Our Mission</h3>
              <p className="text-gray-600">
                To deliver reliable medical and dental equipment while building scalable AI-powered solutions that enable smarter operations, faster decisions, and sustainable growth for our partners.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-100">
        <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Our Values
        </h3>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Integrity",
              desc: "We operate with honesty, transparency, and accountability in every interaction.",
            },
            {
              title: "Patient-Centric",
              desc: "We design solutions that prioritize better care, better outcomes, and better experiences.",
            },
            {
              title: "Innovation",
              desc: "We continuously push boundaries using AI and technology to solve real-world challenges.",
            },
            {
              title: "Excellence",
              desc: "We are committed to delivering superior quality in every product and solution we provide.",
            },
          ].map((item) => (
            <Card key={item.title} className="hover:scale-105 transition">
              <CardContent className="p-6">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-600 text-sm mt-2">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="py-24 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Industry Solutions
        </h2>

        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">{activeTab}</h3>
          <p className="text-gray-600">
            AI-powered solutions for {activeTab.toLowerCase()} industry.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <MdEmail className="text-green-600 text-xl" />
              <div>
                <p>Email</p>
                <p className="text-gray-500">info@maplekorporation.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <MdPhone className="text-green-600 text-xl" />
              <div>
                <p>Phone</p>
                <p className="text-gray-500">+91-9831028752</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <MdLocationOn className="text-green-600 text-xl" />
              <div>
                <p>Office</p>
                <p className="text-gray-500">5/1, Akrur Dutt Lane,</p>
                <p className="text-gray-500">Kolkata - 700012,</p>
                <p className="text-gray-500">India</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <input className="w-full p-3 border rounded" placeholder="Name" />
            <input className="w-full p-3 border rounded" placeholder="Email" />
            <textarea className="w-full p-3 border rounded" placeholder="Message" />
            <Button className="w-full bg-blue-600">Send Message</Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold">Maple Corporation</h3>
            <p className="text-sm mt-2">AI-driven healthcare solutions</p>

            <div className="flex gap-4 mt-4 text-lg">
              <FaLinkedin />
              <FaTwitter />
              <FaGithub />
              <MdEmail />
            </div>
          </div>

          <div>
            <h4 className="text-white">Company</h4>
            <p>About</p>
          </div>

          <div>
            <h4 className="text-white">Solutions</h4>
            <p>Healthcare</p>
            <p>Finance</p>
          </div>

          <div>
            <h4 className="text-white">Legal</h4>
            <p>Privacy</p>
          </div>
        </div>

        <div className="text-center mt-8 text-sm">
          © {new Date().getFullYear()} Maple Corporation
        </div>
      </footer>
    </div>
  );
}
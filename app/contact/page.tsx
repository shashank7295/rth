"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Contact Us</h1>
      <p className="text-yellow-200/80 mb-8">
        We'd love to hear from you. Fill out the form and our team will respond shortly.
      </p>

      <form action="https://formspree.io/f/xpwjlolz" method="POST" className="space-y-6 bg-black/60 border border-yellow-600/30 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-yellow-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 bg-black/50 border border-yellow-600/30 rounded-lg text-yellow-100 placeholder-yellow-300/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-yellow-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-black/50 border border-yellow-600/30 rounded-lg text-yellow-100 placeholder-yellow-300/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-yellow-300 mb-1">Message</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="w-full px-3 py-2 bg-black/50 border border-yellow-600/30 rounded-lg text-yellow-100 placeholder-yellow-300/60 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
            placeholder="How can we help?"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Send Message
        </button>
      </form>

      <section className="mt-10 text-yellow-200/70">
        <h2 className="text-xl font-semibold text-yellow-400 mb-3">Other ways to reach us</h2>
        <ul className="space-y-2 text-sm">
          <li className="font-semibold text-base md:text-lg">
            <span className="text-yellow-300">Email:</span> {" "}
            <a
              href="mailto:Itrayaperfumerskannauj@gmail.com"
              className="underline hover:text-yellow-300"
            >
              Itrayaperfumerskannauj@gmail.com
            </a>
          </li>
          <li className="font-semibold text-base md:text-lg">
            <span className="text-yellow-300">Phone:</span> {" "}
            <a
              href="tel:+919454540030"
              className="underline hover:text-yellow-300"
            >
              +91 9454540030
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

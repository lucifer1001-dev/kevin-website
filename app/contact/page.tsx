"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      value: "kgirshman329@gmail.com",
      href: "mailto:kgirshman329@gmail.com",
      color: "from-blue-600 to-cyan-600",
      darkColor: "from-blue-400 to-cyan-400",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      value: "+1 (713) 938-9113",
      href: "tel:+17139389113",
      color: "from-cyan-600 to-teal-600",
      darkColor: "from-cyan-400 to-teal-400",
    },
  ];

  const availability = [
    {
      title: "Full-Time Opportunities",
      description: "Open to senior or lead engineering roles",
      icon: "💼",
    },
    {
      title: "Consulting Projects",
      description: "Available for short-term engagements",
      icon: "🚀",
    },
    {
      title: "Technical Mentorship",
      description: "Happy to discuss career guidance",
      icon: "🎓",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0806]">
      {/* Hero Section - Contact Page Unique Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0806] via-[#1a1410] to-[#2a1f1a] py-20 sm:py-32">
        {/* Contact Page Unique Moving Background - Warm Yellow/Amber Theme */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating orbs - Contact page style */}
          <div className="absolute top-0 right-0 h-[950px] w-[950px] rounded-full bg-gradient-to-br from-yellow-600/38 via-amber-600/30 to-orange-600/38 blur-3xl animate-float-idle" />
          <div className="absolute bottom-0 left-0 h-[900px] w-[900px] rounded-full bg-gradient-to-tr from-orange-600/35 via-amber-600/28 to-yellow-600/35 blur-3xl animate-float-idle animation-delay-800" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-amber-600/33 to-yellow-600/33 blur-3xl animate-breathe" />
          <div className="absolute top-1/4 left-1/3 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-orange-600/28 to-amber-700/28 blur-3xl animate-drift" />
          <div className="absolute bottom-1/3 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-yellow-600/26 to-amber-600/26 blur-3xl animate-drift animation-delay-700" />
          <div className="absolute top-3/4 left-2/3 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-amber-600/24 to-orange-600/24 blur-3xl animate-drift animation-delay-1000" />

          {/* Diagonal flowing waves - unique to Contact */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-600/28 to-transparent rotate-12 animate-flow" />
            <div className="absolute top-2/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600/23 to-transparent -rotate-12 animate-flow animation-delay-500" />
            <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600/25 to-transparent rotate-6 animate-flow animation-delay-1000" />
          </div>

          {/* Connection lines pattern - unique to Contact page */}
          <div className="absolute inset-0">
            <svg
              className="absolute inset-0 w-full h-full opacity-25"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line
                x1="20"
                y1="20"
                x2="80"
                y2="80"
                stroke="url(#gradient1)"
                strokeWidth="0.5"
                className="animate-pulse"
              />
              <line
                x1="80"
                y1="20"
                x2="20"
                y2="80"
                stroke="url(#gradient2)"
                strokeWidth="0.5"
                className="animate-pulse animation-delay-500"
              />
              <line
                x1="50"
                y1="0"
                x2="50"
                y2="100"
                stroke="url(#gradient3)"
                strokeWidth="0.5"
                className="animate-pulse animation-delay-1000"
              />
              <line
                x1="0"
                y1="50"
                x2="100"
                y2="50"
                stroke="url(#gradient4)"
                strokeWidth="0.5"
                className="animate-pulse animation-delay-700"
              />
              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#d97706" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient
                  id="gradient3"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient
                  id="gradient4"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Rotating gradient rings */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border-2 border-yellow-600/28 animate-rotate"
            style={{ animationDuration: "34s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-amber-600/24 animate-rotate"
            style={{ animationDuration: "44s", animationDirection: "reverse" }}
          />

          {/* Animated light beams */}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-yellow-600/38 to-transparent animate-light-ray" />
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-amber-600/35 to-transparent animate-light-ray animation-delay-500" />
          <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-orange-600/35 to-transparent animate-light-ray animation-delay-1000" />

          {/* Flowing particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-52 h-52 bg-yellow-600/16 rounded-full blur-2xl animate-flow" />
            <div className="absolute bottom-1/3 left-0 w-60 h-60 bg-amber-600/16 rounded-full blur-2xl animate-flow animation-delay-700" />
            <div className="absolute top-2/3 right-1/4 w-56 h-56 bg-orange-600/14 rounded-full blur-2xl animate-flow animation-delay-300" />
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-yellow-600/12 rounded-full blur-2xl animate-flow animation-delay-1000" />
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b25_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b25_1px,transparent_1px)] bg-[size:30px_30px] opacity-75 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/15 via-amber-600/13 to-orange-600/15 animate-gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-600/13 via-amber-600/11 to-yellow-600/13 animate-gradient-wave" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fadeInUp opacity-0">
              <h1
                className="text-4xl font-bold tracking-tight text-amber-50 sm:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "var(--font-playfair)",
                  letterSpacing: "-0.03em",
                  fontWeight: 700,
                }}
              >
                Get in Touch
              </h1>
              <p
                className="mt-6 text-xl leading-relaxed text-amber-200"
                style={{
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "-0.01em",
                  fontWeight: 400,
                }}
              >
                I&apos;m always interested in hearing about new opportunities,
                exciting projects, or just connecting with fellow engineers.
                Let&apos;s talk!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-b from-[#0a0806] to-[#1a1410] overflow-hidden relative">
        {/* Moving background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-amber-600/15 to-transparent rounded-full blur-3xl animate-drift" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-orange-600/15 to-transparent rounded-full blur-3xl animate-drift animation-delay-500" />
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.href}
                className="group relative overflow-hidden rounded-2xl border border-amber-900/30 bg-gradient-to-br from-[#2a1f1a] to-[#1a1410] p-8 text-center shadow-md transition-all hover:shadow-2xl hover:scale-105"
                style={{
                  animation: "fadeInUp 0.6s ease-out forwards",
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                }}
              >
                <div
                  className={`mx-auto inline-flex rounded-full bg-gradient-to-r ${method.color} p-4 text-white transition-all group-hover:scale-110`}
                >
                  {method.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-amber-50">
                  {method.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-amber-400 break-words">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gradient-to-b from-[#1a1410] to-[#0a0806] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2
                className="text-3xl font-bold tracking-tight text-amber-50 sm:text-4xl"
                style={{
                  fontFamily: "var(--font-playfair)",
                  letterSpacing: "-0.02em",
                  fontWeight: 700,
                }}
              >
                Send a Message
              </h2>
              <p className="mt-4 text-lg text-amber-300/80">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-amber-50"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded-lg border border-amber-800/50 bg-[#2a1f1a] px-4 py-3 text-amber-100 placeholder-amber-400/50 shadow-sm transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-amber-50"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded-lg border border-amber-800/50 bg-[#2a1f1a] px-4 py-3 text-amber-100 placeholder-amber-400/50 shadow-sm transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-amber-50"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded-lg border border-amber-800/50 bg-[#2a1f1a] px-4 py-3 text-amber-100 placeholder-amber-400/50 shadow-sm transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-amber-50"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2 block w-full rounded-lg border border-amber-800/50 bg-[#2a1f1a] px-4 py-3 text-amber-100 placeholder-amber-400/50 shadow-sm transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {status === "success" && (
                <div className="rounded-lg bg-green-950/50 border border-green-700/50 p-4 text-green-300">
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-amber-700 hover:to-orange-700 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="h-5 w-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-20 bg-gradient-to-b from-[#0a0806] to-[#1a1410]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-amber-50 sm:text-4xl"
              style={{
                fontFamily: "var(--font-playfair)",
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              Currently Available For
            </h2>
            <p className="mt-4 text-lg text-amber-300/80">
              What I&apos;m looking for in my next opportunity
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-3">
            {availability.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-amber-900/30 bg-gradient-to-br from-[#2a1f1a] to-[#1a1410] p-8 text-center shadow-sm transition-all hover:shadow-lg"
                style={{
                  animation: "fadeInUp 0.6s ease-out forwards",
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-amber-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-amber-300/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-amber-700 to-orange-700 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{
                fontFamily: "var(--font-playfair)",
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              Let&apos;s Build Something Great Together
            </h2>
            <p className="mt-4 text-lg text-amber-100">
              Whether you have a project in mind or just want to chat about
              tech, I&apos;d love to hear from you.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:kgirshman329@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-amber-900 shadow-lg transition-all hover:bg-amber-50 hover:shadow-xl hover:scale-105"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Me
              </a>
              <a
                href="tel:+17139389113"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-amber-900"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

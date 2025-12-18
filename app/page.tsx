'use client';

import Link from 'next/link';
import FloatingSkills from './components/FloatingSkills';

export default function Home() {
  const highlights = [
    {
      title: '12+ Years',
      description: 'Building Production Systems',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: '40% Improvement',
      description: 'Query Efficiency',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Full-Stack',
      description: 'React, TypeScript, WebGL, WebAssembly',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'AI-Driven Systems',
      description: 'Real-time Collaboration & Analytics',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  const recentWork = [
    {
      company: 'Restb.ai',
      role: 'Senior Software Engineer',
      period: 'Nov 2023 – Oct 2025',
      description: 'Frontend-focused engineer delivering AI-powered property-intelligence interfaces and scalable ingestion infrastructure.',
      color: 'from-blue-600 to-indigo-600',
      darkColor: 'from-amber-600 to-orange-600',
    },
    {
      company: 'Figma',
      role: 'Senior Frontend Engineer',
      period: 'Apr 2019 – Nov 2023',
      description: 'Owned major parts of the rendering, performance, and collaboration stack for Figma’s core product.',
      color: 'from-purple-600 to-pink-600',
      darkColor: 'from-orange-600 to-amber-700',
    },
    {
      company: 'Dataiku',
      role: 'Senior Frontend / Full-Stack Engineer',
      period: 'Jan 2016 – Mar 2019',
      description: 'Built interactive UIs and backend integrations powering Dataiku’s machine-learning and analytics platform.',
      color: 'from-teal-600 to-cyan-600',
      darkColor: 'from-amber-700 to-yellow-700',
    },
    {
      company: 'Google',
      role: 'Software Engineer',
      period: 'Apr 2013 – Dec 2016',
      description: 'Built advertiser dashboards and backend services supporting high-traffic Google Ads workflows.',
      color: 'from-teal-600 to-cyan-600',
      darkColor: 'from-amber-700 to-yellow-700',
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Floating Skills Background */}
      <FloatingSkills />
      
      {/* Hero Section - Home Page Unique Background */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#0a0806] via-[#1a1410] to-[#2a1f1a] overflow-hidden">
        {/* Home Page Unique Moving Background - Warm Amber/Orange Theme */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating orbs - Home page style */}
          <div className="absolute top-0 right-0 h-[900px] w-[900px] rounded-full bg-gradient-to-br from-amber-600/30 to-orange-600/30 blur-3xl animate-float-idle" />
          <div className="absolute bottom-0 left-0 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-orange-600/28 to-amber-600/28 blur-3xl animate-float-idle animation-delay-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-amber-600/25 to-yellow-600/25 blur-3xl animate-breathe" />
          <div className="absolute top-1/4 left-1/3 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-orange-600/20 to-amber-700/20 blur-3xl animate-drift" />
          <div className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-yellow-600/18 to-amber-600/18 blur-3xl animate-drift animation-delay-700" />
          
          {/* Diagonal flowing waves - unique to home */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600/20 to-transparent rotate-12 animate-flow" />
            <div className="absolute top-2/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600/15 to-transparent -rotate-12 animate-flow animation-delay-500" />
            <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600/18 to-transparent rotate-6 animate-flow animation-delay-1000" />
          </div>
          
          {/* Animated light beams */}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-amber-600/35 to-transparent animate-light-ray" />
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-orange-600/30 to-transparent animate-light-ray animation-delay-500" />
          <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-amber-600/25 to-transparent animate-light-ray animation-delay-1000" />
          
          {/* Rotating gradient rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border-2 border-amber-600/25 animate-rotate" style={{ animationDuration: '25s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-orange-600/20 animate-rotate" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
        </div>

        {/* Animated Grid Pattern - Home page specific */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4a57425_1px,transparent_1px),linear-gradient(to_bottom,#d4a57425_1px,transparent_1px)] bg-[size:28px_28px] opacity-70 animate-pulse" />
        
        {/* Multiple Moving gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-orange-600/10 animate-gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-600/8 via-transparent to-amber-600/8 animate-gradient-wave" />
        
        {/* Flowing particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-40 h-40 bg-amber-600/12 rounded-full blur-2xl animate-flow" />
          <div className="absolute top-3/4 right-0 w-48 h-48 bg-orange-600/12 rounded-full blur-2xl animate-flow animation-delay-500" />
          <div className="absolute bottom-1/4 left-1/2 w-44 h-44 bg-yellow-600/10 rounded-full blur-2xl animate-flow animation-delay-1000" />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Main Heading */}
            <div className="animate-fadeInUp opacity-0">
              <div className="mb-6 inline-block">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-800/50 bg-gradient-to-r from-amber-950/50 to-orange-950/50 px-4 py-2 text-sm font-semibold text-amber-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                  </span>
                  Available for opportunities
                </span>
              </div>
              
              <h1 className="relative text-6xl font-bold tracking-tight text-amber-50 sm:text-7xl lg:text-8xl">
                <span className="relative inline-block">
                  Kevin Girshman
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-amber-500 to-orange-500" />
                </span>
              </h1>
              
              <div className="mt-8 relative">
                <h2 className="text-3xl font-semibold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent animate-gradient sm:text-4xl">
                  Senior Full-Stack Engineer
                </h2>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-amber-500/20 blur-xl animate-pulse" />
              </div>
            </div>
            
            <div className="animate-fadeInUp animation-delay-200 mt-10 opacity-0">
              <p className="text-xl leading-relaxed text-amber-100 sm:text-2xl">
                Full‑stack engineer with <span className="font-bold text-amber-400">12+ years</span> shipping fast, reliable products{' '}
                from polished interfaces down to data and infrastructure.
              </p>
            </div>

            <div className="animate-fadeInUp animation-delay-400 mt-12 opacity-0 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-amber-900/50 transition-all hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-700 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative">Get in Touch</span>
                <svg className="relative h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/experience"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-amber-400 bg-transparent px-10 py-5 text-lg font-semibold text-amber-200 transition-all hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:border-transparent hover:scale-105"
              >
                View Experience
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounceIn animation-delay-800 mt-20 opacity-0">
              <div className="inline-flex flex-col items-center gap-2 text-amber-400/70">
                <span className="text-sm font-medium">Scroll to explore</span>
                <svg className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative bg-gradient-to-b from-[#1a1410] to-[#0a0806] py-24 overflow-hidden">
        {/* Enhanced Moving background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-amber-600/15 to-transparent rounded-full blur-3xl animate-drift" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-orange-600/15 to-transparent rounded-full blur-3xl animate-drift animation-delay-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-yellow-600/10 to-amber-600/10 rounded-full blur-3xl animate-breathe" />
          
          {/* Animated wave patterns */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-amber-600/5 to-transparent animate-gradient-wave" />
        </div>
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-scaleIn opacity-0">
              <span className="inline-block rounded-full bg-gradient-to-r from-amber-950/50 to-orange-950/50 px-4 py-2 text-sm font-semibold text-amber-300">
                Impact & Achievements
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-amber-50 sm:text-5xl">
                Results That Matter
              </h2>
              <p className="mt-4 text-lg text-amber-300/80">
                Delivering measurable impact across engineering initiatives
              </p>
            </div>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="group perspective-card relative overflow-hidden rounded-3xl border border-amber-900/30 bg-gradient-to-br from-[#2a1f1a] to-[#1a1410] p-8 text-center shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:-translate-y-2"
                style={{
                  animation: 'bounceIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 opacity-0 transition-opacity group-hover:opacity-20" />
                
                <div className="relative">
                  <div className="mx-auto inline-flex rounded-2xl bg-gradient-to-br from-amber-900/50 to-orange-900/50 p-4 text-amber-400 transition-all group-hover:scale-110 group-hover:rotate-6 animate-breathe">
                    {highlight.icon}
                  </div>
                  <div className="mt-6">
                    <p className="text-3xl font-bold text-amber-100">{highlight.title}</p>
                    <p className="mt-3 text-sm font-medium text-amber-300/70">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0806] via-[#1a1410]/50 to-[#2a1f1a]/50 py-24">
        {/* Enhanced Decorative Elements - always moving */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-600/15 blur-3xl animate-float-idle" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl animate-float-idle animation-delay-700" />
          <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-yellow-600/12 blur-3xl animate-drift animation-delay-300" />
          <div className="absolute top-1/4 right-1/3 h-80 w-80 rounded-full bg-amber-700/10 blur-3xl animate-float-idle animation-delay-1000" />
          
          {/* Rotating gradient circles */}
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full border-2 border-amber-600/20 animate-rotate" style={{ animationDuration: '15s' }} />
          <div className="absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full border-2 border-orange-600/15 animate-rotate" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fadeInUp opacity-0">
              <span className="inline-block rounded-full bg-gradient-to-r from-amber-950/50 to-orange-950/50 px-4 py-2 text-sm font-semibold text-amber-300">
                Career Journey
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-amber-50 sm:text-5xl">
                Recent Work
              </h2>
              <p className="mt-4 text-lg text-amber-300/80">
                Building cutting-edge solutions at leading tech companies
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-5xl space-y-8">
            {recentWork.map((work, index) => (
              <div
                key={work.company}
                className="group relative overflow-hidden rounded-3xl border border-amber-900/30 bg-gradient-to-br from-[#2a1f1a] to-[#1a1410] shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2"
                style={{
                  animation: 'slideInLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                }}
              >
                {/* Gradient Top Border */}
                <div className={`h-2 bg-gradient-to-r ${work.darkColor} transition-all group-hover:h-3 animate-shimmer`} />
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${work.darkColor} opacity-0 transition-opacity group-hover:opacity-10`} />
                
                <div className="relative p-10">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${work.darkColor} px-4 py-2 text-sm font-semibold text-white shadow-lg`}>
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {work.period}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="text-3xl font-bold text-amber-100 transition-colors group-hover:text-amber-300">
                          {work.role}
                        </h3>
                        <p className="mt-2 text-xl font-semibold text-amber-400">
                          {work.company}
                        </p>
                      </div>
                      
                      <p className="text-lg leading-relaxed text-amber-200/90">
                        {work.description}
                      </p>
                    </div>
                    
                    {/* Decorative Icon */}
                    <div className="hidden sm:block">
                      <div className={`rounded-2xl bg-gradient-to-br ${work.darkColor} p-4 opacity-10 transition-all group-hover:scale-110 group-hover:opacity-20`}>
                        <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-3 text-lg font-semibold text-amber-400 transition-all hover:gap-4"
            >
              <span>Explore Full Experience</span>
              <svg className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-700 via-orange-700 to-amber-800 py-24 animate-gradient">
        {/* Animated Background Circles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-white/10 blur-2xl animate-float-idle" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-white/10 blur-2xl animate-float-idle animation-delay-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-white/5 blur-3xl animate-breathe" />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-scaleIn opacity-0">
              <h2 className="text-4xl font-bold tracking-tight text-amber-50 sm:text-5xl lg:text-6xl">
                Ready to Work Together?
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-amber-200/90">
                I&apos;m always interested in hearing about new opportunities and exciting projects. 
                Let&apos;s build something amazing together.
              </p>
            </div>
            
            <div className="animate-fadeInUp animation-delay-300 mt-12 opacity-0 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-semibold text-amber-900 shadow-2xl transition-all hover:scale-105 hover:shadow-white/30"
              >
                <span>Contact Me</span>
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
              <a
                href="tel:+17139389113"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold text-white transition-all hover:bg-white hover:text-amber-900 hover:scale-105"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

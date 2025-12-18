'use client';

import { useState, useEffect } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      category: 'Front-End Development',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-blue-600 to-cyan-600',
      darkColor: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'React', level: 95, description: 'Expert in building complex UIs, hooks, and component patterns' },
        { name: 'Next.js', level: 95, description: 'SSR, ISR, edge rendering, and App Router expertise' },
        { name: 'TypeScript', level: 95, description: 'Advanced types, generics, and type-safe architectures' },
        { name: 'Tailwind CSS', level: 90, description: 'Custom design systems and responsive layouts' },
        { name: 'Storybook', level: 85, description: 'Component documentation and design system development' },
        { name: 'Radix UI', level: 85, description: 'Accessible component primitives and custom implementations' },
        { name: 'Web Vitals', level: 90, description: 'LCP, FID, CLS optimization and performance monitoring' },
        { name: 'WCAG 2.2', level: 90, description: 'Accessibility standards, ARIA, and keyboard navigation' },
      ],
    },
    {
      category: 'Back-End Development',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'from-cyan-600 to-teal-600',
      darkColor: 'from-cyan-400 to-teal-400',
      skills: [
        { name: 'Node.js', level: 90, description: 'Express, Fastify, and event-driven architectures' },
        { name: 'Python', level: 85, description: 'FastAPI, async patterns, and data processing' },
        { name: 'PostgreSQL', level: 85, description: 'Query optimization, indexing, and schema design' },
        { name: 'Redis', level: 80, description: 'Caching strategies, pub/sub, and session management' },
        { name: 'GraphQL', level: 80, description: 'Schema design, resolvers, and performance optimization' },
        { name: 'REST APIs', level: 95, description: 'Design, versioning, and best practices' },
        { name: 'Snowflake', level: 75, description: 'Data warehousing and analytics queries' },
        { name: 'Webhooks', level: 85, description: 'Idempotency, retry logic, and rate limiting' },
      ],
    },
    {
      category: 'Cloud & Infrastructure',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: 'from-teal-600 to-emerald-600',
      darkColor: 'from-teal-400 to-emerald-400',
      skills: [
        { name: 'AWS Lambda', level: 90, description: 'Serverless functions, layers, and optimization' },
        { name: 'API Gateway', level: 85, description: 'REST and WebSocket APIs, authentication' },
        { name: 'DynamoDB', level: 80, description: 'NoSQL design, indexes, and access patterns' },
        { name: 'Step Functions', level: 80, description: 'Workflow orchestration and state machines' },
        { name: 'EventBridge', level: 80, description: 'Event-driven patterns and integrations' },
        { name: 'Docker', level: 85, description: 'Container creation, optimization, and orchestration' },
        { name: 'Kubernetes', level: 75, description: 'Deployments, services, and scaling' },
        { name: 'AWS CDK', level: 85, description: 'Infrastructure as code with TypeScript' },
        { name: 'OpenTelemetry', level: 80, description: 'Distributed tracing and observability' },
      ],
    },
    {
      category: 'Data & AI/ML',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-emerald-600 to-green-600',
      darkColor: 'from-emerald-400 to-green-400',
      skills: [
        { name: 'LLM Observability', level: 90, description: 'Trace monitoring, evaluation, and debugging' },
        { name: 'Evaluation Dashboards', level: 90, description: 'Metrics visualization and analysis' },
        { name: 'RLHF Workflows', level: 85, description: 'Human feedback collection and preference learning' },
        { name: 'Red-teaming', level: 85, description: 'Safety testing and adversarial evaluation' },
        { name: 'Vector Search', level: 80, description: 'Semantic search and embeddings' },
        { name: 'Data Visualization', level: 85, description: 'Charts, grids, and interactive dashboards' },
      ],
    },
    {
      category: 'Testing & Quality',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-purple-600 to-pink-600',
      darkColor: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'Playwright', level: 85, description: 'E2E testing and browser automation' },
        { name: 'Cypress', level: 80, description: 'Component and integration testing' },
        { name: 'Vitest', level: 85, description: 'Unit testing with Vite' },
        { name: 'Jest', level: 85, description: 'JavaScript testing framework' },
        { name: 'Pytest', level: 80, description: 'Python testing and fixtures' },
        { name: 'Feature Flags', level: 85, description: 'Progressive rollouts and A/B testing' },
      ],
    },
    {
      category: 'Product & Design',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: 'from-pink-600 to-rose-600',
      darkColor: 'from-pink-400 to-rose-400',
      skills: [
        { name: 'Design Systems', level: 90, description: 'Component libraries and token systems' },
        { name: 'Accessibility Audits', level: 90, description: 'WCAG compliance and remediation' },
        { name: 'Analytics', level: 85, description: 'Event tracking and user behavior analysis' },
        { name: 'UX Research', level: 75, description: 'User feedback and usability testing' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0806]">
      {/* Hero Section - Skills Page Unique Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0806] via-[#1a1410] to-[#2a1f1a] py-20 sm:py-32">
        {/* Skills Page Unique Moving Background - Vibrant Pink/Purple Theme */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating orbs - Skills page style */}
          <div className="absolute top-0 right-0 h-[950px] w-[950px] rounded-full bg-gradient-to-br from-rose-600/35 via-pink-600/28 to-fuchsia-600/35 blur-3xl animate-float-idle" />
          <div className="absolute bottom-0 left-0 h-[850px] w-[850px] rounded-full bg-gradient-to-tr from-purple-600/32 via-violet-600/26 to-indigo-600/32 blur-3xl animate-float-idle animation-delay-600" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[750px] w-[750px] rounded-full bg-gradient-to-br from-pink-600/30 to-rose-600/30 blur-3xl animate-breathe" />
          <div className="absolute top-1/4 left-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-fuchsia-600/26 to-purple-600/26 blur-3xl animate-drift" />
          <div className="absolute bottom-1/3 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-tl from-violet-600/24 to-indigo-600/24 blur-3xl animate-drift animation-delay-700" />
          <div className="absolute top-3/4 left-2/3 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-rose-600/22 to-pink-600/22 blur-3xl animate-drift animation-delay-1000" />
          
          {/* Diagonal flowing waves - unique to Skills */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-600/25 to-transparent rotate-12 animate-flow" />
            <div className="absolute top-2/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-600/20 to-transparent -rotate-12 animate-flow animation-delay-500" />
            <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-600/22 to-transparent rotate-6 animate-flow animation-delay-1000" />
          </div>
          
          {/* Hexagonal grid pattern - unique to Skills page */}
          <div className="absolute inset-0 opacity-35">
            <div className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-rose-600/22 rotate-45 animate-pulse" />
            <div className="absolute top-1/2 right-1/4 w-48 h-48 border-2 border-pink-600/22 rotate-45 animate-pulse animation-delay-300" />
            <div className="absolute bottom-1/4 left-1/3 w-44 h-44 border-2 border-fuchsia-600/22 rotate-45 animate-pulse animation-delay-600" />
            <div className="absolute top-3/4 right-1/3 w-36 h-36 border-2 border-purple-600/20 rotate-45 animate-pulse animation-delay-900" />
          </div>
          
          {/* Rotating gradient rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border-2 border-rose-600/28 animate-rotate" style={{ animationDuration: '30s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[1050px] rounded-full border border-fuchsia-600/22 animate-rotate" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
          
          {/* Animated light beams */}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-rose-600/38 to-transparent animate-light-ray" />
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-pink-600/33 to-transparent animate-light-ray animation-delay-500" />
          <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-fuchsia-600/33 to-transparent animate-light-ray animation-delay-1000" />
          
          {/* Flowing particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 right-0 w-52 h-52 bg-rose-600/16 rounded-full blur-2xl animate-flow" />
            <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-fuchsia-600/16 rounded-full blur-2xl animate-flow animation-delay-600" />
            <div className="absolute top-2/3 right-1/4 w-56 h-56 bg-pink-600/14 rounded-full blur-2xl animate-flow animation-delay-1000" />
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ec489925_1px,transparent_1px),linear-gradient(to_bottom,#ec489925_1px,transparent_1px)] bg-[size:34px_34px] opacity-75 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600/14 via-pink-600/12 to-fuchsia-600/14 animate-gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-tl from-fuchsia-600/12 via-purple-600/10 to-rose-600/12 animate-gradient-wave" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div 
              className="opacity-0"
              style={{
                animation: isVisible ? 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
              }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-amber-50 sm:text-5xl lg:text-6xl" style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.03em', fontWeight: 700 }}>
                Skills & Expertise
              </h1>
              <p 
                className="mt-6 text-xl leading-relaxed text-amber-200 opacity-0"
                style={{
                  animation: isVisible ? 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                  animationDelay: '0.2s',
                  fontFamily: 'var(--font-inter)',
                  letterSpacing: '-0.01em',
                  fontWeight: 400,
                }}
              >
                A comprehensive toolkit spanning the <strong className="font-semibold">full stack</strong>, from pixel-perfect UIs 
                to scalable cloud infrastructure and cutting-edge AI/ML tooling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20 bg-gradient-to-b from-[#0a0806] to-[#1a1410] overflow-hidden relative">
        {/* Moving background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-amber-600/15 to-transparent rounded-full blur-3xl animate-drift" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-orange-600/15 to-transparent rounded-full blur-3xl animate-drift animation-delay-500" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.category}
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${categoryIndex * 0.1}s`,
                  opacity: 0,
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 group/header">
                  <div 
                    className={`inline-flex rounded-2xl bg-gradient-to-r ${category.color} p-4 text-white shadow-lg transition-all duration-500 group-hover/header:scale-110 group-hover/header:rotate-6 group-hover/header:shadow-2xl`}
                    style={{
                      animation: isVisible ? 'bounceIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                      animationDelay: `${categoryIndex * 0.1}s`,
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    <div className="transition-transform duration-500 group-hover/header:scale-110">
                      {category.icon}
                    </div>
                  </div>
                  <h2 
                    className="text-3xl font-bold text-amber-50 transition-all duration-300 group-hover/header:text-amber-100"
                    style={{
                      fontFamily: 'var(--font-playfair)',
                      letterSpacing: '-0.02em',
                      fontWeight: 700,
                      animation: isVisible
                        ? 'slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                        : 'none',
                      animationDelay: `${categoryIndex * 0.1 + 0.1}s`,
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    {category.category}
                  </h2>
                </div>

                {/* Skills Grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group relative overflow-hidden rounded-2xl border border-amber-900/30 bg-gradient-to-br from-[#2a1f1a] to-[#1a1410] p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-amber-700/50 hover:shadow-2xl hover:shadow-amber-900/20"
                      style={{
                        animation: isVisible ? 'slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                        animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                        opacity: isVisible ? 1 : 0,
                      }}
                    >
                      {/* Hover glow effect */}
                      <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`} />
                      
                      {/* Card content */}
                      <div className="relative">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-amber-50 transition-colors duration-300 group-hover:text-amber-100">
                              {skill.name}
                            </h3>
                            <p className="mt-2 text-sm text-amber-300/80 transition-colors duration-300 group-hover:text-amber-300">
                              {skill.description}
                            </p>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${category.color} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl`}>
                              <span className="text-sm font-bold text-white">
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Animated Skill Level Bar */}
                        <div className="mt-4 relative">
                          <div className="h-2.5 w-full overflow-hidden rounded-full bg-amber-950/50 shadow-inner">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${category.color} shadow-lg transition-all duration-1000 ease-out group-hover:shadow-xl`}
                              style={{ 
                                width: isVisible ? `${skill.level}%` : '0%',
                                transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.05 + 0.3}s`
                              }}
                            >
                              <div className="h-full w-full animate-shimmer" />
                            </div>
                          </div>
                          {/* Progress indicator */}
                          <div 
                            className="absolute -top-1 h-4 w-1 rounded-full bg-white opacity-0 shadow-lg transition-all duration-500 group-hover:opacity-100"
                            style={{ 
                              left: `${skill.level}%`,
                              transform: 'translateX(-50%)'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Overview */}
      <section className="bg-gradient-to-br from-[#1a1410] to-[#2a1f1a] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-amber-50 sm:text-4xl" style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.02em', fontWeight: 700 }}>
              Technology Stack
            </h2>
            <p className="mt-4 text-lg text-amber-300/80">
              Tools and frameworks I work with daily
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'React', 'Next.js', 'TypeScript', 'JavaScript', 'Python', 'Node.js',
                'Tailwind CSS', 'Storybook', 'PostgreSQL', 'Redis', 'GraphQL', 'REST',
                'AWS Lambda', 'DynamoDB', 'Docker', 'Kubernetes', 'Git', 'CI/CD',
                'Playwright', 'Jest', 'Vitest', 'FastAPI', 'Express', 'Fastify',
                'Snowflake', 'OpenTelemetry', 'CloudWatch', 'EventBridge', 'Step Functions',
                'LLM Observability', 'Vector Search', 'RLHF', 'Radix UI', 'CSS Modules',
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="group/tech relative inline-flex items-center rounded-full border border-amber-800/50 bg-amber-950/30 px-4 py-2 text-sm font-medium text-amber-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-600/70 hover:bg-amber-900/50 hover:text-amber-100 hover:shadow-lg hover:shadow-amber-900/30"
                  style={{
                    animation: isVisible ? 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                    animationDelay: `${index * 0.02}s`,
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 blur transition-opacity duration-300 group-hover/tech:opacity-20" />
                  <span className="relative">{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications / Learning */}
      <section className="py-20 bg-gradient-to-b from-[#0a0806] to-[#1a1410]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-amber-50 sm:text-4xl" style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.02em', fontWeight: 700 }}>
              Continuous Learning
            </h2>
            <p className="mt-4 text-lg text-amber-300/80">
              Staying current with evolving technologies and best practices
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Web Performance',
                description: 'Core Web Vitals, optimization techniques, and monitoring',
                icon: '⚡',
              },
              {
                title: 'Accessibility',
                description: 'WCAG 2.2 standards, ARIA patterns, and inclusive design',
                icon: '♿',
              },
              {
                title: 'AI/ML Systems',
                description: 'LLM evaluation, safety testing, and observability tools',
                icon: '🤖',
              },
              {
                title: 'Cloud Architecture',
                description: 'Serverless patterns, event-driven design, and scalability',
                icon: '☁️',
              },
              {
                title: 'Design Systems',
                description: 'Component libraries, design tokens, and documentation',
                icon: '🎨',
              },
              {
                title: 'Security',
                description: 'Authentication, authorization, and secure coding practices',
                icon: '🔒',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group/learn relative overflow-hidden rounded-2xl border border-amber-900/30 bg-gradient-to-br from-[#2a1f1a] to-[#1a1410] p-6 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-amber-700/50 hover:shadow-2xl hover:shadow-amber-900/20"
                style={{
                  animation: isVisible ? 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                  animationDelay: `${index * 0.1}s`,
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-orange-600/0 opacity-0 transition-opacity duration-500 group-hover/learn:from-amber-600/10 group-hover/learn:to-orange-600/10 group-hover/learn:opacity-100" />
                
                {/* Content */}
                <div className="relative">
                  <div className="mb-4 inline-block text-4xl transition-transform duration-500 group-hover/learn:scale-125 group-hover/learn:rotate-12">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-amber-50 transition-colors duration-300 group-hover/learn:text-amber-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-amber-300/80 transition-colors duration-300 group-hover/learn:text-amber-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


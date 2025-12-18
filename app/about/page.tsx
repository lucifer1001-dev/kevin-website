export default function About() {
  const education = [
    {
      degree: "Master's degree in Computer Science",
      school: 'University of Toronto',
      period: '2011 - 2013',
      description: 'Advanced studies in distributed systems, machine learning, and software architecture.',
      icon: '🎓',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      degree: "Bachelor's degree in Computer Science",
      school: 'University of Toronto',
      period: '2007 - 2011',
      description: 'Foundation in algorithms, data structures, and software engineering principles.',
      icon: '🎓',
      color: 'from-cyan-600 to-teal-600',
    },
  ];

  const expertise = [
    {
      title: 'Front-End Excellence',
      description: 'Expert in building modern, performant UIs with React, Next.js, and TypeScript. Strong focus on accessibility (WCAG 2.2), Web Vitals optimization, and component-driven development with Storybook.',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Web Vitals'],
      icon: '💻',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Back-End Architecture',
      description: 'Proficient in designing scalable APIs and services with Node.js and Python. Experience with event-driven architectures, microservices, and database optimization.',
      skills: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'GraphQL'],
      icon: '⚙️',
      gradient: 'from-cyan-600 to-teal-600',
    },
    {
      title: 'AI/ML Tooling',
      description: 'Specialized in building evaluation dashboards, observability tools, and workflows for LLM applications. Experience with RLHF, red-teaming, and safety evaluation systems.',
      skills: ['LLM Observability', 'Evaluation Dashboards', 'RLHF', 'Safety Tools'],
      icon: '🤖',
      gradient: 'from-teal-600 to-emerald-600',
    },
    {
      title: 'Cloud & DevOps',
      description: 'Strong AWS expertise with serverless architectures, infrastructure as code, and observability. Skilled in container orchestration and CI/CD pipelines.',
      skills: ['AWS', 'Lambda', 'Docker', 'Kubernetes', 'OpenTelemetry', 'CDK'],
      icon: '☁️',
      gradient: 'from-emerald-600 to-green-600',
    },
  ];

  const values = [
    {
      title: 'User-Centric Design',
      description: 'Every interface should be fast, accessible, and delightful to use.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-rose-500 to-pink-500',
    },
    {
      title: 'Performance Matters',
      description: 'Optimize for Web Vitals, reduce latency, and measure everything.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Quality Code',
      description: 'Write maintainable, testable code with clear patterns and documentation.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Continuous Learning',
      description: 'Stay current with evolving technologies and best practices.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0806]">
      {/* Hero Section - About Page Unique Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0806] via-[#1a1410] to-[#2a1f1a] py-20 sm:py-32">
        {/* About Page Unique Moving Background - Cool Blue/Purple Theme */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating orbs - About page style */}
          <div className="absolute top-0 right-0 h-[900px] w-[900px] rounded-full bg-gradient-to-br from-blue-600/35 via-cyan-600/28 to-teal-600/35 blur-3xl animate-float-idle" />
          <div className="absolute bottom-0 left-0 h-[800px] w-[800px] rounded-full bg-gradient-to-tr from-purple-600/32 via-pink-600/26 to-rose-600/32 blur-3xl animate-float-idle animation-delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-indigo-600/30 to-blue-600/30 blur-3xl animate-breathe" />
          <div className="absolute top-1/4 left-1/3 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-cyan-600/24 to-teal-600/24 blur-3xl animate-drift" />
          <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-violet-600/22 to-purple-600/22 blur-3xl animate-drift animation-delay-700" />
          <div className="absolute top-3/4 right-1/3 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-pink-600/20 to-rose-600/20 blur-3xl animate-drift animation-delay-1000" />
          
          {/* Diagonal flowing waves - unique to About */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/25 to-transparent rotate-12 animate-flow" />
            <div className="absolute top-2/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600/20 to-transparent -rotate-12 animate-flow animation-delay-500" />
            <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-600/22 to-transparent rotate-6 animate-flow animation-delay-1000" />
          </div>
          
          {/* Circular wave pattern - unique to About page */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]">
            <div className="absolute inset-0 rounded-full border-2 border-blue-600/18 animate-rotate" style={{ animationDuration: '30s' }} />
            <div className="absolute inset-4 rounded-full border border-cyan-600/15 animate-rotate" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
            <div className="absolute inset-8 rounded-full border border-purple-600/12 animate-rotate" style={{ animationDuration: '35s' }} />
          </div>
          
          {/* Rotating gradient rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-blue-600/28 animate-rotate" style={{ animationDuration: '28s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-purple-600/22 animate-rotate" style={{ animationDuration: '38s', animationDirection: 'reverse' }} />
          
          {/* Animated light beams - vertical */}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-600/35 to-transparent animate-light-ray" />
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-purple-600/30 to-transparent animate-light-ray animation-delay-500" />
          <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-cyan-600/30 to-transparent animate-light-ray animation-delay-1000" />
          
          {/* Flowing particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-44 h-44 bg-blue-600/14 rounded-full blur-2xl animate-flow" />
            <div className="absolute top-3/4 right-0 w-52 h-52 bg-purple-600/14 rounded-full blur-2xl animate-flow animation-delay-500" />
            <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-cyan-600/12 rounded-full blur-2xl animate-flow animation-delay-1000" />
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f125_1px,transparent_1px),linear-gradient(to_bottom,#6366f125_1px,transparent_1px)] bg-[size:36px_36px] opacity-70 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/12 via-indigo-600/10 to-purple-600/12 animate-gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/10 via-pink-600/8 to-rose-600/10 animate-gradient-wave" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="animate-fadeInUp opacity-0">
              <span className="inline-block rounded-full bg-gradient-to-r from-amber-950/50 to-orange-950/50 px-4 py-2 text-sm font-semibold text-amber-300">
                About Me
              </span>
              <h1 className="mt-6 text-5xl font-bold tracking-tight text-amber-50 sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.03em', fontWeight: 700 }}>
                Crafting Digital
                <span className="relative ml-3 inline-block">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Experiences
                  </span>
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-amber-400 to-orange-400" />
                </span>
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-amber-200" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '-0.01em', fontWeight: 400 }}>
                I&apos;m a <strong className="text-amber-400 font-semibold">Senior Software Engineer</strong> with <strong className="text-amber-400 font-semibold">12+ years</strong> of experience building high-performance, AI-driven systems, real-time collaborative platforms, and enterprise analytics applications. Expert in React/TypeScript, WebGL/Canvas rendering, WebAssembly, real-time synchronization, and full-stack development. Skilled at integrating AI/ML pipelines into production systems and delivering intuitive, data-rich user interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0806] to-[#1a1410] overflow-hidden">
        {/* Moving background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-amber-600/15 to-transparent rounded-full blur-3xl animate-drift" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-orange-600/15 to-transparent rounded-full blur-3xl animate-drift animation-delay-500" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-scaleIn opacity-0">
              <span className="inline-block rounded-full bg-gradient-to-r from-amber-950/50 to-orange-950/50 px-4 py-2 text-sm font-semibold text-amber-300">
                Academic Foundation
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-amber-50 sm:text-5xl" style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.02em', fontWeight: 700 }}>
                Education
              </h2>
              <p className="mt-4 text-lg text-amber-300/80">
                World-class computer science education from University of Toronto
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="group relative overflow-hidden rounded-3xl border border-amber-900/30 bg-gradient-to-br from-[#2a1f1a] to-[#1a1410] p-10 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2"
                style={{
                  animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0,
                }}
              >
                {/* Gradient Border Top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`} />
                
                {/* Icon */}
                <div className="text-6xl mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                  {edu.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-amber-50">
                  {edu.degree}
                </h3>
                <p className="mt-3 text-xl font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  {edu.school}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm font-medium text-amber-300/70">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {edu.period}
                </p>
                <p className="mt-6 text-amber-200/90 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative bg-gradient-to-br from-[#1a1410] to-[#2a1f1a] py-24 overflow-hidden">
        {/* Moving background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-600/15 blur-3xl animate-float-idle" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl animate-float-idle animation-delay-700" />
          <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-yellow-600/12 blur-3xl animate-drift animation-delay-300" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-scaleIn opacity-0">
              <span className="inline-block rounded-full bg-gradient-to-r from-amber-950/50 to-orange-950/50 px-4 py-2 text-sm font-semibold text-amber-300">
                Technical Expertise
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-amber-50 sm:text-5xl" style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.02em', fontWeight: 700 }}>
                Areas of Mastery
              </h2>
              <p className="mt-4 text-lg text-amber-300/80">
                Deep technical knowledge across the full stack
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-2">
            {expertise.map((area, index) => (
              <div
                key={area.title}
                className="group relative overflow-hidden rounded-3xl border border-amber-900/30 bg-gradient-to-br from-[#2a1f1a] to-[#1a1410] p-10 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2"
                style={{
                  animation: 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                }}
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${area.gradient} transition-all group-hover:h-3`} />
                
                {/* Icon */}
                <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110">
                  {area.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-amber-50">
                  {area.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-amber-200/90">
                  {area.description}
                </p>
                
                {/* Skills Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {area.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-amber-900/30 px-4 py-2 text-sm font-medium text-amber-300 transition-all hover:bg-amber-900/50"
                      style={{
                        animation: 'fadeIn 0.3s ease-out forwards',
                        animationDelay: `${(index * 0.15) + (skillIndex * 0.05)}s`,
                        opacity: 0,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0806] to-[#1a1410]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-scaleIn opacity-0">
              <span className="inline-block rounded-full bg-gradient-to-r from-amber-950/50 to-orange-950/50 px-4 py-2 text-sm font-semibold text-amber-300">
                Guiding Principles
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-amber-50 sm:text-5xl" style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.02em', fontWeight: 700 }}>
                Core Values
              </h2>
              <p className="mt-4 text-lg text-amber-300/80">
                The principles that drive my work and decision-making
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group text-center"
                style={{
                  animation: 'bounceIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="relative mx-auto inline-flex">
                  {/* Outer Glow Ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${value.color} opacity-20 blur-xl transition-all group-hover:opacity-40 group-hover:scale-110`} />
                  
                  {/* Icon Container */}
                  <div className={`relative rounded-full bg-gradient-to-br ${value.color} p-6 text-white transition-all group-hover:scale-110 group-hover:rotate-6`}>
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="mt-6 text-xl font-semibold text-amber-50">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-amber-300/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800 py-16 animate-gradient">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { label: 'Years Experience', value: '12+' },
              { label: 'Companies Worked', value: '4' },
              { label: 'Projects Delivered', value: '50+' },
              { label: 'Impact Created', value: '∞' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center text-white"
                style={{
                  animation: 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="text-5xl font-bold sm:text-6xl">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-amber-100 sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

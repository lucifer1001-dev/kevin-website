export default function Experience() {
  const experiences = [
    {
      company: 'Restb.ai',
      role: 'Senior Software Engineer',
      period: 'Nov 2023 – Oct 2025',
      color: 'from-blue-600 to-indigo-600',
      darkColor: 'from-blue-400 to-indigo-400',
      icon: '🏠',
      achievements: [
        'Built React + TypeScript + WebGL high-resolution viewers using tile streaming, GPU shaders, and optimized redraw cycles, enabling smooth inspection of 20–30MP images for enterprise real-estate platforms.',
        'Designed full-stack inference flows with FastAPI, ONNX Runtime, and TensorRT, reducing end-to-end latency by 35% for property-scoring pipelines.',
        'Implemented distributed ingestion using Redis Streams + Celery, increasing throughput stability during 400k+ images/day peaks and reducing processing failures by 40%.',
        'Partnered with ML teams to refine NMS thresholds, model scoring, and postprocessing, improving detection precision/recall across production datasets.',
        'Built internal debugging tools (heatmaps, overlays, pixel inspectors) allowing design, ML, and QA teams to visualize model outputs directly in the UI.',
        'Delivered full-stack metering & Stripe billing integrations powering usage-based pricing for 30+ enterprise customers.',
        'Shipped AI-driven listing insights used across multiple customers, contributing to >$4M ARR in enterprise product lines.'
      ],
      technologies: ['React', 'TypeScript', 'WebGL', 'Canvas', 'Node.js', 'Python', 'Computer Vision', 'Real Estate Tech'],
    },
    {
      company: 'Figma',
      role: 'Senior Frontend Engineer',
      period: 'Apr 2019 – Nov 2023',
      color: 'from-purple-600 to-pink-600',
      darkColor: 'from-purple-400 to-pink-400',
      icon: '📝',
      achievements: [
        'Improved real-time collaboration reliability by refining CRDT merge rules, conflict resolution logic, and event propagation across large design files.',
        'Increased Canvas performance 20–25% by batching rendering phases, eliminating layout thrashing, and optimizing WASM-backed layout routines',
        'Built core UI primitives and component infrastructure that powered Auto Layout, Variants, and modern design panel systems.',
        'Diagnosed and resolved complex rendering regressions using GPU shader profiling, Chrome Tracing, and custom instrumentation pipelines.',
        'Implemented async document-recovery workflows reducing enterprise design-team file corruption incidents by >30%.',
        'Led technical collaboration across Rendering, Design Systems, and Platform teams to ensure consistent UI behavior during high-traffic feature rollouts.',
      ],
      technologies: ['React', 'TypeScript', 'WebSockets', 'CRDT', 'WebAssembly', 'Node.js', 'Python', 'GPU Acceleration'],
    },
    {
      company: 'Dataiku',
      role: 'Senior Frontend / Full-Stack Engineer',
      period: 'Jan 2016 – Mar 2019',
      color: 'from-teal-600 to-cyan-600',
      darkColor: 'from-teal-400 to-cyan-400',
      icon: '🤖',
      achievements: [
        'Delivered React + TypeScript interfaces for dataset exploration, feature engineering, and model evaluation workflows.',
        'Integrated frontend with distributed Python compute APIs on Kubernetes, enabling scalable transformations and real-time scoring.',
        'Implemented reusable visualization components for time-series analysis, classifier diagnostics, ROC curves, SHAP-based explanations, and model-comparison dashboards',
        'Added tracing, async progress polling, and granular error reporting to improve UX reliability for long-running batch jobs.',
        'Worked with ML researchers to convert prototypes into stable, production-ready UIdriven workflows.',
      ],
      technologies: ['React', 'TypeScript', 'Spark', 'Kubernetes', 'Python', 'AI/ML', 'CV/NLP'],
    },
    {
      company: 'Google',
      role: 'Software Engineer',
      period: 'Apr 2013 – Dec 2016',
      color: 'from-red-600 to-orange-600',
      darkColor: 'from-red-400 to-orange-400',
      icon: '🔴',
      achievements: [
        'Modernized advertiser-facing UIs using AngularJS, Closure Library, and Closure Templates, improving load performance and rendering stability across millions of daily sessions.',
        'Built backend services with Java, Guice, and Protobuf RPC delivering real-time CTR, spend, and conversion metrics.',
        'Improved reporting performance 22% by optimizing BigQuery/Dremel query plans and removing excess data fetch paths.',
        'Built shared UI utilities adopted across Ads teams, reducing frontend duplication and accelerating feature development velocity.',
        'Integrated new UI components into Google’s experimentation & safe-launch systems (GoogExp), enabling reliable A/B testing at scale.',
      ],
      technologies: ['AngularJS', 'Java', 'A/B Testing', 'Analytics', 'Internal Frameworks'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0806]">
      {/* Hero Section - Experience Page Unique Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0806] via-[#1a1410] to-[#2a1f1a] py-20 sm:py-32">
        {/* Experience Page Unique Moving Background - Fresh Green/Teal Theme */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating orbs - Experience page style */}
          <div className="absolute top-0 right-0 h-[1000px] w-[1000px] rounded-full bg-gradient-to-br from-emerald-600/35 via-teal-600/28 to-cyan-600/35 blur-3xl animate-float-idle" />
          <div className="absolute bottom-0 left-0 h-[900px] w-[900px] rounded-full bg-gradient-to-tr from-green-600/32 via-emerald-600/26 to-teal-600/32 blur-3xl animate-float-idle animation-delay-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-teal-600/30 to-cyan-600/30 blur-3xl animate-breathe" />
          <div className="absolute top-1/4 left-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-600/26 to-blue-600/26 blur-3xl animate-drift" />
          <div className="absolute bottom-1/3 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-tl from-green-600/24 to-emerald-600/24 blur-3xl animate-drift animation-delay-700" />
          <div className="absolute top-3/4 left-2/3 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-teal-600/22 to-cyan-600/22 blur-3xl animate-drift animation-delay-1000" />
          
          {/* Diagonal flowing waves - unique to Experience */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-600/25 to-transparent rotate-12 animate-flow" />
            <div className="absolute top-2/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-600/20 to-transparent -rotate-12 animate-flow animation-delay-500" />
            <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-600/22 to-transparent rotate-6 animate-flow animation-delay-1000" />
          </div>
          
          {/* Timeline-style vertical lines - unique to Experience */}
          <div className="absolute top-0 left-1/3 w-2 h-full bg-gradient-to-b from-transparent via-emerald-600/18 to-transparent" />
          <div className="absolute top-0 left-2/3 w-2 h-full bg-gradient-to-b from-transparent via-teal-600/18 to-transparent" />
          <div className="absolute top-1/4 left-1/3 w-40 h-1 bg-gradient-to-r from-emerald-600/35 to-transparent animate-flow" />
          <div className="absolute top-1/2 left-2/3 w-40 h-1 bg-gradient-to-l from-teal-600/35 to-transparent animate-flow animation-delay-500" />
          <div className="absolute top-3/4 left-1/3 w-40 h-1 bg-gradient-to-r from-cyan-600/35 to-transparent animate-flow animation-delay-1000" />
          
          {/* Rotating gradient rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border-2 border-emerald-600/28 animate-rotate" style={{ animationDuration: '32s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-teal-600/22 animate-rotate" style={{ animationDuration: '42s', animationDirection: 'reverse' }} />
          
          {/* Animated light beams */}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-emerald-600/38 to-transparent animate-light-ray" />
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-teal-600/33 to-transparent animate-light-ray animation-delay-500" />
          <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-cyan-600/33 to-transparent animate-light-ray animation-delay-1000" />
          
          {/* Flowing particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-48 h-48 bg-emerald-600/14 rounded-full blur-2xl animate-flow" />
            <div className="absolute bottom-1/3 left-0 w-56 h-56 bg-teal-600/14 rounded-full blur-2xl animate-flow animation-delay-500" />
            <div className="absolute top-2/3 right-1/4 w-52 h-52 bg-cyan-600/12 rounded-full blur-2xl animate-flow animation-delay-1000" />
          </div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98125_1px,transparent_1px),linear-gradient(to_bottom,#10b98125_1px,transparent_1px)] bg-[size:32px_32px] opacity-70 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/13 via-teal-600/11 to-cyan-600/13 animate-gradient-mesh" />
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-600/11 via-teal-600/9 to-emerald-600/11 animate-gradient-wave" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="animate-fadeInUp opacity-0">
              <span className="inline-block rounded-full bg-gradient-to-r from-amber-950/50 to-orange-950/50 px-4 py-2 text-sm font-semibold text-amber-300">
                Career Journey
              </span>
              <h1 className="mt-6 text-5xl font-bold tracking-tight text-amber-50 sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.03em', fontWeight: 700 }}>
                Work
                <span className="relative ml-3 inline-block">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Experience
                  </span>
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-amber-400 to-orange-400" />
                </span>
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-amber-200" style={{ fontFamily: 'var(--font-inter)', letterSpacing: '-0.01em', fontWeight: 400 }}>
                <strong className="text-amber-400 font-semibold">12+ years</strong> of experience building high-performance, AI-driven systems, real-time collaborative platforms, and enterprise analytics applications at leading organizations including Restb.ai, Figma, Dataiku, and Google.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#0a0806] to-[#1a1410] overflow-hidden">
        {/* Moving background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-amber-600/15 to-transparent rounded-full blur-3xl animate-drift" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-orange-600/15 to-transparent rounded-full blur-3xl animate-drift animation-delay-500" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative space-y-20">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 hidden w-px bg-gradient-to-b from-amber-600 via-orange-600 to-amber-700 lg:block" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative"
                style={{
                  animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                }}
              >
                {/* Timeline dot - centered */}
                <div className="absolute left-1/2 top-12 hidden -ml-6 lg:block">
                  <div className="relative h-12 w-12">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} opacity-20 blur-xl animate-pulse`} />
                    <div className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${exp.color} text-2xl shadow-lg ring-4 ring-white dark:ring-slate-950`}>
                      {exp.icon}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`group lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                  <div className={`${index % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div className="relative overflow-hidden rounded-3xl border border-amber-900/30 bg-gradient-to-br from-[#2a1f1a] to-[#1a1410] shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2">
                      {/* Gradient Top Border */}
                      <div className={`h-3 bg-gradient-to-r ${exp.darkColor} transition-all group-hover:h-4`} />
                      
                      {/* Card Content */}
                      <div className="p-10">
                        {/* Header */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${exp.color} px-4 py-2 text-sm font-semibold text-white shadow-lg`}>
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {exp.period}
                            </span>
                          </div>
                          
                          <div>
                            <h3 className="text-3xl font-bold text-amber-100 transition-colors group-hover:text-amber-300">
                              {exp.role}
                            </h3>
                            <p className="mt-2 text-2xl font-semibold text-amber-400">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mt-8">
                          <h4 className="text-sm font-semibold uppercase tracking-wide text-amber-400/70">
                            Key Achievements
                          </h4>
                          <ul className="mt-4 space-y-4">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex gap-3 text-amber-200/90">
                                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mt-8">
                          <h4 className="text-sm font-semibold uppercase tracking-wide text-amber-400/70">
                            Technologies
                          </h4>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={tech}
                                className="inline-flex items-center rounded-full bg-amber-900/30 px-4 py-2 text-sm font-medium text-amber-300 transition-all hover:bg-amber-900/50"
                                style={{
                                  animation: 'fadeIn 0.3s ease-out forwards',
                                  animationDelay: `${(index * 0.15) + (techIndex * 0.05)}s`,
                                  opacity: 0,
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-700 via-orange-700 to-amber-800 py-20 animate-gradient">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-10 right-10 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-white">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.02em', fontWeight: 700 }}>
              Impact by the Numbers
            </h2>
            <p className="mt-4 text-xl text-amber-100">
              Measurable results across projects and organizations
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '12+', label: 'Years Experience' },
              { value: '40%', label: 'Query Efficiency Improvement' },
              { value: '30%', label: 'Render Time Reduction' },
              { value: '50%', label: 'Manual Effort Reduced' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group text-center text-white"
                style={{
                  animation: 'bounceIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="relative mx-auto inline-block">
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl transition-all group-hover:scale-110" />
                  <div className="relative text-6xl font-bold transition-transform group-hover:scale-110 sm:text-7xl">
                    {stat.value}
                  </div>
                </div>
                <div className="mt-4 text-base font-medium text-amber-100 sm:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

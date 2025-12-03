"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    { icon: "📊", title: "Financial Literacy", desc: "Understanding budgeting & investments" },
    { icon: "👨‍⚕️", title: "For Doctors", desc: "Medical practitioners & interns" },
    { icon: "📍", title: "Mumbai Based", desc: "Focused regional study" },
    { icon: "🎓", title: "Academic Research", desc: "M.Com research paper" },
  ];

  const objectives = [
    "Measure awareness levels of budgeting, taxation, and investment among doctors",
    "Identify gaps in financial literacy among medical professionals",
    "Understand the need for finance-related seminars and courses",
    "Study current expense tracking and management practices",
    "Suggest improvements for future awareness programs",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Header */}
      <header className="relative z-10">
        <nav className="backdrop-blur-xl bg-white/5 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-lg">
                FL
              </div>
              <span className="font-semibold text-lg hidden sm:block">Financial Literacy Research</span>
            </div>
            <div className="flex gap-4">
              <a href="#about" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">About</a>
              <a href="#survey" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300">Survey</a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-all duration-300">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={`relative z-10 pt-20 pb-32 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-sm mb-6">
              📚 Academic Research Project
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                A Study of Financial Literacy
              </span>
              <br />
              <span className="text-2xl md:text-4xl lg:text-5xl text-white/80">
                & Budgeting Practices Among
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Medical Practitioners & Interns
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
              Understanding financial awareness, investment decisions, and budgeting habits of doctors in Mumbai
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:border-purple-500/50 ${activeSection === index ? 'ring-2 ring-purple-500/50 bg-white/10' : ''}`}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Why This Research Matters
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Medical professionals undergo extensive academic and clinical training focused entirely on medical science, patient care, and hospital management. Their educational journey—from MBBS to internships, residency, and specializations—is highly time-intensive, leaving very little exposure to financial planning, budgeting, taxation, or investment-related subjects.
                </p>
                <p className="text-white/70 leading-relaxed">
                  This research aims to evaluate their current financial practices, identify areas where additional guidance is required, and determine whether structured workshops or seminars should be introduced for improving their financial literacy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Research Objectives</h3>
                <div className="space-y-3">
                  {objectives.map((obj, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <span className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-white/80 text-sm">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            How Doctors Make Investment Decisions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "👥",
                title: "Informal Sources",
                desc: "Rely on friends, colleagues, family members, or bank relationship managers. Decisions often based on trust rather than knowledge.",
              },
              {
                icon: "🏦",
                title: "Traditional Options",
                desc: "Prefer low-risk options like fixed deposits, PPF, LIC policies because they're easy to understand.",
              },
              {
                icon: "📝",
                title: "Limited Planning",
                desc: "Most do not maintain monthly budgeting systems. Tracking of expenses is often irregular.",
              },
              {
                icon: "💰",
                title: "Tax Awareness Gap",
                desc: "Many are unaware of income tax slabs, professional deductions, or business-related expenses.",
              },
              {
                icon: "📈",
                title: "Long-term Planning",
                desc: "Retirement planning, contingency funds, and insurance coverage are sometimes insufficient.",
              },
              {
                icon: "🎯",
                title: "Need for Guidance",
                desc: "Professional workshops and seminars can significantly improve financial decision-making.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Survey Section */}
      <section id="survey" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 w-20 h-20 border border-white/10 rounded-full" />
              <div className="absolute bottom-4 right-4 w-32 h-32 border border-white/10 rounded-full" />
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full" />
            </div>

            <div className="relative z-10">
              <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-sm mb-6">
                🎯 Participate in Our Research
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Take the Survey
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Your participation will help us understand the financial literacy levels among medical professionals and contribute to developing better financial education programs for doctors.
              </p>

              {/* QR Code */}
              <div className="inline-block p-6 rounded-3xl bg-white mb-8 shadow-2xl shadow-purple-500/20">
                <img
                  src="https://res.cloudinary.com/dr59elrhw/image/upload/v1764691080/sgob2hkjpyyebcpdd55q.jpg"
                  alt="Survey QR Code"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = 'none';
                    const sibling = img.nextSibling as HTMLElement;
                    if (sibling) sibling.style.display = 'flex';
                  }}
                />
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-100 rounded-xl hidden items-center justify-center text-gray-500 flex-col gap-2">
                  <span className="text-4xl">📱</span>
                  <span className="text-sm text-center px-4">
                    QR Code<br />img.jpg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Researcher Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl flex-shrink-0">
                👩‍🏫
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Ms. Nishita Nitin Parelkar
                </h3>
                <p className="text-purple-300 font-medium mb-4">
                  M.Com in Advanced Accountancy
                </p>
                <div className="space-y-2 text-white/70 text-sm">
                  <p>📚 Total Teaching Experience: 3 years 6 months (College Level) | 4 years overall</p>
                  <p>🏫 Currently Working at: Patkar-Varde College</p>
                  <p>💼 Ex-Assistant Professor – M.D. College</p>
                  <p>📖 Ex-Lecturer – MPES Night Degree College</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <a
              href="mailto:parelkarnishita2008@gmail.com"
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ✉️
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-white/60 text-sm break-all">parelkarnishita2008@gmail.com</p>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/nishita-parelkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                💼
              </div>
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-white/60 text-sm">Connect on LinkedIn</p>
            </a>

            {/* Location Card */}
            <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📍
              </div>
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-white/60 text-sm">Patkar-Varde College, Mumbai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm">
                FL
              </div>
              <span className="text-white/60 text-sm">Financial Literacy Research © 2024</span>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:parelkarnishita2008@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              >
                ✉️
              </a>
              <a
                href="https://www.linkedin.com/in/nishita-parelkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              >
                💼
              </a>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-white/5">
            <p className="text-white/40 text-xs">
              A Study of Financial Literacy and Budgeting Practices among Medical Practicing and Intern Doctors in Mumbai
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
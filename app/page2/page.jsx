"use client";
import React, { useState, useEffect } from 'react';
import { Stethoscope, GraduationCap, TrendingUp, BookOpen, Mail, Linkedin, QrCode, ArrowRight, Target, Users, FileText, Brain, Sparkles, DollarSign, PieChart, Shield } from 'lucide-react';

export default function ResearchWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated Cursor Follower */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl opacity-30 transition-all duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(147,51,234,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-100px) translateX(50px); opacity: 1; }
        }
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147,51,234,0.5); }
          50% { box-shadow: 0 0 40px rgba(147,51,234,0.8), 0 0 60px rgba(147,51,234,0.6); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        
        {/* Hero Header - Compact */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 mb-6 animate-pulse">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Academic Research Study 2024
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Financial Literacy
            </span>
            <br />
            <span className="text-white">Among Medical Professionals</span>
          </h1>
          
          <p className="text-lg text-purple-200 max-w-2xl mx-auto mb-6">
            Studying Budgeting Practices Among Medical Practitioners & Intern Doctors in Mumbai
          </p>

          {/* Researcher Card - Compact */}
          <div className="inline-block px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-white">Ms. Nishita Nitin Parelkar</h3>
                <p className="text-xs text-purple-200">M.Com in Advanced Accountancy | Lecturer, Patkar-Varde College</p>
                <p className="text-xs text-purple-300">4 years teaching experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left Column - Problem & Solution */}
          <div className="space-y-6">
            
            {/* The Challenge Card */}
            <div className="group relative p-6 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-red-500 to-orange-500">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">The Challenge</h3>
                </div>
                <p className="text-purple-100 text-sm mb-3 leading-relaxed">
                  Medical professionals focus entirely on clinical training, leaving minimal exposure to financial planning, taxation, or investment management.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-start gap-2 text-purple-200">
                    <span className="text-orange-400 mt-0.5">✗</span>
                    <span>Limited budgeting knowledge</span>
                  </div>
                  <div className="flex items-start gap-2 text-purple-200">
                    <span className="text-orange-400 mt-0.5">✗</span>
                    <span>Minimal tax awareness</span>
                  </div>
                  <div className="flex items-start gap-2 text-purple-200">
                    <span className="text-orange-400 mt-0.5">✗</span>
                    <span>No investment exposure</span>
                  </div>
                  <div className="flex items-start gap-2 text-purple-200">
                    <span className="text-orange-400 mt-0.5">✗</span>
                    <span>Lack of wealth planning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Practices - 3 Mini Cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Users, title: "Informal Sources", desc: "Friends & family advice", color: "from-blue-500 to-cyan-500" },
                { icon: Shield, title: "Low Risk", desc: "FDs, PPF, LIC only", color: "from-purple-500 to-pink-500" },
                { icon: PieChart, title: "No Planning", desc: "Limited budgeting", color: "from-orange-500 to-red-500" }
              ].map((item, i) => (
                <div key={i} className="group p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} w-fit mb-2 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-purple-200">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Why It Matters */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Why Literacy Programs Matter</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold text-green-300 mb-1">Professional Guidance</p>
                  <p className="text-purple-100">Structured workshops on budgeting & taxation</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold text-blue-300 mb-1">Better Decisions</p>
                  <p className="text-purple-100">Efficient management, reduced stress</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold text-purple-300 mb-1">Prevent Fraud</p>
                  <p className="text-purple-100">Avoid high-commission schemes</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold text-pink-300 mb-1">Future Ready</p>
                  <p className="text-purple-100">Build awareness for new doctors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA & QR Code */}
          <div className="space-y-6">
            
            {/* Main CTA Card with QR */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/30 shadow-2xl overflow-hidden" style={{ animation: 'glow 3s ease-in-out infinite' }}>
              {/* Animated rings behind QR */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-purple-500/30" style={{ animation: 'pulse-ring 2s ease-out infinite' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-pink-500/30" style={{ animation: 'pulse-ring 2s ease-out infinite 0.5s' }}></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                  <Stethoscope className="w-5 h-5" />
                  <span className="text-sm font-bold">Dear Doctor</span>
                </div>
                
                <h2 className="text-3xl font-black mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Your Voice Matters!
                </h2>
                
                <p className="text-purple-100 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                  Help shape financial literacy programs for medical professionals. Your insights are invaluable for this academic research.
                </p>

                {/* QR Code with Glow Effect */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative p-4 rounded-2xl bg-white shadow-2xl">
                    <img 
                      src="https://res.cloudinary.com/dr59elrhw/image/upload/v1764691080/sgob2hkjpyyebcpdd55q.jpg" 
                      alt="Survey QR Code" 
                      className="w-48 h-48 rounded-xl"
                    />
                    <div className="absolute -top-3 -right-3 p-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 shadow-lg animate-bounce">
                      <QrCode className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-3 text-sm">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-purple-100">Only 3-4 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                      <span className="text-purple-100">15 MCQs</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs max-w-sm mx-auto">
                    <div className="flex items-center gap-2 text-purple-200">
                      <span className="text-green-400">✓</span>
                      <span>Fully Confidential</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-200">
                      <span className="text-green-400">✓</span>
                      <span>Academic Use Only</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-200">
                      <span className="text-green-400">✓</span>
                      <span>Budgeting & Taxation</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-200">
                      <span className="text-green-400">✓</span>
                      <span>Investment Awareness</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://forms.gle/ccQG5hEJP1sBxFDe7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Take Survey Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <p className="text-xs text-purple-300 mt-4">
                  📋 Research by Ms. Nishita N. Parelkar & Mrs. Pooja S. Chodankar
                </p>
              </div>
            </div>

            {/* Research Objectives - Compact */}
            <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Study Objectives</h3>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  "Measure awareness of budgeting & taxation among doctors",
                  "Identify gaps in financial literacy",
                  "Assess need for structured finance seminars",
                  "Understand current expense tracking methods"
                ].map((obj, i) => (
                  <div key={i} className="flex items-start gap-2 text-purple-200">
                    <span className="text-cyan-400 mt-1">→</span>
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer - Compact */}
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Get in Touch</h3>
              <p className="text-xs text-purple-300">Questions? Reach out to the research team</p>
            </div>
            
            <div className="flex gap-3">
              <a 
                href="mailto:parelkarnishita2008@gmail.com"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 hover:border-red-500/50 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4 text-red-400" />
                <span className="text-sm text-white font-semibold">Email</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/nishita-parelkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 hover:border-blue-500/50 transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-white font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/10 text-center text-xs text-purple-300">
            <p>Patkar-Varde College, Mumbai | Ex-M.D. College | Ex-MPES Night Degree College</p>
            <p className="mt-1 text-purple-400">© 2024 Financial Literacy Research • All responses confidential</p>
          </div>
        </div>

      </div>
    </div>
  );
}
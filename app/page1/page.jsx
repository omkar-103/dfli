"use client";
import React, { useState, useEffect } from 'react';
import { Stethoscope, GraduationCap, TrendingUp, BookOpen, Mail, Linkedin, QrCode, ArrowRight, Target, Users, FileText, Brain } from 'lucide-react';

export default function ResearchWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center z-10">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-sm font-semibold text-blue-200">Academic Research Study</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
            Financial Literacy Among Medical Professionals
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            A Comprehensive Study of Budgeting Practices Among Medical Practitioners and Intern Doctors in Mumbai
          </p>

          {/* Researcher Info Card */}
          <div className="inline-block mb-12 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-500">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">Ms. Nishita Nitin Parelkar</h3>
                <p className="text-blue-200">M.Com in Advanced Accountancy</p>
              </div>
            </div>
            <div className="text-sm text-blue-100 space-y-1">
              <p>Lecturer at Patkar-Varde College, Mumbai</p>
              <p>Teaching Experience: 4 years overall | 3.5 years at college level</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 mx-auto rotate-90 text-blue-300" />
          </div>
        </div>
      </section>

      {/* Research Context Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Card */}
            <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 w-fit mb-6">
                <Brain className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">The Challenge</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                Medical professionals undergo extensive academic training focused entirely on medical science, patient care, and clinical practice. This leaves little to no exposure to financial planning, taxation, or investment management.
              </p>
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Limited knowledge of income budgeting and expense tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Minimal awareness about tax planning and deductions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Lack of exposure to investment avenues and wealth creation</span>
                </li>
              </ul>
            </div>

            {/* Right Card */}
            <div className="group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 w-fit mb-6">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Research Objectives</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                This study aims to evaluate current financial practices among medical professionals and identify areas requiring structured guidance and education.
              </p>
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Measure awareness levels of budgeting and taxation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Identify gaps in financial literacy among doctors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Assess need for finance-related seminars and courses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Patterns Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              How Doctors Make Investment Decisions
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Understanding current financial practices and decision-making patterns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Informal Sources",
                description: "Rely on friends, family, or bank managers rather than structured financial knowledge",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: TrendingUp,
                title: "Low-Risk Preferences",
                description: "Prefer traditional options like FDs, PPF, and LIC policies due to simplicity",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: FileText,
                title: "Limited Planning",
                description: "Lack structured budgeting habits and long-term retirement planning",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((item, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.gradient} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-blue-200 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500">
                <BookOpen className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-bold text-white">Why Financial Literacy Programs Matter</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-xl font-bold mb-3 text-green-300">Professional Workshops</h4>
                  <p className="text-blue-100">Guide doctors on budgeting, investment selection, taxation, and long-term financial planning</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-xl font-bold mb-3 text-blue-300">Better Decision-Making</h4>
                  <p className="text-blue-100">Enable efficient income management and reduce financial stress, allowing focus on medical practice</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-xl font-bold mb-3 text-purple-300">Prevent Mismanagement</h4>
                  <p className="text-blue-100">Protect doctors from misleading investment advice and high-commission products</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-xl font-bold mb-3 text-pink-300">Future Awareness</h4>
                  <p className="text-blue-100">Build financial awareness for future medical professionals entering the field</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Survey CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/20 shadow-2xl">
            <div className="inline-block p-6 rounded-full bg-white/10 backdrop-blur-md mb-6">
              <QrCode className="w-16 h-16 text-blue-200" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Participate in Our Research
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We invite medical practitioners and intern doctors to participate in this important study. Your responses will help shape future financial literacy programs.
            </p>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <p className="text-lg text-blue-100 mb-6">
                <strong className="text-white">15 Multiple Choice Questions</strong> covering:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <div className="flex items-center gap-3 text-blue-200">
                  <span className="text-green-400">✓</span>
                  <span>Budgeting knowledge</span>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <span className="text-green-400">✓</span>
                  <span>Investment awareness</span>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <span className="text-green-400">✓</span>
                  <span>Tax literacy</span>
                </div>
                <div className="flex items-center gap-3 text-blue-200">
                  <span className="text-green-400">✓</span>
                  <span>Need for guidance</span>
                </div>
              </div>
            </div>

            {/* QR Code with Cloudinary Image */}
            <div className="inline-block p-8 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl mb-6">
              {!imageError ? (
                <img
                  src="https://res.cloudinary.com/dr59elrhw/image/upload/v1764691080/sgob2hkjpyyebcpdd55q.jpg"
                  alt="Survey QR Code"
                  className="w-64 h-64 object-contain rounded-xl"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="w-32 h-32 mx-auto mb-4 text-gray-400" />
                    <p className="text-sm text-gray-600 font-semibold">Scan QR Code</p>
                    <p className="text-xs text-gray-500">to access survey</p>
                  </div>
                </div>
              )}
              <p className="text-sm text-gray-700 mt-4 font-semibold">Google Forms Survey</p>
            </div>

            <p className="text-sm text-blue-200">
              Survey takes approximately 5-7 minutes to complete
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Get in Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a 
                href="mailto:parelkarnishita2008@gmail.com"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-red-500 to-pink-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-blue-200">Email</p>
                  <p className="text-white font-semibold text-sm">parelkarnishita2008@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/nishita-parelkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-blue-200">LinkedIn</p>
                  <p className="text-white font-semibold text-sm">nishita-parelkar</p>
                </div>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <p className="text-blue-200 mb-2">
                <strong className="text-white">Affiliation:</strong> Patkar-Varde College, Mumbai
              </p>
              <p className="text-sm text-blue-300">
                Ex-Assistant Professor – M.D. College | Ex-Lecturer – MPES Night Degree College
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-200 text-sm">
            © 2024 Financial Literacy Research Study | Ms. Nishita Nitin Parelkar
          </p>
          <p className="text-blue-300 text-xs mt-2">
            All responses are confidential and will be used solely for academic research purposes
          </p>
        </div>
      </footer>
    </div>
  );
}
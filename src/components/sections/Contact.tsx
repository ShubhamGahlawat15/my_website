import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { resumeData } from '../../data/resumeData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, CheckCircle2, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Mailto fallback link
    const mailtoUrl = `mailto:${resumeData.personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry for Shubham Gahlawat'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="07"
          title="Let's Build Something"
          subtitle="Get in touch for web development opportunities, internships, software projects, or technical collaboration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Resume Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <GlassCard glowColor="cyan" className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Direct Contact Channels
                  </h3>
                  <p className="text-xs font-mono text-sky-400">
                    // Open for Web Dev Internships
                  </p>
                </div>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4">
                <a
                  href={`mailto:${resumeData.personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 hover:bg-sky-500/10 border border-white/10 hover:border-sky-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">
                      Email Address
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-sky-300">
                      {resumeData.personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${resumeData.personalInfo.phone}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 hover:bg-sky-500/10 border border-white/10 hover:border-sky-500/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">
                      Phone Number
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-sky-300">
                      {resumeData.personalInfo.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">
                      Current Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100">
                      {resumeData.personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Download Resume PDF Banner */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={resumeData.personalInfo.resumePdfUrl}
                  download="Shubham_Gahlawat_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-mono text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard glowColor="purple" className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(52,211,153,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Prepared!
                  </h3>
                  <p className="text-xs font-mono text-slate-300 max-w-md mx-auto">
                    Opening your email client to send message to <strong className="text-sky-300">{resumeData.personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl font-mono text-xs bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">
                      Send a Message
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      // Fill out the form below to initiate contact directly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-500/60 focus:bg-sky-500/5 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-500/60 focus:bg-sky-500/5 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Web Developer Internship Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-500/60 focus:bg-sky-500/5 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Shubham, I saw your portfolio and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-sky-500/60 focus:bg-sky-500/5 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-mono text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { MapPin, Send, CheckCircle2, Clock, Landmark, MessageSquare, Mail } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { SITE_CONFIG } from '../data/site';
import { buildChapterContactMailto } from '../utils/contact';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      window.location.href = buildChapterContactMailto(formData);
      setFormSubmitted(true);
    }
  };

  return (
    <div className="space-y-12">
      <SectionHeader
        badge="GET IN TOUCH"
        title="Contact IEEE CASS SBC IIT Jammu"
        subtitle="Connect with chapter officers, faculty coordinators, and student leads for technical collaborations, workshops, or membership inquiries."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Institutional Information & Location (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl bg-white border border-sky-200 p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow">
            
            <div className="flex items-center gap-4">
              <img
                src="/images/iit-jammu-logo.png"
                alt="IIT Jammu Logo"
                className="w-14 h-14 object-contain"
              />
              <div className="space-y-0.5">
                <span className="text-xs font-sans text-sky-700 uppercase tracking-widest block font-bold">
                  OFFICIAL CHAPTER
                </span>
                <h3 className="text-lg font-extrabold text-[#003366]">
                  IEEE CASS SBC
                </h3>
                <p className="text-xs text-slate-600 font-semibold">
                  IIT Jammu
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-sky-100 text-sm">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                <div>
                  <strong className="block text-[#003366] font-bold mb-0.5">Campus Location</strong>
                  <span className="text-slate-600 leading-relaxed block text-xs sm:text-sm">
                    Pushkar Bhawan / Department of Electrical Engineering<br />
                    Indian Institute of Technology Jammu<br />
                    Jagti, PO Nagrota, NH-44, Jammu – 181221<br />
                    Jammu and Kashmir, India
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                <div>
                  <strong className="block text-[#003366] font-bold mb-0.5">Chapter Office Hours</strong>
                  <span className="text-slate-600 text-xs sm:text-sm">
                    Monday – Friday: 09:00 AM – 05:00 PM IST<br />
                    (During academic semesters)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                <div>
                  <strong className="block text-[#003366] font-bold mb-0.5">Chapter Email</strong>
                  <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-sky-700 hover:text-sky-900 underline underline-offset-2 break-all">
                    {SITE_CONFIG.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Landmark className="w-5 h-5 text-sky-600 shrink-0 mt-1" />
                <div>
                  <strong className="block text-[#003366] font-bold mb-0.5">Affiliation Network</strong>
                  <span className="text-slate-600 text-xs sm:text-sm">
                    IEEE Circuits and Systems Society (CASS)<br />
                    IEEE Delhi Section / IEEE India Council
                  </span>
                </div>
              </div>
            </div>

            {/* Stylized Campus Map Coordinates Card */}
            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2 font-sans text-xs">
              <div className="flex justify-between text-slate-600">
                <span>GPS COORDINATES:</span>
                <span className="text-sky-700 font-bold">32.7984° N, 74.8967° E</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>PIN CODE:</span>
                <span className="text-slate-800 font-semibold">181221 (Jammu &amp; Kashmir)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>PRIMARY VENUE:</span>
                <span className="text-slate-800 font-semibold">11AC2023 Pushkar Bhawan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Chapter Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-white border border-sky-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-sky-50 border-2 border-sky-400 flex items-center justify-center text-sky-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#003366]">Email Draft Prepared</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your email app should open with a draft addressed to {SITE_CONFIG.contactEmail}. Review it and press Send to deliver your inquiry.
                </p>
                <p className="text-xs text-slate-500">Email is sent only after you send the prepared message from your email app.</p>
                <a
                  href={buildChapterContactMailto(formData)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-sm font-bold text-white transition-colors"
                >
                  <Mail className="w-4 h-4" /> Open Email Draft
                </a>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sm font-bold text-sky-700 border border-sky-200 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 pb-3 border-b border-sky-100">
                  <MessageSquare className="w-4 h-4 text-sky-600" />
                  <h3 className="text-base font-bold text-[#003366]">Chapter Correspondence Form</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-sans text-slate-600 uppercase font-bold">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Jane Doe / Student Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 border border-sky-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-sans text-slate-600 uppercase font-bold">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="your.email@institution.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 border border-sky-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-sans text-slate-600 uppercase font-bold">
                    Inquiry Topic
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 border border-sky-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm text-slate-800 outline-none transition-all font-medium"
                  >
                    <option value="General Inquiry">General Chapter Inquiry</option>
                    <option value="Event Collaboration">Technical Talk / Workshop Collaboration</option>
                    <option value="Student Membership">CASS Student Membership</option>
                    <option value="Research & Projects">Research &amp; Hardware Projects</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-sans text-slate-600 uppercase font-bold">
                    Message / Proposal *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Provide details about your query or proposed collaboration with the chapter..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50/70 border border-sky-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-[#0088C2] hover:from-sky-600 hover:to-sky-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <Send className="w-4 h-4" />
                  <span>Prepare Email</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { MapPin, Send, CheckCircle2, Clock, Landmark, MessageSquare, ExternalLink, AlertCircle, Phone, User, Mail, CreditCard } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { SITE_CONFIG } from '../data/site';
import { buildChapterContactMailto } from '../utils/contact';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipId: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message or comments are required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    const invalidFields = Object.keys(errs);
    if (invalidFields.length > 0) {
      document.getElementById(`contact-${invalidFields[0]}`)?.focus();
    }
    return invalidFields.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      window.location.href = buildChapterContactMailto({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        membershipId: formData.membershipId,
        subject: 'Contact form inquiry',
        message: formData.message,
      });
      setFormSubmitted(true);
    }
  };

  return (
    <div className="page-shell space-y-12 sm:space-y-16">
      
      {/* Page Header */}
      <SectionHeader
        level="h1"
        badge="GET IN TOUCH"
        title="Contact Us"
        subtitle="Connect with the IEEE Circuits and Systems Society Student Branch Chapter at Indian Institute of Technology Jammu."
      />

      {/* Main Two-Column Structure: LEFT Info, RIGHT Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN: Chapter Contact Information (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="surface-card p-5 sm:p-8 space-y-6">
            
            {/* Header with Emblem */}
            <div className="flex items-center gap-4 pb-4 border-b border-sky-100">
              <div className="w-14 h-14 rounded-2xl bg-white border border-sky-200 p-1 flex items-center justify-center shadow-xs shrink-0">
                <img
                  src="/images/iit-jammu-logo.png"
                  alt="IIT Jammu Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-sans text-sky-700 uppercase tracking-widest block font-bold">
                  STUDENT BRANCH CHAPTER
                </span>
                <h3 className="text-lg font-extrabold text-[#003366]">
                  IEEE CASS SBC
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Chapter Code: {SITE_CONFIG.chapterCode} • {SITE_CONFIG.region}
                </p>
              </div>
            </div>

            {/* Contact Details List */}
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-200 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#003366] font-bold mb-0.5">Campus Department</strong>
                  <span className="text-slate-600 leading-relaxed block text-xs sm:text-sm">
                    {SITE_CONFIG.campusAddress.department}<br />
                    {SITE_CONFIG.campusAddress.institution}<br />
                    {SITE_CONFIG.campusAddress.street}<br />
                    {SITE_CONFIG.campusAddress.city}, {SITE_CONFIG.campusAddress.state} – {SITE_CONFIG.campusAddress.pincode}, {SITE_CONFIG.campusAddress.country}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-200 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#003366] font-bold mb-0.5">Chapter Working Hours</strong>
                  <span className="text-slate-600 text-xs sm:text-sm">
                    Monday – Friday: 09:00 AM – 05:00 PM IST<br />
                    (During academic semesters)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-200 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#003366] font-bold mb-0.5">Chapter Email</strong>
                  <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-sky-700 hover:text-sky-900 underline underline-offset-2 break-all">
                    {SITE_CONFIG.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-200 shrink-0">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-[#003366] font-bold mb-0.5">Affiliation Network</strong>
                  <span className="text-slate-600 text-xs sm:text-sm">
                    IEEE Circuits and Systems Society (CASS)<br />
                    {SITE_CONFIG.section} • {SITE_CONFIG.region}
                  </span>
                </div>
              </div>
            </div>

            {/* GPS & Quick Venue Coordinates */}
            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2 font-sans text-xs">
              <div className="info-row text-slate-600">
                <span>GPS COORDINATES:</span>
                <span className="text-sky-700 font-bold">{SITE_CONFIG.campusAddress.coordinates.latitude}, {SITE_CONFIG.campusAddress.coordinates.longitude}</span>
              </div>
              <div className="info-row text-slate-600">
                <span>POSTAL CODE:</span>
                <span className="text-slate-800 font-semibold">{SITE_CONFIG.campusAddress.pincode}</span>
              </div>
              <div className="info-row text-slate-600">
                <span>PRIMARY HALL:</span>
                <span className="text-slate-800 font-semibold">{SITE_CONFIG.campusAddress.primaryVenue}</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Modern Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="surface-card p-5 sm:p-8 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-sky-100">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-600" />
                <h2 className="text-lg font-bold text-[#003366]">Send an Inquiry</h2>
              </div>
              <span className="metadata-badge text-xs">Email inquiry</span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-sky-50 border-2 border-sky-400 flex items-center justify-center text-sky-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#003366]">Email Draft Prepared</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your email app should open with a draft addressed to {SITE_CONFIG.contactEmail}. Review it and press Send to deliver your inquiry.
                </p>
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-800 max-w-md mx-auto text-left flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    Email is sent only after you send the prepared message from your email app.
                  </span>
                </div>
                <a
                  href={buildChapterContactMailto({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    membershipId: formData.membershipId,
                    subject: 'Contact form inquiry',
                    message: formData.message,
                  })}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-sm font-bold text-white transition-colors"
                >
                  <Mail className="w-4 h-4" /> Open Email Draft
                </a>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', membershipId: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sm font-bold text-sky-700 border border-sky-200 transition-colors"
                >
                  Compose Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-label="Chapter inquiry form">
                
                {/* Notice regarding backend */}
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-sky-600" />
                  <span>
                    Submitting opens an email draft addressed to <a className="font-semibold underline underline-offset-2" href={`mailto:${SITE_CONFIG.contactEmail}`}>{SITE_CONFIG.contactEmail}</a>. Review and send it from your email app.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="field-label">
                      <User className="w-3 h-3 text-sky-600" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      id="contact-name"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      type="text"
                      placeholder="e.g. Dr. Jane Doe / Student Name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`field-input ${
                        errors.name
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-sky-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                      }`}
                    />
                    {errors.name && <span id="contact-name-error" className="field-error" role="alert">{errors.name}</span>}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="field-label">
                      <Mail className="w-3 h-3 text-sky-600" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      id="contact-email"
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      type="email"
                      placeholder="your.email@institution.edu"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`field-input ${
                        errors.email
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-sky-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                      }`}
                    />
                    {errors.email && <span id="contact-email-error" className="field-error" role="alert">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="field-label">
                      <Phone className="w-3 h-3 text-sky-600" />
                      <span>Phone Number (Optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      autoComplete="tel"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="field-input"
                    />
                  </div>

                  {/* Membership ID Field (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-memid" className="field-label">
                      <CreditCard className="w-3 h-3 text-sky-600" />
                      <span>IEEE Membership ID (Optional)</span>
                    </label>
                    <input
                      id="contact-memid"
                      type="text"
                      placeholder="e.g. 9XXXXXXXX (if IEEE member)"
                      value={formData.membershipId}
                      onChange={(e) => setFormData({ ...formData, membershipId: e.target.value })}
                      className="field-input"
                    />
                  </div>
                </div>

                {/* Message / Comments */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="field-label">
                    Message / Comments *
                  </label>
                  <textarea
                    id="contact-message"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    rows={5}
                    placeholder="Provide details about your inquiry, workshop proposal, or collaborative idea..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`field-input resize-y ${
                      errors.message
                        ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                        : 'border-sky-200 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200'
                    }`}
                  ></textarea>
                  {errors.message && <span id="contact-message-error" className="field-error" role="alert">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="button-primary w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  <span>Prepare Email</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* LOCATION SECTION (BELOW FORM) */}
      <section className="space-y-6 pt-6 border-t border-sky-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
              CAMPUS ACCESSIBILITY
            </span>
            <h2 className="subsection-heading">
              Location &amp; Directions
            </h2>
          </div>

          <a
            href={SITE_CONFIG.campusAddress.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-700 transition-colors w-fit shadow-2xs"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-sky-600" />
          </a>
        </div>

        {/* Location Display Card */}
        <div className="surface-card p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <span className="block text-xs font-sans text-slate-400 font-bold uppercase">INSTITUTION</span>
            <h4 className="text-base font-bold text-[#003366]">Indian Institute of Technology Jammu</h4>
            <p className="text-xs text-slate-600">Main Campus, Jagti, Nagrota</p>
          </div>

          <div className="space-y-1">
            <span className="block text-xs font-sans text-slate-400 font-bold uppercase">PINCODE &amp; STATE</span>
            <h4 className="text-base font-bold text-slate-800">181221, Jammu &amp; Kashmir</h4>
            <p className="text-xs text-slate-600">National Highway 44 (NH-44), India</p>
          </div>

          <div className="space-y-1">
            <span className="block text-xs font-sans text-slate-400 font-bold uppercase">CONFERENCE VENUE</span>
            <h4 className="text-base font-bold text-sky-700">Pushkar Bhawan (11AC2023)</h4>
            <p className="text-xs text-slate-600">Department of Electrical Engineering</p>
          </div>
        </div>
      </section>

    </div>
  );
};

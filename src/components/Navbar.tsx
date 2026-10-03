import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavPage } from '../types';

interface NavbarProps {
  activeTab: NavPage;
  onTabChange: (tab: NavPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'members', label: 'Members' },
    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact' },
    { id: 'gallery', label: 'Gallery' },
  ];

  const handleNavClick = (page: NavPage) => {
    onTabChange(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className={'site-header ' + (scrolled ? 'site-header-scrolled' : '')}>
      <div className="site-container flex items-center justify-between gap-6 h-20">
        <button onClick={() => handleNavClick('home')} className="shrink-0 rounded-md" aria-label="IEEE IIT Jammu Home">
          <img src="/images/ieee-iit-jammu-header.png" alt="IEEE Indian Institute of Technology Jammu" className="object-contain w-[146px] h-[52px] sm:w-[176px] sm:h-[62px]" decoding="async" />
        </button>
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              aria-current={activeTab === item.id ? 'page' : undefined}
              className={'navigation-link ' + (activeTab === item.id ? 'navigation-link-active' : '')}
            >{item.label}</button>
          ))}
        </nav>
        <button
          ref={menuButtonRef}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-sky-200 text-[#003366] hover:bg-sky-50"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
      </div>
      {mobileMenuOpen && (
        <nav id="mobile-navigation" className="lg:hidden bg-white border-t border-sky-100" aria-label="Mobile navigation">
          <div className="site-container grid grid-cols-2 gap-2 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-current={activeTab === item.id ? 'page' : undefined}
                className={'navigation-link flex items-center justify-between ' + (activeTab === item.id ? 'navigation-link-active' : '')}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" aria-hidden="true" />
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

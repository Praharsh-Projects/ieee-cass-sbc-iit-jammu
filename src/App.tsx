import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CircuitBackground } from './components/CircuitBackground';
import { HomePage } from './pages/HomePage';
import { MembersPage } from './pages/MembersPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { GalleryPage } from './pages/GalleryPage';
import { NavPage } from './types';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavPage>('home');

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = (window.location.hash.replace('#', '') || 'home') as NavPage;
      const validTabs: NavPage[] = ['home', 'members', 'events', 'contact', 'about-us', 'gallery'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: NavPage) => {
    setActiveTab(tab);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleTabChange}
          />
        );
      case 'members':
        return <MembersPage />;
      case 'events':
        return <EventsPage />;
      case 'contact':
        return <ContactPage />;
      case 'about-us':
        return <AboutUsPage />;
      case 'gallery':
        return <GalleryPage />;
      default:
        return (
          <HomePage
            onNavigate={handleTabChange}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Background Circuit Visual Layer in White & Sky Blue */}
      <CircuitBackground />

      {/* Main Responsive Sticky Navbar (6 Primary Navigation Items) */}
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 min-w-0" data-page={activeTab}>
        {renderActivePage()}
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={handleTabChange} />
    </div>
  );
};

export default App;

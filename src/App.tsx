import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { PoliceBhartiPage } from './pages/PoliceBhartiPage';
import { ArmyBhartiPage } from './pages/ArmyBhartiPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ResultsPage } from './pages/ResultsPage';
import { GalleryPage } from './pages/GalleryPage';
import { BhartiUpdatesPage } from './pages/BhartiUpdatesPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-surface-warm text-slate-800">
        <AnnouncementBar />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/police-bharti" element={<PoliceBhartiPage />} />
            <Route path="/courses/army-bharti" element={<ArmyBhartiPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/bharti-updates" element={<BhartiUpdatesPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <MobileStickyBar />
      </div>
    </Router>
  );
};

export default App;

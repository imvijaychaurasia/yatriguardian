import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import NewsTickerBar from './components/layout/NewsTickerBar';
import LiveChat from './components/common/LiveChat';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const VisaServicesPage = lazy(() => import('./pages/VisaServicesPage'));
const PassportServicesPage = lazy(() => import('./pages/PassportServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <NewsTickerBar />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/visa-services" element={<VisaServicesPage />} />
              <Route path="/passport-services" element={<PassportServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <LiveChat />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
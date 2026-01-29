
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { Toaster } from '@/components/ui/toaster';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;

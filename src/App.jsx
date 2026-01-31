
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CorporateServicesPage from './pages/CorporateServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WhyRentalPage from './pages/WhyRentalPage';
import QuickRentalPage from './pages/QuickRentalPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import KVKKPage from './pages/KVKKPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/urunler" element={<ProductsPage />} />
          <Route path="/kurumsal-hizmetler" element={<CorporateServicesPage />} />
          <Route path="/neden-kiralama" element={<WhyRentalPage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/hizli-kirala" element={<QuickRentalPage />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicyPage />} />
          <Route path="/kvkk" element={<KVKKPage />} />
          <Route path="/kullanim-kosullari" element={<TermsOfServicePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

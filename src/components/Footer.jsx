
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/ecr-logo.png"
                alt="ECR Etkinlik Bilgisayar"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              2014 yılından bu yana, 11.000'den fazla ürün stoğu ve profesyonel ekibimizle
              Türkiye'nin lider teknoloji kiralama çözüm ortağıyız.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'linkedin', 'twitter'].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                  aria-label={social}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'facebook' && <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />}
                    {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
                    {social === 'linkedin' && <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />}
                    {social === 'twitter' && <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Ana Sayfa', path: '/' },
                { name: 'Kurumsal Hizmetler', path: '/kurumsal-hizmetler' },
                { name: 'Ürünler', path: '/urunler' },
                { name: 'Neden Kiralama?', path: '/neden-kiralama' },
                { name: 'Hakkımızda', path: '/hakkimizda' },
                { name: 'İletişim', path: '/iletisim' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3">
              {[
                'Kısa Süreli Kiralama',
                'Uzun Dönem Kiralama',
                'Kayıt Sistemleri',
                'Marka Çözümleri',
                'Network Sistemleri',
                'Teknik Destek'
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/kurumsal-hizmetler"
                    className="group flex items-center text-gray-400 text-sm hover:text-red-500 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity text-red-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-gray-900 rounded-lg flex-shrink-0">
                  <MapPin className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">
                  İstoç 32. Ada (2452. Sok) No:78-80, Mahmutbey, Bağcılar, İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-gray-900 rounded-lg flex-shrink-0">
                  <Phone className="w-4 h-4 text-red-500" />
                </div>
                <a href="tel:08502287574" className="text-gray-400 text-sm hover:text-white transition-colors">
                  0850 228 75 74
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-gray-900 rounded-lg flex-shrink-0">
                  <Mail className="w-4 h-4 text-red-500" />
                </div>
                <a href="mailto:info@etkinlikbilgisayar.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                  info@etkinlikbilgisayar.com
                </a>
              </li>
            </ul>

            {/* Quick CTA */}
            <Link
              to="/hizli-kirala"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-lg text-sm font-bold hover:bg-red-700 transition-colors"
            >
              Hızlı Kirala <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} ECR Etkinlik Bilgisayar Teknolojileri A.Ş. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/gizlilik-politikasi" className="hover:text-red-500 transition-colors">Gizlilik Politikası</Link>
            <Link to="/kvkk" className="hover:text-red-500 transition-colors">KVKK</Link>
            <Link to="/kullanim-kosullari" className="hover:text-red-500 transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

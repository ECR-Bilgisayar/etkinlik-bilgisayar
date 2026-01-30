
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Send, Loader2, Clock, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mesajınız Alındı!",
        description: "En kısa sürede uzman ekibimiz sizinle iletişime geçecektir.",
        duration: 5000,
        className: "bg-green-600 text-white border-green-500"
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Merkez Ofis",
      content: "İstoç 32. Ada (2452. Sok) No:78-80, Mahmutbey, Bağcılar, İstanbul",
      link: "https://goo.gl/maps/example"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefon & WhatsApp",
      content: "0850 228 75 74",
      link: "tel:08502287574"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "E-Posta",
      content: "info@etkinlikbilgisayar.com",
      link: "mailto:info@etkinlikbilgisayar.com"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00",
      content: "Cumartesi 09:00 - 13:00",
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>İletişim | ECR Etkinlik Bilgisayar - 0850 228 75 74</title>
        <meta name="description" content="ECR Etkinlik Bilgisayar iletişim bilgileri. Adres: İstoç, Mahmutbey, İstanbul. Telefon: 0850 228 75 74. E-posta: info@etkinlikbilgisayar.com. 7/24 destek." />
        <meta name="keywords" content="ECR iletişim, etkinlik bilgisayar telefon, teknoloji kiralama iletişim, bilgisayar kiralama İstanbul" />
        <link rel="canonical" href="https://etkinlikbilgisayar.com/iletisim" />
        <meta property="og:title" content="İletişim | ECR Etkinlik Bilgisayar" />
        <meta property="og:description" content="ECR Etkinlik Bilgisayar iletişim. Telefon: 0850 228 75 74, E-posta: info@etkinlikbilgisayar.com" />
        <meta property="og:url" content="https://etkinlikbilgisayar.com/iletisim" />
      </Helmet>

      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-bold text-red-500 tracking-wider uppercase mb-4">Bize Ulaşın</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">İletişime Geçin</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Sorularınız, teklif talepleriniz veya iş birliği önerileriniz için buradayız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl hover:border-red-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-600 text-sm hover:text-red-600 transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Bize Yazın</h2>
              <p className="text-gray-600 mb-8">
                Formu doldurarak mesajınızı iletebilir veya doğrudan arayabilirsiniz.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white"
                      placeholder="0555 555 55 55"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Posta *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white"
                    placeholder="ornek@sirket.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white appearance-none cursor-pointer"
                  >
                    <option value="">Seçiniz</option>
                    <option value="teklif">Fiyat Teklifi Almak İstiyorum</option>
                    <option value="uzun-donem">Uzun Dönem Kiralama</option>
                    <option value="destek">Teknik Destek Talebi</option>
                    <option value="bilgi">Genel Bilgi</option>
                    <option value="isbirligi">İş Birliği Teklifi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız *</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white resize-none"
                    placeholder="Mesajınızı buraya yazınız..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> GÖNDERİLİYOR...
                    </>
                  ) : (
                    <>
                      MESAJ GÖNDER <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Konumumuz</h2>


              {/* Map */}
              <div className="w-full h-80 bg-gray-100 rounded-2xl overflow-hidden relative mb-8 border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.647355280252!2d28.80556507655073!3d41.05471497134444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5596720498b%3A0xe5a396495b6a7845!2zxLBzdG_Dpw!5e0!3m2!1str!2str!4v1703600000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                  className="absolute inset-0"
                ></iframe>
              </div>


            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

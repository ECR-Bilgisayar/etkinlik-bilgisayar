
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  Monitor,
  Tablet,
  Tv,
  Printer,
  Speaker,
  Headphones,
  Gamepad2,
  Network,
  CircleDollarSign,
  TrendingUp,
  Clock,
  ShieldCheck,
  Wrench,
  Package,
  Users,
  BadgeCheck,
  Phone,
  CheckCircle2,
  Building2,
  CalendarDays,
  Layers,
  Cpu
} from 'lucide-react';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Kurumsal Hizmetler
  const corporateServices = [
    {
      icon: <CalendarDays className="w-6 h-6" />,
      title: "Kısa Süreli Kiralama",
      description: "Etkinlik, kongre, fuar ve toplantılarınız için günlük, haftalık teknoloji kiralama."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Uzun Dönem Kiralama",
      description: "İşletmeler için aylık ve yıllık bazda maliyet avantajlı teknoloji çözümleri."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Kayıt Sistemleri",
      description: "Akreditasyon, yaka kartı baskı ve QR kodlu giriş-çıkış sistemleri."
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Marka Çözümleri",
      description: "Markanıza özel yazılım, oyun, uygulama ve AR deneyimleri geliştirme."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Network Sistemleri",
      description: "Fiber, Gigabit ve WiFi altyapı kurulumu, profesyonel network çözümleri."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Teknik Destek",
      description: "7/24 profesyonel teknik destek, yerinde kurulum ve müdahale hizmeti."
    }
  ];

  // Ürün Kategorileri
  const productCategories = [
    { icon: <Monitor className="w-6 h-6" />, title: "Bilgisayar & Laptop", count: "500+" },
    { icon: <Tablet className="w-6 h-6" />, title: "iPad & Tablet", count: "1000+" },
    { icon: <Tv className="w-6 h-6" />, title: "TV & Görüntü Sistemleri", count: "300+" },
    { icon: <Printer className="w-6 h-6" />, title: "Yazıcı & Baskı", count: "200+" },
    { icon: <Headphones className="w-6 h-6" />, title: "VR & AR Teknolojileri", count: "150+" },
    { icon: <Speaker className="w-6 h-6" />, title: "Ses Sistemleri", count: "100+" },
    { icon: <Gamepad2 className="w-6 h-6" />, title: "Gaming & Konsol", count: "200+" },
    { icon: <Cpu className="w-6 h-6" />, title: "Diğer Ekipmanlar", count: "1000+" },
  ];

  // Neden Kiralama Avantajları
  const rentalBenefits = [
    {
      icon: <CircleDollarSign className="w-7 h-7" />,
      title: "Finansal Avantaj",
      description: "Yüksek satın alma maliyetlerinden kurtulun. Nakit akışınızı koruyun, bütçenizi etkili yönetin."
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Güncel Teknoloji",
      description: "Her zaman en son teknolojiye erişin. Eskiyen donanım sorunu yaşamayın."
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Esneklik",
      description: "Proje bazlı ihtiyaçlarınıza göre ölçeklendirin. İhtiyacınız bittiğinde iade edin."
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Bakım & Destek Dahil",
      description: "Arıza, bakım ve teknik destek tamamen bizden. Operasyonel yük sizden kalksın."
    }
  ];

  // İstatistikler
  const stats = [
    { label: "Ürün Stoğu", value: "11.000+" },
    { label: "Yıllık Tecrübe", value: "10+" },
    { label: "Kurumsal Müşteri", value: "1900+" },
    { label: "Şehir Hizmet Alanı", value: "81" },
  ];

  // Referanslar
  const testimonials = [
    {
      text: "ECR ile çalışmak büyük bir ayrıcalık. İhtiyaçlarımıza yönelik çözümleri hızlı ve profesyonel bir şekilde sunuyorlar. 'Bizde yok' dememelerini çok takdir ediyoruz.",
      name: "Agah ÖZBERK",
      role: "Event Director"
    },
    {
      text: "Herşeyden önce sahada tamamen çözüme yönelik, kısa sürede büyük işler başaran, yenilikçi, konusunda uzman olarak gördüğüm bir firma.",
      name: "Çetin GÖKKAYA",
      role: "Event Director"
    },
    {
      text: "Firma kuruluşundan beri tanıdığım, kadrosu hiç değişmeyen, tecrübe ile işine sarılan, severek çalıştığımız bir firma. Teşekkürler ECR.",
      name: "Anıl MATUR",
      role: "Project Manager"
    }
  ];

  return (
    <>
      <Helmet>
        <title>ECR Etkinlik Bilgisayar | Türkiye'nin En Geniş Teknoloji Kiralama Parkuru</title>
        <meta name="description" content="11.000+ ürün stoğu ile Türkiye'nin lider teknoloji kiralama şirketi. Bilgisayar, laptop, iPad, tablet, LED TV, VR, ses sistemi kiralama. 10 yıllık tecrübe, 81 ilde hizmet, 7/24 destek." />
        <meta name="keywords" content="bilgisayar kiralama, laptop kiralama, iPad kiralama, tablet kiralama, LED TV kiralama, VR kiralama, teknoloji kiralama, etkinlik ekipman kiralama, kurumsal kiralama" />
        <link rel="canonical" href="https://etkinlikbilgisayar.com/" />
        <meta property="og:title" content="ECR Etkinlik Bilgisayar | Türkiye'nin En Geniş Teknoloji Kiralama Parkuru" />
        <meta property="og:description" content="11.000+ ürün stoğu ile Türkiye'nin lider teknoloji kiralama şirketi. Bilgisayar, tablet, görüntü sistemleri ve kurumsal çözümler." />
        <meta property="og:url" content="https://etkinlikbilgisayar.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section - Kırmızı Siyah Premium */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC2626' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Red Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Sol Taraf - Metin */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                2014'ten Beri Sektör Lideri
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Türkiye'nin <br />
                <span className="text-red-500">En Geniş Teknoloji</span><br />
                Kiralama Parkuru
              </h1>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                <strong className="text-white">11.000'den fazla ürün</strong> stoğumuz, profesyonel ekibimiz ve
                müşteri odaklı hizmet anlayışımızla tüm teknolojik ihtiyaçlarınızın
                tek adresi ECR Etkinlik Bilgisayar.
              </p>

              {/* Key Points */}
              <div className="flex flex-wrap gap-4 mb-10">
                {["11.000+ Ürün", "7/24 Destek", "81 İl Hizmeti", "Aynı Gün Teslimat"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/hizli-kirala"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-base transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5"
                >
                  Hızlı Kiralama Talebi
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/iletisim"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-700 text-white rounded-xl font-bold text-base transition-all duration-300 hover:border-red-600 hover:bg-red-600/10"
                >
                  <Phone className="w-5 h-5" />
                  0850 228 75 74
                </Link>
              </div>
            </motion.div>

            {/* Sağ Taraf - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-red-600/50 transition-all duration-300 group"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neden Kiralama? Section */}
      <section className="py-24 bg-white" id="neden-kiralama">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <span className="inline-block text-sm font-bold text-red-600 tracking-wider uppercase mb-4">Avantajlar</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Neden Teknoloji Kiralama?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Teknoloji yatırımlarınızı optimize ederken operasyonel verimliliğinizi artırın.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {rentalBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-gray-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-xl border border-transparent hover:border-gray-200"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-gray-700 mb-6 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/neden-kiralama"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Detaylı Bilgi Al
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kurumsal Hizmetler Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <div>
              <span className="inline-block text-sm font-bold text-red-500 tracking-wider uppercase mb-4">Kurumsal Çözümler</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Piyasanın En Geniş <br />Hizmet Yelpazesi
              </h2>
              <p className="text-gray-400 max-w-xl">
                Sadece ekipman kiralaması değil, uçtan uca teknoloji çözümleri sunuyoruz.
              </p>
            </div>
            <Link
              to="/kurumsal-hizmetler"
              className="flex items-center gap-2 text-red-500 font-semibold hover:text-red-400 transition-colors whitespace-nowrap"
            >
              Tüm Hizmetler <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-gray-900 hover:bg-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-red-600/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ürün Kategorileri Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <div>
              <span className="inline-block text-sm font-bold text-red-600 tracking-wider uppercase mb-4">Ürün Parkuru</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                11.000+ Ürün <br />Tek Çatı Altında
              </h2>
              <p className="text-gray-600 max-w-xl">
                Etkinlikleriniz ve kurumsal ihtiyaçlarınız için adet sınırı olmadan tüm teknolojik çözümler.
              </p>
            </div>
            <Link
              to="/urunler"
              className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors whitespace-nowrap"
            >
              Tüm Ürünler <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to="/urunler"
                  className="group block bg-white rounded-xl p-6 border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      {cat.icon}
                    </div>
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">{cat.count}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors">{cat.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Uzun Dönem Kiralama Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="inline-block text-sm font-bold text-red-500 tracking-wider uppercase mb-4">Kurumsal Avantaj</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Uzun Dönem Kiralama ile<br />
                  <span className="text-gray-400">Maliyetlerinizi Düşürün</span>
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  İşletmelerin teknolojik cihaz ihtiyaçları günümüzde giderek artmaktadır.
                  Sürekli yenilenen teknolojik cihazların maliyetleri bütçelerinizi zorlamasın.
                  Uzun dönem teknoloji kiralama ile maliyet tasarrufu sağlayın.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Satın alma maliyeti yok, nakit akışı korunur",
                    "Güncel teknolojiye sürekli erişim",
                    "Bakım ve onarım hizmetleri dahil",
                    "Esnek sözleşme süreleri",
                    "Vergi avantajı sağlar"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/iletisim"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-bold transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30"
                >
                  Teklif Alın
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "%40", label: "Maliyet Tasarrufu" },
                  { value: "0₺", label: "Bakım Maliyeti" },
                  { value: "7/24", label: "Teknik Destek" },
                  { value: "Esnek", label: "Sözleşme Süresi" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-red-600/50 transition-colors">
                    <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referanslar */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-red-600 tracking-wider uppercase mb-4">Referanslar</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Binlerce memnun müşterimizin deneyimlerinden bazıları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6 text-red-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Projeniz İçin Doğru Teknolojiyi Bulalım
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            İhtiyaçlarınıza özel teknoloji çözümleri için uzman ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/hizli-kirala"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-red-600 text-white rounded-xl font-bold text-base transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30"
            >
              Hızlı Kiralama Talebi
            </Link>
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-transparent border-2 border-gray-700 text-white rounded-xl font-bold text-base transition-all duration-300 hover:bg-gray-800 hover:border-gray-600"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

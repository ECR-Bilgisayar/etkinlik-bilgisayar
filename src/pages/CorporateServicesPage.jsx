
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  CalendarDays,
  Building2,
  Layers,
  BadgeCheck,
  Network,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Phone,
  Clock,
  Users,
  Shield,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporateServicesPage = () => {
  const services = [
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: "Kısa Süreli Kiralama",
      description: "Etkinlik, kongre, fuar, seminer ve toplantılarınız için günlük veya haftalık bazda teknoloji kiralama hizmetleri sunuyoruz.",
      features: [
        "Günlük, haftalık esnek kiralama",
        "Stoktan anında teslimat",
        "Yerinde kurulum desteği",
        "Etkinlik süresince teknik destek"
      ]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Uzun Dönem Kiralama",
      description: "İşletmeler için aylık ve yıllık bazda maliyet avantajlı, esnek süreli teknoloji kiralama çözümleri.",
      features: [
        "Maliyet tasarrufu (%40'a kadar)",
        "Vergi avantajı (hizmet faturası)",
        "Güncel teknolojiye sürekli erişim",
        "Bakım ve onarım dahil"
      ]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Kayıt Sistemleri Kiralama",
      description: "Etkinliklerde giriş-çıkış kontrolü, akreditasyon ve katılımcı yönetimi için profesyonel sistemler.",
      features: [
        "Yaka kartı baskılama sistemleri",
        "QR kodlu giriş-çıkış",
        "Termal yazıcı ve okuyucular",
        "Anlık raporlama sistemi"
      ]
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Marka Çözümleri",
      description: "Markanıza özel interaktif içerik, özelleştirilmiş yazılım ve uygulama geliştirme hizmetleri.",
      features: [
        "Özel oyun ve uygulama geliştirme",
        "Artırılmış gerçeklik (AR) deneyimleri",
        "Dijital katalog ve e-broşür",
        "Marka dokunmatik kiosk içerikleri"
      ]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Sistemleri",
      description: "Etkinlik ve kurumsal alanlarınız için profesyonel ağ altyapısı kurulum ve yönetim hizmetleri.",
      features: [
        "Fiber ve Gigabit network kurulumu",
        "Profesyonel WiFi altyapısı",
        "Yönetilebilir switch sistemleri",
        "Güvenli VPN çözümleri"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Teknik Destek Hizmetleri",
      description: "Tüm kiralama sürecinizde 7/24 profesyonel teknik destek ve yerinde müdahale garantisi.",
      features: [
        "7/24 çağrı merkezi",
        "Yerinde teknik müdahale",
        "Uzaktan bağlantı desteği",
        "SLA garantili servis"
      ]
    }
  ];

  const advantages = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hızlı Devreye Alma",
      description: "Planlama, sevkiyat ve kurulum süreçlerinde hızlı aksiyon."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Kontrollü Teslimat",
      description: "Kontrol edilmiş, hazır ve eksiksiz ekipman teslimi."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Saha Teknik Ekip",
      description: "Kurulumdan canlı operasyona kadar sahada teknik destek."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Operasyon Takibi",
      description: "Süreç boyunca koordinasyon ve kesintisiz ilerleyiş takibi."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kurumsal Hizmetler | ECR Etkinlik Bilgisayar - Teknoloji Kiralama Çözümleri</title>
        <meta name="description" content="Kısa süreli kiralama, uzun dönem kiralama, kayıt sistemleri, marka çözümleri, network sistemleri ve 7/24 teknik destek. Kurumsal teknoloji kiralama hizmetleri." />
        <meta name="keywords" content="kurumsal kiralama, uzun dönem kiralama, kısa süreli kiralama, etkinlik ekipman kiralama, kayıt sistemi kiralama, network kiralama, teknik destek" />
        <link rel="canonical" href="https://etkinlikbilgisayar.com/kurumsal-hizmetler" />
        <meta property="og:title" content="Kurumsal Hizmetler | ECR Etkinlik Bilgisayar" />
        <meta property="og:description" content="Kurumsal teknoloji kiralama hizmetleri. Uzun dönem, kısa süreli kiralama ve teknik destek." />
        <meta property="og:url" content="https://etkinlikbilgisayar.com/kurumsal-hizmetler" />
      </Helmet>

      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-bold text-red-500 tracking-wider uppercase mb-4">Kurumsal Hizmetler</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              En Kapsamlı<br />
              <span className="text-red-500">Kiralama Parkuru</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Sadece ekipman kiralamıyoruz; ihtiyaç analizi, hızlı planlama, kurulum ve saha desteğiyle kurumsal projelerin teknoloji operasyonunu tek akışta yönetiyoruz.
            </p>
          </motion.div>

          {/* Advantages Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-gray-900/80 rounded-xl p-5 border border-gray-800 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-red-500">{adv.icon}</div>
                  <span className="font-bold text-white">{adv.title}</span>
                </div>
                <p className="text-sm text-gray-500">{adv.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 group"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-gray-700 mb-6 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 border-t border-gray-200 pt-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Uzun Dönem Kiralama Highlight */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="inline-block text-sm font-bold text-red-500 tracking-wider uppercase mb-4">Öne Çıkan Hizmet</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Uzun Dönem Kiralama
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  İşletmelerin teknolojik cihaz ihtiyaçları günümüzde giderek artmaktadır.
                  Sürekli yenilenen teknolojik cihazların maliyetleri işletmelerin bütçelerini zorlayabilir.
                  Bu nedenle uzun dönem teknoloji kiralama hizmetleri, maliyet tasarrufu sağlayan önemli
                  bir seçenek haline gelmiştir.
                </p>

                <div className="bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-700/50">
                  <h4 className="font-bold text-white mb-4">Finansal Avantajlar:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Kiralama faturası hizmet faturası olarak kesilir</li>
                    <li>• Muhasebesel avantaj sağlar</li>
                    <li>• Nakit akışı korunur</li>
                    <li>• Amortisman kaygısı yoktur</li>
                  </ul>
                </div>

                <Link
                  to="/iletisim"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-bold transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
                >
                  Detaylı Teklif Alın
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-red-600/50 transition-colors">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                    Maliyet Tasarrufu
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Teknolojik cihazların satın alınması yerine kiralama ile sadece kullanacağınız cihazlar için ödeme yaparsınız.
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-red-600/50 transition-colors">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                    Güncel Teknoloji
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Teknolojik cihazların hızla eskimesi nedeniyle her zaman en son teknolojiye erişim sağlayabilirsiniz.
                  </p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-red-600/50 transition-colors">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                    Esneklik
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Belirli bir süre için cihazları kiralayabilir, sonrasında ihtiyaçlarınıza göre iade edebilir veya değiştirebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Özel Bir Çözüme mi İhtiyacınız Var?
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Kurumsal ihtiyaçlarınız için size özel bir teklif hazırlayalım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-red-600 text-white rounded-xl font-bold transition-all duration-300 hover:bg-red-700"
            >
              <Phone className="w-5 h-5" />
              Kurumsal Satış ile Görüşün
            </Link>
            <a
              href="tel:08502287574"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gray-100 text-gray-900 rounded-xl font-bold transition-all duration-300 hover:bg-gray-200"
            >
              0850 228 75 74
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateServicesPage;

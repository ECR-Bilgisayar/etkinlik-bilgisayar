
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  Target,
  Award,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Building2,
  MapPin,
  Calendar,
  Package,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Müşteri Odaklılık",
      description: "Müşterilerimizin ihtiyaçlarını dinliyor, onlara özel çözümler üretiyoruz. 'Bizde yok' demiyoruz."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kalite Standartları",
      description: "Sadece en iyi markaların en yeni ve sorunsuz ürünlerini kiralıyoruz."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Sürekli İnovasyon",
      description: "Teknoloji dünyasındaki gelişmeleri yakından takip ediyor ve parkurumuzu güncel tutuyoruz."
    },
  ];

  const stats = [
    { label: "Yıllık Tecrübe", value: "10+" },
    { label: "Mutlu Müşteri", value: "4500+" },
    { label: "Ürün Stoğu", value: "10K+" },
    { label: "Hizmet Şehri", value: "81" },
  ];

  const timeline = [
    { year: "2014", title: "Kuruluş", description: "ECR Etkinlik Bilgisayar, İstanbul'da genç ve dinamik bir kadro ile kuruldu." },
    { year: "2016", title: "Büyüme", description: "Ürün parkurumuz 1.000 ürüne, müşteri portföyümüz 100+ firmaya ulaştı." },
    { year: "2018", title: "Yazılım Hizmetleri", description: "Kiralama yanında marka çözümleri ve yazılım hizmetlerini portföye ekledik." },
    { year: "2020", title: "Pandemi Dönüşümü", description: "Uzun dönem kiralama ve hibrit etkinlik çözümleri ile sektöre liderlik ettik." },
    { year: "2024", title: "10. Yıl", description: "10.000+ ürün stoğu ve 81 ilde hizmet veren Türkiye'nin lider teknoloji kiralama şirketiyiz." },
  ];

  return (
    <>
      <Helmet>
        <title>Hakkımızda | ECR Etkinlik Bilgisayar</title>
        <meta name="description" content="ECR Etkinlik Bilgisayar, 2014'ten beri Türkiye'nin lider teknoloji kiralama şirketi. 10 yıllık tecrübe, 10.000+ ürün, 81 ilde hizmet." />
      </Helmet>

      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600 rounded-full text-sm font-medium">
              <Calendar className="w-4 h-4" />
              2014'ten Beri
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Biz Kimiz?
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              ECR Etkinlik Bilgisayar, sektöre yenilikçi ve farklı bir bakış açısı ile hizmet vermeyi
              amaçlayan, kısa sürede kendini sektöre ve müşterilerine kanıtlamış; genç, dinamik ve
              çalışkan ekipten oluşan operasyonel yapıda bir teknoloji firmasıdır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-bold text-red-600 tracking-wider uppercase mb-4">Hikayemiz</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                İnovatif Bilişim Çözümleri
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">ECR</strong> - Etkinlik Bilgisayarın İngilizcesi olan "Event Computer Rental"ın baş harfleridir.
                  Ama bizce en önemlisi Osmanlıca'da kiraya karşılık gelen ödeme anlamına gelir!
                  Bu yüzden ismi ve geçmişi ile örtüşen bir unvanımız olduğundan çok mutluyuz.
                </p>
                <p>
                  ECR Etkinlik Bilgisayar'ı sıradan kiralama firmalarından ayıran en büyük özelliği,
                  sürekli olarak değişen teknolojiye anında adapte olması, o günün teknolojik ihtiyaçlarına karşılık,
                  müşterinin talepleri ile faydaları doğrultusunda kendini anında güncelleyebiliyor olmasıdır.
                </p>
                <p>
                  Nitekim sadece teknoloji kiralama hizmeti vermek değil, kendi içinde oluşturduğu yazılım,
                  teknik ve lojistik personeli sayesinde talepler doğrultusunda etkinlik sektörü ya da
                  ihtiyaçlarınıza yönelik <strong className="text-gray-900">katma değerli hizmetler</strong> üreten bir dinamo haline gelmiştir.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-gray-700 italic">
                  "Bugünün küçük işi, yarının büyük girişimcisi" sloganı ile istediğiniz tüm adetlerde
                  sizlere destek oluyoruz. Kiralamada adet ve miktara bakmadan hizmet veriyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-red-200 group">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-red-600 tracking-wider uppercase mb-4">Yolculuğumuz</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">10 Yıllık Başarı Hikayesi</h2>
            </div>

            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>

              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex items-center mb-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-16 md:pl-0`}>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl hover:border-red-200 transition-all duration-300">
                      <span className="text-sm font-bold text-red-600">{item.year}</span>
                      <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-red-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-red-600 tracking-wider uppercase mb-4">Değerlerimiz</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Bizi Farklı Kılan</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 group"
                >
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-gray-700 mb-6 mx-auto shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{val.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-black rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Neden ECR?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Package className="w-6 h-6" />, title: "10.000+ Ürün", desc: "En geniş kiralama parkuru" },
                  { icon: <Headphones className="w-6 h-6" />, title: "7/24 Destek", desc: "Kesintisiz teknik yardım" },
                  { icon: <MapPin className="w-6 h-6" />, title: "81 İl Hizmeti", desc: "Türkiye geneli teslimat" },
                  { icon: <Building2 className="w-6 h-6" />, title: "10+ Yıl", desc: "Sektör tecrübesi" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800 hover:border-red-600/50 transition-colors">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-red-500 mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link
                  to="/iletisim"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-bold transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
                >
                  Bizimle İletişime Geçin
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

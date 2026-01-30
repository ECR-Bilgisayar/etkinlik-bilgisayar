
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  Search,
  ArrowRight,
  Monitor,
  Tablet,
  Tv,
  Printer,
  Speaker,
  Headphones,
  Gamepad2,
  Smartphone,
  Cpu,
  ChevronDown,
  ChevronRight,
  Layers,
  Sparkles,
  Phone,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [expandedCategory, setExpandedCategory] = useState('bilgisayar');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'bilgisayar',
      icon: <Monitor className="w-6 h-6" />,
      title: "Bilgisayar & Laptop",
      count: "500+",
      description: "Profesyonel dizüstü bilgisayarlar, masaüstü sistemler ve Apple ürünleri",
      heroImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "Laptop Kiralama", description: "Intel Core i5, i7, i9 işlemcili profesyonel dizüstü bilgisayarlar", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "MacBook Pro Kiralama", description: "Apple M1, M2, M3 çipli MacBook Pro modelleri", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "MacBook Air Kiralama", description: "Taşınabilir ve güçlü MacBook Air modelleri", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=600" },
        { name: "iMac Kiralama", description: "27\" ve 24\" Apple iMac masaüstü bilgisayarlar", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Masaüstü Bilgisayar Kiralama", description: "Her ihtiyaca yönelik masaüstü bilgisayar sistemleri", image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=600" },
        { name: "Workstation Kiralama", description: "Yüksek performanslı iş istasyonları", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=600" },
      ]
    },
    {
      id: 'tablet',
      icon: <Tablet className="w-6 h-6" />,
      title: "Tablet & Mobil",
      count: "1000+",
      description: "iPad, Android tablet ve akıllı telefon çözümleri",
      heroImage: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "iPad Pro Kiralama", description: "12.9\" ve 11\" iPad Pro modelleri, M2 çipli", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "iPad Air Kiralama", description: "Hafif ve güçlü iPad Air modelleri", image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "iPad Mini Kiralama", description: "Kompakt boyutlu iPad Mini", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=600" },
        { name: "Samsung Galaxy Tab Kiralama", description: "Android tabletler, S serisi", image: "https://images.unsplash.com/photo-1632634428664-7d2ccd72b813?auto=format&fit=crop&q=80&w=600" },
        { name: "Microsoft Surface Kiralama", description: "Windows tablet ve laptop hibrit çözümler", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "iPhone Kiralama", description: "iPhone Pro ve standart modeller", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600" },
      ]
    },
    {
      id: 'goruntu',
      icon: <Tv className="w-6 h-6" />,
      title: "TV & Görüntü Sistemleri",
      count: "300+",
      description: "LED TV, video wall, projeksiyon ve dokunmatik ekranlar",
      heroImage: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "LED TV Kiralama 55\"", description: "55\" 4K UHD Smart LED televizyonlar", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "LED TV Kiralama 65\"", description: "65\" büyük ekran LED televizyonlar", image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "LED TV Kiralama 75\"-85\"", description: "Profesyonel büyük ekran çözümleri", image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&q=80&w=600" },
        { name: "Video Wall Kiralama", description: "2x2, 3x3 ve özel boyut video wall sistemleri", image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Projeksiyon Kiralama", description: "Full HD, 4K profesyonel projeksiyon cihazları", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=600" },
        { name: "Touch Screen Kiralama", description: "32\" - 75\" dokunmatik ekran ve kiosk", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Samsung Flip Kiralama", description: "İnteraktif dijital whiteboard", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=600" },
        { name: "LED Screen Kiralama", description: "Outdoor ve indoor LED ekranlar", image: "https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?auto=format&fit=crop&q=80&w=600" },
      ]
    },
    {
      id: 'yazici',
      icon: <Printer className="w-6 h-6" />,
      title: "Yazıcı & Baskı Sistemleri",
      count: "200+",
      description: "Lazer yazıcı, fotoğraf yazıcı ve akreditasyon sistemleri",
      heroImage: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "Lazer Yazıcı Kiralama", description: "Siyah-beyaz ve renkli lazer yazıcılar", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Fotoğraf Yazıcı Kiralama", description: "Profesyonel fotoğraf baskı sistemleri", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Termal Yazıcı Kiralama", description: "Yaka kartı ve bilet baskı sistemleri", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Fotokopi Makinesi Kiralama", description: "Yüksek kapasiteli fotokopi makineleri", image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=600" },
        { name: "A0 Plotter Kiralama", description: "Büyük format baskı çözümleri", image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&q=80&w=600" },
        { name: "Etiket Yazıcı Kiralama", description: "Barkod ve etiket yazıcıları", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600" },
      ]
    },
    {
      id: 'vr',
      icon: <Headphones className="w-6 h-6" />,
      title: "VR & AR Teknolojileri",
      count: "150+",
      description: "Sanal gerçeklik ve artırılmış gerçeklik çözümleri",
      heroImage: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "Apple Vision Pro Kiralama", description: "Apple'ın yeni nesil karma gerçeklik gözlüğü", image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Meta Quest 3 Kiralama", description: "En yeni Meta VR başlığı", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Meta Quest Pro Kiralama", description: "Profesyonel VR deneyimi", image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "HTC Vive Pro Kiralama", description: "Yüksek kaliteli VR deneyimi", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=600" },
        { name: "Microsoft Hololens Kiralama", description: "Mixed Reality uygulamaları için", image: "https://images.unsplash.com/photo-1617802690658-1173a812650d?auto=format&fit=crop&q=80&w=600" },
        { name: "Valve Index Kiralama", description: "Premium VR donanımı", image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&q=80&w=600" },
      ]
    },
    {
      id: 'gaming',
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Gaming & Konsol",
      count: "200+",
      description: "PlayStation, Xbox, gaming PC ve aksesuarları",
      heroImage: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "PlayStation 5 Kiralama", description: "Sony PS5 konsol, disk ve dijital versiyon", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Xbox Series X Kiralama", description: "Microsoft'un en güçlü konsolu", image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Nintendo Switch Kiralama", description: "Taşınabilir ve ev konsolu", image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&q=80&w=600" },
        { name: "Gaming PC Kiralama", description: "RTX ekran kartlı yüksek performanslı PC'ler", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Gaming Monitor Kiralama", description: "144Hz+ yüksek yenileme hızlı monitörler", image: "https://images.unsplash.com/photo-1527443060795-0402de2ef2de?auto=format&fit=crop&q=80&w=600" },
        { name: "Gaming Koltuk Kiralama", description: "Profesyonel oyuncu koltukları", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80&w=600" },
        { name: "Racing Simulator Kiralama", description: "Yarış simülatörü komple set", image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=600" },
      ]
    },
    {
      id: 'ses',
      icon: <Speaker className="w-6 h-6" />,
      title: "Ses Sistemleri",
      count: "100+",
      description: "Profesyonel ses sistemleri ve tercüme ekipmanları",
      heroImage: "https://images.unsplash.com/photo-1545459720-aacaf5090834?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "Profesyonel Ses Sistemi Kiralama", description: "Line array ve aktif hoparlör sistemleri", image: "https://images.unsplash.com/photo-1545459720-aacaf5090834?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Mikser & Ses Masası Kiralama", description: "Dijital ve analog ses mikserleri", image: "https://images.unsplash.com/photo-1598488035139-4e32f32955e6?auto=format&fit=crop&q=80&w=600" },
        { name: "Kablosuz Mikrofon Kiralama", description: "El ve yaka tipi kablosuz mikrofonlar", image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Infoport Kiralama", description: "Kablosuz rehber ve tercüme sistemleri", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Konferans Sistemi Kiralama", description: "Toplantı odası ses sistemleri", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600" },
      ]
    },
    {
      id: 'kayit',
      icon: <Layers className="w-6 h-6" />,
      title: "Kayıt & Akreditasyon",
      count: "100+",
      description: "Etkinlik giriş sistemleri, yaka kartı baskı ve QR çözümleri",
      heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "Kayıt Masası Sistemi", description: "Tablet, yazıcı ve stand dahil komple set", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Yaka Kartı Baskı Sistemi", description: "Termal yazıcı ve kart malzemeleri", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "QR Okuyucu Kiralama", description: "Barkod ve QR kod okuyucular", image: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&q=80&w=600" },
        { name: "Giriş-Çıkış Terminali", description: "RFID ve NFC destekli terminaller", image: "https://images.unsplash.com/photo-1572666341285-c8cb9790ca50?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Turnike Sistemi Kiralama", description: "Etkinlik girişi turnike sistemleri", image: "https://images.unsplash.com/photo-1551818014-7c8ace9c1b94?auto=format&fit=crop&q=80&w=600" },
      ]
    },
  ];

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  const currentCategory = categories.find(c => c.id === expandedCategory);

  return (
    <>
      <Helmet>
        <title>Ürünler | ECR Etkinlik Bilgisayar - 11.000+ Teknoloji Kiralama Ürünü</title>
        <meta name="description" content="Bilgisayar, laptop, MacBook, iPad, tablet, LED TV, video wall, yazıcı, VR gözlük, ses sistemi kiralama. Türkiye'nin en geniş teknoloji kiralama parkuru. Stoktan anında teslimat." />
        <meta name="keywords" content="laptop kiralama, MacBook kiralama, iPad kiralama, LED TV kiralama, video wall kiralama, VR kiralama, Apple Vision Pro kiralama, PlayStation kiralama, ses sistemi kiralama" />
        <link rel="canonical" href="https://etkinlikbilgisayar.com/urunler" />
        <meta property="og:title" content="Ürünler | ECR Etkinlik Bilgisayar - 11.000+ Teknoloji Kiralama Ürünü" />
        <meta property="og:description" content="Bilgisayar, tablet, LED TV, VR ve daha fazlası. Türkiye'nin en geniş teknoloji kiralama parkuru." />
        <meta property="og:url" content="https://etkinlikbilgisayar.com/urunler" />
      </Helmet>

      {/* Hero */}
      <section className="bg-black text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Türkiye'nin En Geniş Parkuru
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              11.000+ Ürün<br />
              <span className="text-red-500">Premium Kiralama</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-4">
              Etkinlikleriniz ve kurumsal ihtiyaçlarınız için <strong className="text-white">adet sınırı olmadan</strong> tüm teknolojik çözümler.
            </p>
            <p className="text-gray-500">
              <CheckCircle2 className="w-4 h-4 inline mr-2 text-red-500" />
              Biz firma olarak etkinlik düzenlemiyoruz. Etkinliği olan kişilere teknolojik tüm ihtiyaçlarını sağlıyoruz.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 max-w-2xl"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Ürün ara... Örn: iPad, MacBook, VR"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:outline-none focus:border-red-600 transition-all text-white placeholder:text-gray-500"
              />
              <Search className="absolute left-4 top-4.5 w-5 h-5 text-gray-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Accordion */}
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Category List */}
            <div className="lg:col-span-1">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">Kategoriler</h2>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => toggleCategory(cat.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left ${expandedCategory === cat.id
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${expandedCategory === cat.id ? 'text-white' : 'text-red-600'}`}>
                        {cat.icon}
                      </div>
                      <div>
                        <div className="font-bold">{cat.title}</div>
                        <div className={`text-xs ${expandedCategory === cat.id ? 'text-red-100' : 'text-gray-400'}`}>
                          {cat.count} ürün
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${expandedCategory === cat.id ? 'rotate-90' : ''}`} />
                  </button>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="mt-8 p-6 bg-black rounded-2xl text-white">
                <h3 className="font-bold mb-2">Aradığınızı Bulamadınız mı?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Listelenmeyen birçok ürün stoğumuzda mevcut.
                </p>
                <Link
                  to="/hizli-kirala"
                  className="inline-flex items-center gap-2 text-red-500 font-medium text-sm hover:text-red-400"
                >
                  Özel Talep Oluştur <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Category Content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {currentCategory && (
                  <motion.div
                    key={currentCategory.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Category Hero */}
                    <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                      <img
                        src={currentCategory.heroImage}
                        alt={currentCategory.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h2 className="text-3xl font-bold text-white mb-2">{currentCategory.title}</h2>
                        <p className="text-gray-300">{currentCategory.description}</p>
                      </div>
                    </div>

                    {/* Featured Products */}
                    <div className="mb-8">
                      <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-4">Öne Çıkan Ürünler</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentCategory.products.filter(p => p.featured).map((product, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all duration-300"
                          >
                            <div className="relative h-40 overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute top-3 left-3">
                                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                  Popüler
                                </span>
                              </div>
                            </div>
                            <div className="p-5">
                              <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{product.name}</h4>
                              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                              <Link
                                to="/hizli-kirala"
                                className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700"
                              >
                                Teklif Al <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* All Products */}
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tüm {currentCategory.title}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentCategory.products.filter(p => !p.featured).map((product, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.05 }}
                            className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300"
                          >
                            <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors text-sm">{product.name}</h4>
                            <p className="text-gray-500 text-xs line-clamp-2">{product.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hemen Teklif Alın
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            İddialıyız, bizden hızlı mail veya aramalara geri dönüş yapabilen bir kiralama firması olamaz!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/hizli-kirala"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-red-600 text-white rounded-xl font-bold transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30"
            >
              Hızlı Kiralama Talebi
            </Link>
            <a
              href="tel:08502287574"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gray-900 border border-gray-700 text-white rounded-xl font-bold transition-all duration-300 hover:bg-gray-800"
            >
              <Phone className="w-5 h-5" />
              0850 228 75 74
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
    Send,
    Loader2,
    CheckCircle2,
    Phone,
    Mail,
    Package,
    User,
    FileText,
    ChevronDown,
    Sparkles
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const QuickRentalPage = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        rentalType: '',
        productCategory: '',
        quantity: '',
        startDate: '',
        duration: '',
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
                title: "Talebiniz Alındı!",
                description: "En kısa sürede uzman ekibimiz sizinle iletişime geçecektir.",
                duration: 5000,
                className: "bg-green-600 text-white border-green-500"
            });
            setFormData({
                name: '', company: '', email: '', phone: '',
                rentalType: '', productCategory: '', quantity: '',
                startDate: '', duration: '', message: ''
            });
        }, 1500);
    };

    const rentalTypes = [
        "Kısa Süreli Kiralama (Etkinlik/Fuar)",
        "Uzun Dönem Kiralama (Kurumsal)",
        "Proje Bazlı Kiralama",
        "Günlük Kiralama"
    ];

    const productCategories = [
        "Bilgisayar & Laptop",
        "iPad & Tablet",
        "TV & Görüntü Sistemleri",
        "Yazıcı & Baskı Sistemleri",
        "VR & AR Teknolojileri",
        "Ses Sistemleri",
        "Gaming & Konsol",
        "Network & Altyapı",
        "Kayıt & Akreditasyon Sistemleri",
        "Kiosk Sistemleri",
        "Diğer"
    ];

    const durations = [
        "1 Gün",
        "2-3 Gün",
        "1 Hafta",
        "2 Hafta",
        "1 Ay",
        "3 Ay",
        "6 Ay",
        "1 Yıl",
        "1 Yıl Üzeri"
    ];

    const steps = [
        {
            number: "01",
            title: "Talep Oluştur",
            description: "Formu doldurarak ihtiyaçlarınızı detaylı şekilde paylaşın."
        },
        {
            number: "02",
            title: "Uzman Dönüşü",
            description: "Konusunda uzman ekibimiz detayları sağlamak için sizlere dönüş yapsın."
        },
        {
            number: "03",
            title: "Hızlı Teslimat",
            description: "Onaylandıktan sonra kaliteli hizmet anlayışımızı deneyimleyin."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Hızlı Kirala | Teknoloji Kiralama Talebi - ECR Etkinlik Bilgisayar</title>
                <meta name="description" content="3 adımda hızlı teknoloji kiralama talebi oluşturun. Bilgisayar, tablet, LED TV, VR ve daha fazlası için online kiralama formu. Aynı gün teslimat, 7/24 destek." />
                <meta name="keywords" content="hızlı kiralama, online kiralama talebi, bilgisayar kiralama formu, teknoloji kiralama başvuru, etkinlik ekipman kiralama" />
                <link rel="canonical" href="https://etkinlikbilgisayar.com/hizli-kirala" />
                <meta property="og:title" content="Hızlı Kirala | Teknoloji Kiralama Talebi" />
                <meta property="og:description" content="3 adımda hızlı teknoloji kiralama talebi. Bilgisayar, tablet, LED TV, VR kiralama." />
                <meta property="og:url" content="https://etkinlikbilgisayar.com/hizli-kirala" />
            </Helmet>

            {/* Hero */}
            <section className="bg-black text-white pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/30 rounded-full blur-[120px]"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600 rounded-full text-sm font-medium">
                            <Sparkles className="w-4 h-4" />
                            Hızlı & Sonuç Odaklı
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Hızlı Kiralama Talebi
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            3 adımda hızlı ve sonuca yönelik kiralama hizmeti için ihtiyaçlarınızı paylaşın.
                            <strong className="text-white"> Bizden hızlı mail veya aramalara geri dönüş yapabilen bir kiralama firması olamaz.</strong>
                        </p>
                    </motion.div>

                    {/* Steps */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
                    >
                        {steps.map((step, idx) => (
                            <div key={idx} className="bg-gray-900/80 rounded-xl p-6 border border-gray-800 text-center hover:border-red-600/50 transition-all">
                                <div className="text-3xl font-bold text-red-600 mb-3">{step.number}</div>
                                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Kiralama Talep Formu</h2>
                            <p className="text-gray-600">Aşağıdaki formu doldurarak talebinizi oluşturun. En kısa sürede size dönüş yapacağız.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Kişisel Bilgiler */}
                            <div>
                                <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    İletişim Bilgileri
                                </h3>
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
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Firma Adı</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white"
                                            placeholder="Firma adınız (varsa)"
                                        />
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
                            </div>

                            {/* Kiralama Detayları */}
                            <div>
                                <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Package className="w-4 h-4" />
                                    Kiralama Detayları
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Kiralama Türü *</label>
                                        <div className="relative">
                                            <select
                                                name="rentalType"
                                                required
                                                value={formData.rentalType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white appearance-none cursor-pointer"
                                            >
                                                <option value="">Seçiniz</option>
                                                {rentalTypes.map((type, i) => (
                                                    <option key={i} value={type}>{type}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Ürün Kategorisi *</label>
                                        <div className="relative">
                                            <select
                                                name="productCategory"
                                                required
                                                value={formData.productCategory}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white appearance-none cursor-pointer"
                                            >
                                                <option value="">Seçiniz</option>
                                                {productCategories.map((cat, i) => (
                                                    <option key={i} value={cat}>{cat}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Adet</label>
                                        <input
                                            type="text"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white"
                                            placeholder="Örn: 50 adet"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Kiralama Süresi</label>
                                        <div className="relative">
                                            <select
                                                name="duration"
                                                value={formData.duration}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white appearance-none cursor-pointer"
                                            >
                                                <option value="">Seçiniz</option>
                                                {durations.map((dur, i) => (
                                                    <option key={i} value={dur}>{dur}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Başlangıç Tarihi</label>
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white"
                                    />
                                </div>
                            </div>

                            {/* Ek Bilgiler */}
                            <div>
                                <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <FileText className="w-4 h-4" />
                                    Ek Bilgiler
                                </h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Detaylı Açıklama</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white resize-none"
                                        placeholder="İhtiyaçlarınızı, etkinlik detaylarını veya özel taleplerinizi yazabilirsiniz..."
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> GÖNDERİLİYOR...
                                    </>
                                ) : (
                                    <>
                                        TALEBİ GÖNDER <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Contact Info */}
                        <div className="mt-10 pt-10 border-t border-gray-200">
                            <p className="text-center text-gray-600 mb-6">
                                Acil talepleriniz için doğrudan bize ulaşabilirsiniz:
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:08502287574"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                                >
                                    <Phone className="w-5 h-5 text-red-600" />
                                    0850 228 75 74
                                </a>
                                <a
                                    href="mailto:info@etkinlikbilgisayar.com"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                                >
                                    <Mail className="w-5 h-5 text-red-600" />
                                    info@etkinlikbilgisayar.com
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Trust Badges */}
                    <div className="mt-12 text-center">
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-red-500" />
                                <span>Hızlı Geri Dönüş</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-red-500" />
                                <span>10.000+ Ürün Stoğu</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-red-500" />
                                <span>7/24 Destek</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-red-500" />
                                <span>Aynı Gün Teslimat</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default QuickRentalPage;

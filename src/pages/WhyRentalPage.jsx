
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
    CircleDollarSign,
    TrendingUp,
    Clock,
    ShieldCheck,
    Wrench,
    BarChart3,
    RefreshCw,
    FileCheck,
    ArrowRight,
    CheckCircle2,
    Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyRentalPage = () => {
    const mainReasons = [
        {
            icon: <CircleDollarSign className="w-10 h-10" />,
            title: "Finansal Avantajlar",
            description: "Teknoloji kiralama, işletmelerin teknolojik ekipmanlara yatırım yapmak yerine, kiralama bedelini ödeyerek ihtiyaçlarına uygun teknolojiye erişim sağlamalarını mümkün kılar.",
            details: [
                "Yüksek satın alma maliyetlerinden kurtulun",
                "Nakit akışınızı koruyun ve bütçenizi yönetin",
                "Amortisman kaygısı olmadan çalışın",
                "Kiralama faturası hizmet faturası olarak kesilir",
                "Muhasebesel anlamda avantaj sağlar"
            ]
        },
        {
            icon: <TrendingUp className="w-10 h-10" />,
            title: "Yenilikçi Teknolojilere Erişim",
            description: "Teknoloji hızla gelişmekte ve eski teknolojiler hızla yerini yenilikçi teknolojilere bırakıyor. Her zaman en güncel ekipmanlara erişin.",
            details: [
                "Her zaman en son teknolojik cihazlara erişim",
                "Eskiyen donanım sorunu yaşamayın",
                "Teknolojik gelişmeleri anında takip edin",
                "Rekabet avantajı elde edin"
            ]
        },
        {
            icon: <RefreshCw className="w-10 h-10" />,
            title: "Esneklik",
            description: "İşletmelerin ihtiyaçları değişebilir ve farklı proje veya müşteriler için farklı teknolojik donanımlara ihtiyaç duyabilirler.",
            details: [
                "Proje bazlı ihtiyaçlarınıza göre ölçeklendirin",
                "Günlük, haftalık, aylık veya yıllık kiralama",
                "İhtiyaç bittiğinde iade edin veya değiştirin",
                "Değişen gereksinimlere hızlı adaptasyon"
            ]
        },
        {
            icon: <Wrench className="w-10 h-10" />,
            title: "Bakım ve Destek Hizmetleri",
            description: "Teknoloji kiralama hizmetleri, işletmelere teknolojik cihazların bakım ve onarım hizmetlerini de sunar.",
            details: [
                "Düzenli bakım ve onarım dahil",
                "7/24 teknik destek garantisi",
                "Uzaktan bağlantı desteği",
                "Arıza durumunda hızlı değişim"
            ]
        },
        {
            icon: <BarChart3 className="w-10 h-10" />,
            title: "Verimlilik Artışı",
            description: "Teknoloji kiralama, işletmelerin teknolojik donanımlara hızlı ve kolay bir şekilde erişim sağlamalarını mümkün kılar.",
            details: [
                "Hızlı ve kolay erişim",
                "Stoktan anında teslimat",
                "İş süreçlerinde kesinti yok",
                "Operasyonel verimlilik artışı"
            ]
        },
        {
            icon: <FileCheck className="w-10 h-10" />,
            title: "Vergi Avantajı",
            description: "Kiralama faturalarının hizmet faturası olması, muhasebesel anlamda kiralama yapan tarafa avantaj sağlar.",
            details: [
                "Hizmet faturası ile gider gösterimi",
                "Vergi matrahından düşüm",
                "Bilançoda yükümlülük azaltma",
                "Finansal raporlamada esneklik"
            ]
        }
    ];

    const comparisonData = [
        { feature: "Başlangıç Maliyeti", buy: "Yüksek", rent: "Düşük" },
        { feature: "Nakit Akışı Etkisi", buy: "Olumsuz", rent: "Olumlu" },
        { feature: "Teknoloji Güncelliği", buy: "Sabit", rent: "Sürekli Güncel" },
        { feature: "Bakım Maliyeti", buy: "Ek Maliyet", rent: "Dahil" },
        { feature: "Teknik Destek", buy: "Ayrı Sözleşme", rent: "Dahil" },
        { feature: "Esneklik", buy: "Düşük", rent: "Yüksek" },
        { feature: "Vergi Avantajı", buy: "Amortisman", rent: "Hizmet Gideri" },
        { feature: "Değer Kaybı Riski", buy: "Var", rent: "Yok" },
    ];

    return (
        <>
            <Helmet>
                <title>Neden Kiralama Yapılır? | ECR Etkinlik Bilgisayar</title>
                <meta name="description" content="Teknoloji kiralama avantajları: Finansal avantaj, güncel teknoloji, esneklik, bakım dahil, verimlilik artışı. Neden satın alma yerine kiralama?" />
            </Helmet>

            {/* Hero */}
            <section className="bg-black text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px]"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block text-sm font-bold text-red-500 tracking-wider uppercase mb-4">Avantajlar</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Neden Teknoloji<br />
                            <span className="text-red-500">Kiralama Yapılır?</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Teknoloji kiralama, günümüz iş dünyasında popüler bir çözüm haline gelmiştir.
                            İşletmeler için maliyet avantajı, esneklik ve sürekli güncel teknolojiye erişim sağlar.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Özet Avantajlar */}
            <section className="py-16 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {[
                            { icon: <CircleDollarSign className="w-6 h-6" />, label: "Maliyet Tasarrufu" },
                            { icon: <TrendingUp className="w-6 h-6" />, label: "Güncel Teknoloji" },
                            { icon: <RefreshCw className="w-6 h-6" />, label: "Esneklik" },
                            { icon: <Wrench className="w-6 h-6" />, label: "Bakım Dahil" },
                            { icon: <BarChart3 className="w-6 h-6" />, label: "Verimlilik" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-gray-700">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-red-600 shadow-sm">
                                    {item.icon}
                                </div>
                                <span className="font-medium text-sm">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detaylı Avantajlar */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mainReasons.map((reason, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 group"
                            >
                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-gray-600 mb-6 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                    {reason.description}
                                </p>
                                <ul className="space-y-2 border-t border-gray-200 pt-6">
                                    {reason.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Karşılaştırma Tablosu */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <span className="inline-block text-sm font-bold text-red-600 tracking-wider uppercase mb-4">Karşılaştırma</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Satın Alma vs Kiralama</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Teknoloji ekipmanlarını satın almak yerine kiralamanın avantajlarını karşılaştırmalı olarak inceleyin.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                        <div className="grid grid-cols-3 bg-black text-white">
                            <div className="p-5 font-bold">Özellik</div>
                            <div className="p-5 font-bold text-center border-l border-gray-800">Satın Alma</div>
                            <div className="p-5 font-bold text-center border-l border-gray-800 bg-red-600">Kiralama</div>
                        </div>
                        {comparisonData.map((row, idx) => (
                            <div key={idx} className={`grid grid-cols-3 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                <div className="p-5 font-medium text-gray-900 border-t border-gray-200">{row.feature}</div>
                                <div className="p-5 text-center text-gray-500 border-t border-l border-gray-200">{row.buy}</div>
                                <div className="p-5 text-center font-medium text-red-600 border-t border-l border-gray-200 bg-red-50/50">{row.rent}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-black">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Sizin İçin En Uygun Çözümü Bulalım
                    </h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Müşteri temsilcimizin sizlere daha fazla bilgi vermesini isterseniz hemen iletişime geçin.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/hizli-kirala"
                            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-red-600 text-white rounded-xl font-bold transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30"
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

export default WhyRentalPage;

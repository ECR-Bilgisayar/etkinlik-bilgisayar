
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FileText, Scale, AlertCircle, CheckCircle2, Ban, UserCheck } from 'lucide-react';

const TermsOfServicePage = () => {
    const sections = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: "1. Genel Hükümler",
            content: `İşbu Kullanım Koşulları, ECR Etkinlik Bilgisayar Teknolojileri A.Ş. ("ECR", "Şirket", "Biz") tarafından sunulan web sitesi ve hizmetlerin kullanımına ilişkin şartları belirlemektedir.

Web sitemizi ziyaret ederek veya hizmetlerimizi kullanarak bu Kullanım Koşullarını kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız, lütfen web sitemizi kullanmayınız.`
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            title: "2. Hizmet Kapsamı",
            content: `ECR, aşağıdaki hizmetleri sunmaktadır:

• Bilgisayar, laptop, tablet ve diğer teknoloji ürünlerinin kısa ve uzun dönem kiralanması
• Etkinlik ve organizasyonlar için teknik ekipman temini
• Kurumsal teknoloji çözümleri ve danışmanlık
• Teknik destek ve saha hizmetleri
• Kayıt ve akreditasyon sistemleri
• Network ve altyapı çözümleri

Hizmetlerimiz, sözleşme şartları ve stok durumuna göre sunulmaktadır.`
        },
        {
            icon: <Scale className="w-6 h-6" />,
            title: "3. Kullanıcı Yükümlülükleri",
            content: `Web sitemizi ve hizmetlerimizi kullanırken:

• Doğru ve güncel bilgiler sağlamakla yükümlüsünüz
• Kiraladığınız ekipmanları özenle kullanmakla sorumlusunuz
• Ekipmanları zamanında iade etmelisiniz
• Yasal düzenlemelere ve ahlaki kurallara uymalısınız
• Üçüncü kişilerin haklarına saygı göstermelisiniz
• Sisteme zarar verecek faaliyetlerden kaçınmalısınız

Bu yükümlülüklere uyulmaması durumunda, hizmetlerimiz askıya alınabilir veya sonlandırılabilir.`
        },
        {
            icon: <Ban className="w-6 h-6" />,
            title: "4. Yasak Faaliyetler",
            content: `Aşağıdaki faaliyetler kesinlikle yasaktır:

• Kiraladığınız ekipmanları yetkisiz kişilere devretmek
• Ekipmanları sözleşme dışı amaçlarla kullanmak
• Ekipmanlarda izinsiz değişiklik yapmak
• Telif hakkı ihlali veya yasadışı içerik üretmek
• Sisteme yetkisiz erişim sağlamaya çalışmak
• Virüs, zararlı yazılım veya benzeri kodlar yaymak
• Diğer kullanıcıların hizmetlerini engellemek

Bu faaliyetler hukuki ve cezai sorumluluk doğurabilir.`
        },
        {
            icon: <CheckCircle2 className="w-6 h-6" />,
            title: "5. Fikri Mülkiyet Hakları",
            content: `Web sitemizde yer alan tüm içerik, tasarım, logo, metin, görsel, yazılım ve diğer materyaller ECR'nin veya lisans verenlerin fikri mülkiyetidir.

İzinsiz kullanım, kopyalama, dağıtma veya değiştirme yasaktır. Ticari amaçlı kullanım için yazılı izin alınmalıdır.`
        },
        {
            icon: <AlertCircle className="w-6 h-6" />,
            title: "6. Sorumluluk Sınırlamaları",
            content: `ECR, aşağıdaki durumlardan sorumlu değildir:

• Kullanıcı hatalarından kaynaklanan zararlar
• Üçüncü taraf hizmetlerindeki aksaklıklar
• Mücbir sebepler (doğal afetler, savaş, terör vb.)
• Kullanıcının ekipmanları hatalı kullanmasından doğan sorunlar
• İnternet bağlantısı veya teknik altyapı sorunları

Hizmetlerimiz "olduğu gibi" sunulmaktadır. Kesintisiz ve hatasız hizmet garantisi verilmemektedir.`
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "7. Fiyatlandırma ve Ödeme",
            content: `Hizmet fiyatları web sitemizde belirtilmiştir ve değişiklik gösterebilir. Fiyatlar aksi belirtilmedikçe KDV dahildir.

Ödemeler, sözleşmede belirlenen şartlara göre yapılmalıdır. Gecikmeli ödemelerde yasal faiz uygulanabilir.

İptal ve iade koşulları, sözleşme şartlarına göre belirlenir.`
        },
        {
            icon: <Scale className="w-6 h-6" />,
            title: "8. Sözleşme Değişiklikleri",
            content: `ECR, bu Kullanım Koşullarını önceden haber vermeksizin değiştirme hakkını saklı tutar. Değişiklikler web sitemizde yayınlandığı anda yürürlüğe girer.

Önemli değişiklikler için kullanıcılar bilgilendirilecektir. Değişikliklerden sonra hizmetleri kullanmaya devam etmeniz, yeni koşulları kabul ettiğiniz anlamına gelir.`
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "9. Uygulanacak Hukuk ve Yetki",
            content: `Bu Kullanım Koşulları, Türkiye Cumhuriyeti kanunlarına tabidir. İşbu sözleşmeden doğabilecek her türlü uyuşmazlıkta İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.`
        },
        {
            icon: <AlertCircle className="w-6 h-6" />,
            title: "10. İletişim",
            content: `Kullanım koşulları hakkında sorularınız için:

ECR Etkinlik Bilgisayar Teknolojileri A.Ş.
Adres: İstoç 32. Ada (2452. Sok) No:78-80, Mahmutbey, Bağcılar, İstanbul
E-posta: info@etkinlikbilgisayar.com
Telefon: 0850 228 75 74`
        }
    ];

    return (
        <>
            <Helmet>
                <title>Kullanım Koşulları | ECR Etkinlik Bilgisayar</title>
                <meta name="description" content="ECR Etkinlik Bilgisayar kullanım koşulları. Web sitesi ve hizmetlerimizin kullanımına ilişkin şartlar ve koşullar." />
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href="https://etkinlikbilgisayar.com/kullanim-kosullari" />
            </Helmet>

            <section className="bg-black text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600 rounded-full text-sm font-medium">
                            <Scale className="w-4 h-4" />
                            Kullanım Koşulları
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Kullanım Koşulları</h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Web sitemizi ve hizmetlerimizi kullanırken uymanız gereken şartlar ve koşullar.
                        </p>
                        <p className="text-sm text-gray-500 mt-4">Son Güncelleme: 31 Ocak 2026</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="space-y-12">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 pt-2">{section.title}</h2>
                                </div>
                                <div className="text-gray-600 leading-relaxed whitespace-pre-line pl-16">
                                    {section.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6"
                    >
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Önemli Uyarı</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Bu Kullanım Koşullarını dikkatlice okuyunuz. Web sitemizi kullanarak bu koşulları kabul etmiş sayılırsınız.
                                    Sorularınız için bizimle iletişime geçebilirsiniz.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default TermsOfServicePage;

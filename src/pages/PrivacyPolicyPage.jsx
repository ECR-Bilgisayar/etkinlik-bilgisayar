
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

const PrivacyPolicyPage = () => {
    const sections = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: "1. Giriş",
            content: `ECR Etkinlik Bilgisayar Teknolojileri A.Ş. ("ECR", "Biz", "Bizim") olarak, kişisel verilerinizin güvenliğini ve gizliliğini en üst düzeyde korumayı taahhüt ediyoruz. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde, hizmetlerimizi kullandığınızda veya bizimle iletişime geçtiğinizde kişisel verilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.`
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "2. Toplanan Kişisel Veriler",
            content: `Hizmetlerimizi sunabilmek için aşağıdaki kişisel verileri toplayabiliriz:

• Kimlik Bilgileri: Ad, soyad, T.C. kimlik numarası (gerekli durumlarda)
• İletişim Bilgileri: E-posta adresi, telefon numarası, adres bilgileri
• Kurumsal Bilgiler: Şirket adı, vergi numarası, ticaret sicil numarası
• Finansal Bilgiler: Fatura bilgileri, ödeme bilgileri
• Teknik Veriler: IP adresi, çerez verileri, tarayıcı bilgileri, cihaz bilgileri
• İşlem Bilgileri: Kiralama geçmişi, hizmet talepleri, iletişim kayıtları`
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "3. Kişisel Verilerin Kullanım Amaçları",
            content: `Topladığımız kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:

• Kiralama ve hizmet sözleşmelerinin kurulması ve ifası
• Müşteri ilişkileri yönetimi ve müşteri memnuniyetinin sağlanması
• Ürün ve hizmetlerimizin geliştirilmesi
• Yasal yükümlülüklerin yerine getirilmesi
• Faturalandırma ve ödeme işlemlerinin gerçekleştirilmesi
• İletişim faaliyetlerinin yürütülmesi
• Pazarlama ve tanıtım faaliyetleri (onayınız dahilinde)
• Web sitesi performansının iyileştirilmesi ve güvenliğinin sağlanması`
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "4. Kişisel Verilerin Korunması",
            content: `Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari tedbirler almaktayız:

• SSL/TLS şifreleme teknolojisi kullanımı
• Güvenli sunucu altyapısı ve düzenli güvenlik güncellemeleri
• Yetkisiz erişime karşı güvenlik duvarları ve erişim kontrolleri
• Personel eğitimleri ve gizlilik sözleşmeleri
• Düzenli güvenlik denetimleri ve risk analizleri
• Veri minimizasyonu ve amaç sınırlaması ilkelerine uyum`
        },
        {
            icon: <AlertCircle className="w-6 h-6" />,
            title: "5. Kişisel Verilerin Paylaşımı",
            content: `Kişisel verileriniz, yalnızca gerekli durumlarda ve yasal çerçevede üçüncü kişilerle paylaşılabilir:

• Yasal yükümlülükler gereği kamu kurum ve kuruluşları
• Hizmet sağlayıcılar (lojistik, ödeme sistemleri, teknik destek)
• İş ortaklarımız (yalnızca hizmet sunumu için gerekli olan bilgiler)
• Hukuki süreçler ve yasal talepler

Üçüncü taraflarla paylaşım yapılırken, kişisel verilerinizin korunması için gerekli sözleşmeler ve güvenlik önlemleri alınmaktadır.`
        },
        {
            icon: <CheckCircle2 className="w-6 h-6" />,
            title: "6. Çerezler (Cookies)",
            content: `Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanılmaktadır:

• Zorunlu Çerezler: Web sitesinin temel işlevlerini yerine getirmek için gereklidir
• Performans Çerezleri: Web sitesi performansını ölçmek ve iyileştirmek için kullanılır
• İşlevsellik Çerezleri: Tercihlerinizi hatırlamak için kullanılır
• Pazarlama Çerezleri: Size özel içerik sunmak için kullanılır (onayınız dahilinde)

Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz.`
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "7. Haklarınız",
            content: `6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:

• Kişisel verilerinizin işlenip işlenmediğini öğrenme
• İşlenmişse buna ilişkin bilgi talep etme
• İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme
• Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme
• Eksik veya yanlış işlenmişse düzeltilmesini isteme
• Kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme
• Düzeltme, silme veya yok edilme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme
• Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonuç doğmasına itiraz etme
• Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme`
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "8. Veri Saklama Süreleri",
            content: `Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve yasal saklama yükümlülüklerine uygun olarak saklanmaktadır. İlgili mevzuat uyarınca:

• Ticari kayıtlar: 10 yıl
• Muhasebe kayıtları: 10 yıl
• İş sözleşmeleri ve belgeler: 10 yıl
• Pazarlama izinleri: İzin geri alınıncaya kadar

Saklama süresi sona eren kişisel veriler, güvenli bir şekilde silinir, yok edilir veya anonim hale getirilir.`
        },
        {
            icon: <AlertCircle className="w-6 h-6" />,
            title: "9. Değişiklikler",
            content: `Bu Gizlilik Politikası, yasal düzenlemeler ve iş süreçlerimiz doğrultusunda güncellenebilir. Önemli değişiklikler yapıldığında, web sitemizde yayınlayarak sizi bilgilendireceğiz. Politikayı düzenli olarak gözden geçirmenizi öneririz.`
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "10. İletişim",
            content: `Kişisel verilerinizle ilgili sorularınız, talepleriniz veya şikayetleriniz için bizimle iletişime geçebilirsiniz:

ECR Etkinlik Bilgisayar Teknolojileri A.Ş.
Adres: İstoç 32. Ada (2452. Sok) No:78-80, Mahmutbey, Bağcılar, İstanbul
E-posta: info@etkinlikbilgisayar.com
Telefon: 0850 228 75 74

Başvurularınız en geç 30 gün içinde değerlendirilecek ve sonuçlandırılacaktır.`
        }
    ];

    return (
        <>
            <Helmet>
                <title>Gizlilik Politikası | ECR Etkinlik Bilgisayar</title>
                <meta name="description" content="ECR Etkinlik Bilgisayar gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında detaylı bilgi." />
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href="https://etkinlikbilgisayar.com/gizlilik-politikasi" />
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
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-600 rounded-full text-sm font-medium">
                            <Shield className="w-4 h-4" />
                            Gizlilik Politikası
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Gizlilik Politikası
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Kişisel verilerinizin güvenliği bizim için önceliklidir. Bu politika, verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
                        </p>
                        <p className="text-sm text-gray-500 mt-4">
                            Son Güncelleme: 31 Ocak 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
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

                    {/* Important Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6"
                    >
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Önemli Bilgilendirme</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Bu Gizlilik Politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuat uyarınca hazırlanmıştır.
                                    Web sitemizi kullanarak bu politikayı kabul etmiş sayılırsınız. Haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicyPage;


import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Shield, FileText, Users, Database, Lock, AlertTriangle, CheckCircle2, Mail } from 'lucide-react';

const KVKKPage = () => {
    const sections = [
        {
            icon: <FileText className="w-6 h-6" />,
            title: "1. Veri Sorumlusu",
            content: `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla ECR Etkinlik Bilgisayar Teknolojileri A.Ş. tarafından aşağıda açıklanan kapsamda işlenebilecektir.

Ticaret Unvanı: ECR Etkinlik Bilgisayar Teknolojileri A.Ş.
Adres: İstoç 32. Ada (2452. Sok) No:78-80, Mahmutbey, Bağcılar, İstanbul
E-posta: info@etkinlikbilgisayar.com
Telefon: 0850 228 75 74`
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "2. Kişisel Verilerin İşlenme Amaçları",
            content: `Kişisel verileriniz, KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dahilinde aşağıdaki amaçlarla işlenebilmektedir:

• Kiralama ve hizmet sözleşmelerinin kurulması, ifası ve takibi
• Müşteri ilişkileri yönetimi ve müşteri memnuniyetinin artırılması
• Ürün ve hizmetlerin geliştirilmesi, planlanması ve iyileştirilmesi
• Yasal yükümlülüklerin yerine getirilmesi ve hukuki işlemlerin yürütülmesi
• Finans ve muhasebe işlemlerinin yürütülmesi
• İletişim faaliyetlerinin planlanması ve icrası
• Pazarlama ve tanıtım faaliyetlerinin yürütülmesi (açık rıza dahilinde)
• Bilgi güvenliği süreçlerinin yürütülmesi
• İş sürekliliğinin sağlanması ve risk yönetimi
• Yetkili kişi, kurum ve kuruluşlara bilgi verilmesi`
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "3. Kişisel Verilerin Aktarılması",
            content: `Toplanan kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde iş ortaklarımıza, tedarikçilerimize, hukuk ve mali müşavirlik hizmeti aldığımız kuruluşlara, yasal yükümlülükler çerçevesinde kamu kurum ve kuruluşlarına aktarılabilmektedir.`
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "4. Kişisel Verilerin Toplanma Yöntemi",
            content: `Kişisel verileriniz web sitemiz, e-posta, telefon, sözleşmeler, etkinlikler, sosyal medya ve iş ortakları aracılığıyla otomatik veya otomatik olmayan yöntemlerle toplanmaktadır.`
        },
        {
            icon: <CheckCircle2 className="w-6 h-6" />,
            title: "5. Kişisel Veri Sahibinin Hakları",
            content: `KVKK'nın 11. maddesi uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini isteme, silinmesini talep etme ve diğer haklara sahipsiniz.`
        }
    ];

    return (
        <>
            <Helmet>
                <title>KVKK Aydınlatma Metni | ECR Etkinlik Bilgisayar</title>
                <meta name="description" content="ECR Etkinlik Bilgisayar KVKK aydınlatma metni. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme." />
                <link rel="canonical" href="https://etkinlikbilgisayar.com/kvkk" />
            </Helmet>

            <section className="bg-black text-white pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-5xl font-bold mb-6">KVKK Aydınlatma Metni</h1>
                        <p className="text-xl text-gray-400">6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
                    {sections.map((section, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-gray-50 rounded-2xl p-8">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">{section.icon}</div>
                                <h2 className="text-2xl font-bold text-gray-900 pt-2">{section.title}</h2>
                            </div>
                            <div className="text-gray-600 leading-relaxed whitespace-pre-line pl-16">{section.content}</div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default KVKKPage;

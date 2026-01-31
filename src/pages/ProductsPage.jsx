
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
  CheckCircle2,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [expandedCategory, setExpandedCategory] = useState('bilgisayar');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Ürün detay bilgileri - etkinlikbilgisayar.com'dan alındı
  const productDetails = {
    "Laptop Kiralama": {
      title: "Bilgisayar Kiralama",
      description: "Bilgisayar kiralama hizmetleri, işletmelerin ve bireylerin teknolojik ihtiyaçlarını karşılamak için son derece önemlidir. İster bir etkinlik düzenliyor olun, ister işletmeniz için ekstra bilgisayarlara ihtiyacınız olsun, doğru kiralama hizmeti ile işlerinizi daha verimli hale getirebilirsiniz.\n\nİşletmeniz veya organizasyonunuz için en uygun bilgisayar kiralama hizmeti seçerken dikkat etmeniz gereken birkaç önemli faktör vardır. Bunlardan ilki, hizmetin kalitesidir. Kaliteli bir hizmet, sizin ihtiyaçlarınıza uygun bilgisayarları en uygun fiyata sağlayacaktır.\n\nBir diğer önemli faktör ise hizmetin güvenilirliğidir. Kullanımı kolay bir kiralama sistemi ve güncel ekipmanlar sunan güvenilir bir kiralama hizmeti, işinizi sürdürmenize yardımcı olur. Ayrıca, kiralama süreci boyunca teknik destek hizmeti de sunulması gereklidir.",
      image: "/products/laptop_kiralama.png"
    },
    "MacBook Pro Kiralama": {
      title: "MacBook Kiralama",
      description: "MacBook kiralama hizmetleri, özellikle tasarım, yazılım, fotoğraf ve video işleme gibi profesyonel işlerle uğraşan kişilerin ihtiyaç duydukları bir hizmettir. MacBook'lar, yüksek performansları ve kullanım kolaylıkları ile popüler bir seçenek haline gelmiştir.\n\nDoğru MacBook kiralama hizmeti seçerken, bazı önemli faktörleri dikkate almanız gereklidir. İlk olarak, hizmetin kalitesi önemlidir. Kaliteli bir hizmet, ihtiyaçlarınıza uygun MacBook'ları en uygun fiyata sağlayacaktır.\n\nAyrıca, hizmetin güvenilirliği de önemlidir. Kullanımı kolay bir kiralama sistemi ve güncel MacBook modelleri sunan güvenilir bir kiralama hizmeti, profesyonel işlerinizi sorunsuz bir şekilde yönetmenize yardımcı olur.",
      image: "/products/macbook_pro.png"
    },
    "MacBook Air Kiralama": {
      title: "MacBook Kiralama",
      description: "MacBook kiralama hizmetleri, özellikle tasarım, yazılım, fotoğraf ve video işleme gibi profesyonel işlerle uğraşan kişilerin ihtiyaç duydukları bir hizmettir. MacBook'lar, yüksek performansları ve kullanım kolaylıkları ile popüler bir seçenek haline gelmiştir.\n\nDoğru MacBook kiralama hizmeti seçerken, bazı önemli faktörleri dikkate almanız gereklidir. İlk olarak, hizmetin kalitesi önemlidir. Kaliteli bir hizmet, ihtiyaçlarınıza uygun MacBook'ları en uygun fiyata sağlayacaktır.",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=600"
    },
    "iMac Kiralama": {
      title: "iMac Kiralama",
      description: "Başarılı bir etkinlik için gerekli olan birçok bileşen vardır ve iyi bir teknolojik alt yapı, etkinliğinizi unutulmaz hale getirmenin önemli bir parçasıdır. Bu nedenle, etkinlikleriniz için en son teknoloji iMac'leri kiralamak iyi bir fikir olabilir. iMac'ler, yüksek performansı ve şık tasarımlarıyla ünlüdür ve etkinlikleriniz için gereken tüm işlevleri sağlar.\n\nEtkinliğinizde sunumlar, gösteriler veya diğer görsel materyaller için iyi bir bilgisayara ihtiyacınız varsa, iMac kiralama sizin için doğru seçenek olabilir. iMac'ler, yüksek çözünürlüklü ekranları ve hızlı işlemcileri sayesinde etkileyici bir görüntüleme deneyimi sunarlar.",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600"
    },
    "iPad Pro Kiralama": {
      title: "iPad Kiralama",
      description: "iPad kiralama hizmetleri, birçok işletmenin veya organizasyonun etkinliklerinde, toplantılarında veya diğer faaliyetlerinde ihtiyaç duydukları bir hizmettir. iPad'ler, mobil cihazlar ve tabletler arasında özellikle popüler bir seçenek olmuştur, çünkü portatif ve kullanımı kolaydır.\n\nDoğru iPad kiralama hizmeti seçerken, bazı önemli faktörleri dikkate almanız gereklidir. İlk olarak, hizmetin kalitesi önemlidir. Kaliteli bir hizmet, ihtiyaçlarınıza uygun iPad'leri en uygun fiyata sağlayacaktır.\n\nAyrıca, hizmetin güvenilirliği de önemlidir. Kullanımı kolay bir kiralama sistemi ve güncel iPad modelleri sunan güvenilir bir kiralama hizmeti, etkinliklerinizi veya toplantılarınızı sorunsuz bir şekilde yönetmenize yardımcı olur.",
      image: "/products/ipad_pro.png"
    },
    "iPad Air Kiralama": {
      title: "iPad Kiralama",
      description: "iPad kiralama hizmetleri, birçok işletmenin veya organizasyonun etkinliklerinde, toplantılarında veya diğer faaliyetlerinde ihtiyaç duydukları bir hizmettir. iPad'ler, mobil cihazlar ve tabletler arasında özellikle popüler bir seçenek olmuştur, çünkü portatif ve kullanımı kolaydır.\n\nDoğru iPad kiralama hizmeti seçerken, bazı önemli faktörleri dikkate almanız gereklidir. İlk olarak, hizmetin kalitesi önemlidir.",
      image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=600"
    },
    "LED TV Kiralama 55\"": {
      title: "LED TV Kiralama",
      description: "Etkinliklerde kullanılmak üzere led tv kiralama hizmetleri, birçok firma tarafından sunulmaktadır. Bu hizmetler, organizasyonlar için oldukça önemli bir ihtiyaçtır. Organizasyonlar, özellikle büyük etkinliklerde katılımcıların rahat bir şekilde etkinliği takip edebilmesi için büyük boyutlu, yüksek kaliteli led tv'lere ihtiyaç duyarlar.\n\nEtkinliklere led tv kiralama hizmetleri, işletmelerin ihtiyaçlarına göre farklı boyut ve özelliklerde sunulmaktadır. Bu hizmetler aracılığıyla organizasyonlar, etkinlik boyunca ihtiyaç duyacakları led tv'leri kiralayabilir ve bu tv'leri kurulum, montaj ve demontaj işlemlerini de içeren tam bir hizmet paketiyle alabilirler.",
      image: "/products/led_tv.png"
    },
    "LED TV Kiralama 65\"": {
      title: "LED TV Kiralama",
      description: "Etkinliklerde kullanılmak üzere led tv kiralama hizmetleri, birçok firma tarafından sunulmaktadır. Bu hizmetler, organizasyonlar için oldukça önemli bir ihtiyaçtır. Organizasyonlar, özellikle büyük etkinliklerde katılımcıların rahat bir şekilde etkinliği takip edebilmesi için büyük boyutlu, yüksek kaliteli led tv'lere ihtiyaç duyarlar.",
      image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&q=80&w=600"
    },
    "Video Wall Kiralama": {
      title: "Video Wall Kiralama",
      description: "Etkinlikler, işletmeler için önemli bir pazarlama aracıdır ve kaliteli bir etkinlik planlamak, işletmenizin başarısı için kritik öneme sahiptir. Etkinliğinizdeki görsel unsurlar, müşterilerinize etkili bir şekilde mesajınızı iletmek için çok önemlidir. Bu nedenle, etkinliklerinizde kullanabileceğiniz videowall kiralama hizmetimiz, işletmenizin ihtiyaçlarına uygun bir şekilde tasarlanmıştır.\n\nVideowall kiralama hizmetimiz, yüksek kaliteli ekranları ve kullanımı kolay arayüzü sayesinde, etkinliklerinizde müşterilerinize unutulmaz bir deneyim sunmanızı sağlar.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=600"
    },
    "Projeksiyon Kiralama": {
      title: "Projeksiyon Kiralama",
      description: "Etkinlikler, sunumlar ve gösteriler için görsel bir araç olan projeksiyon cihazları, kaliteli bir sunum yapmak için önemlidir. Etkinliklerde projeksiyon cihazı kiralama, etkinliğinizi daha etkili hale getirmenize ve katılımcılarınızın ilgisini çekmenize yardımcı olabilir.\n\nBir etkinlikte projeksiyon cihazı kullanmak, katılımcılarınızın daha iyi anlamalarını sağlar. Sadece konuşarak sunum yapmak yerine, görsellerle desteklenmiş bir sunum yapmak, anlatılmak istenen konunun daha iyi anlaşılmasını sağlar.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=600"
    },
    "Lazer Yazıcı Kiralama": {
      title: "Yazıcı Kiralama",
      description: "Yazıcı kiralama hizmetleri, işletmeler ve bireyler için sıkça tercih edilen bir hizmettir. Özellikle fuar, etkinlik, toplantı gibi organizasyonlarda ya da belirli bir dönem için bir yazıcıya ihtiyacı olan kişiler tarafından tercih edilir. Doğru bir yazıcı kiralama hizmeti seçerken, bazı önemli faktörleri dikkate almak gerekir.\n\nİlk olarak, kiralayacağınız yazıcının özellikleri önemlidir. Hızlı baskı yapabilen, yüksek çözünürlük, çift taraflı baskı yapabilme özelliği gibi özellikler, kaliteli bir yazıcının sahip olması gereken özelliklerdir.",
      image: "/products/lazer_yazici.png"
    },
    "Fotoğraf Yazıcı Kiralama": {
      title: "Fotoğraf Yazıcı Kiralama",
      description: "ECR Etkinlik Bilgisayar olarak ihtiyaçlarınıza yönelik renkli yazıcı kiralamalarında, açılışlarda, kongrelerde, etkinliklerde, toplantılarınızda yani tüm ihtiyaç duyduğunuz zamanlarda kullanılabilecek, Siyah Beyaz ve Renkli yazıcılar ile birlikte yaka kartı baskılamaya özel yazıcılarda da bizlerden destek alabilirsiniz.\n\nYazıcılarımız lazer, inkjet(mürekkep püskürtmeli), termal yazıcılar olmak üzere farklı kategorilere ayrılmaktadır.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600"
    },
    "Meta Quest 3 Kiralama": {
      title: "VR Kiralama",
      description: "VR (Sanal Gerçeklik) kiralama hizmetleri, modern etkinlikler ve organizasyonlar için giderek daha popüler hale gelmektedir. Meta Quest 3, son teknoloji sanal gerçeklik deneyimi sunan, kablosuz ve kullanımı kolay bir VR başlığıdır.\n\nMeta Quest 3 kiralama hizmeti, etkinliklerinize interaktif ve unutulmaz bir deneyim katmanın mükemmel yoludur. Ürün lansmanları, fuarlar, kurumsal etkinlikler ve eğitim programları için ideal bir çözümdür.",
      image: "/products/meta_quest.png"
    },
    "PlayStation 5 Kiralama": {
      title: "PlayStation 5 Kiralama",
      description: "PlayStation 5 kiralama hizmetleri, gaming etkinlikleri, turnuvalar ve eğlence organizasyonları için mükemmel bir seçenektir. Sony'nin en yeni nesil konsolu olan PS5, 4K çözünürlük, ultra hızlı SSD ve ray tracing teknolojisi ile oyun deneyimini zirveye taşır.\n\nPS5 kiralama hizmeti, etkinliklerinize profesyonel bir gaming deneyimi katmanın en kolay yoludur. Ürün lansmanları, gaming turnuvaları, kurumsal etkinlikler ve özel organizasyonlar için ideal bir çözümdür.",
      image: "/products/playstation_5.png"
    },
    "Profesyonel Ses Sistemi Kiralama": {
      title: "Ses Sistemi Kiralama",
      description: "Etkinliklerde mükemmel bir ses kalitesi sağlamak, olayın başarısı için kritik önem taşır. Bu nedenle, doğru ses sistemi seçimi, organizasyonunuzun amacına uygun olmalı ve kaliteli malzemelerden oluşmalıdır. Ancak, bu gibi özel etkinliklerde profesyonel bir ses sistemi satın almak oldukça pahalıdır. Bu nedenle, etkinlikler için özel ses sistemi kiralama, birçok organizasyonun tercih ettiği bir çözümdür.\n\nEtkinlikler için ses sistemi kiralamanın bir diğer avantajı ise, etkinlik sonrasında cihazları depolama, bakım, onarım ve güncelleme gibi masraflardan kurtulma imkanıdır.",
      image: "/products/ses_sistemi.png"
    }
  };

  const categories = [
    {
      id: 'bilgisayar',
      icon: <Monitor className="w-6 h-6" />,
      title: "Bilgisayar & Laptop",
      description: "Profesyonel dizüstü bilgisayarlar, masaüstü sistemler ve Apple ürünleri",
      heroImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "Laptop Kiralama", description: "Intel Core i5, i7, i9 işlemcili profesyonel dizüstü bilgisayarlar", image: "/products/laptop_kiralama.png", featured: true },
        { name: "MacBook Pro Kiralama", description: "Apple M1, M2, M3 çipli MacBook Pro modelleri", image: "/products/macbook_pro.png", featured: true },
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
      description: "iPad, Android tablet ve akıllı telefon çözümleri",
      heroImage: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "iPad Pro Kiralama", description: "12.9\" ve 11\" iPad Pro modelleri, M2 çipli", image: "/products/ipad_pro.png", featured: true },
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
      description: "LED TV, video wall, projeksiyon ve dokunmatik ekranlar",
      heroImage: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "LED TV Kiralama 55\"", description: "55\" 4K UHD Smart LED televizyonlar", image: "/products/led_tv.png", featured: true },
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
      description: "Lazer yazıcı, fotoğraf yazıcı ve akreditasyon sistemleri",
      heroImage: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "Lazer Yazıcı Kiralama", description: "Siyah-beyaz ve renkli lazer yazıcılar", image: "/products/lazer_yazici.png", featured: true },
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
      description: "Sanal gerçeklik ve artırılmış gerçeklik çözümleri",
      heroImage: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "Apple Vision Pro Kiralama", description: "Apple'ın yeni nesil karma gerçeklik gözlüğü", image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80&w=600", featured: true },
        { name: "Meta Quest 3 Kiralama", description: "En yeni Meta VR başlığı", image: "/products/meta_quest.png", featured: true },
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
      description: "PlayStation, Xbox, gaming PC ve aksesuarları",
      heroImage: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "PlayStation 5 Kiralama", description: "Sony PS5 konsol, disk ve dijital versiyon", image: "/products/playstation_5.png", featured: true },
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
      description: "Profesyonel ses sistemleri ve tercüme ekipmanları",
      heroImage: "https://images.unsplash.com/photo-1545459720-aacaf5090834?auto=format&fit=crop&q=80&w=1200",
      products: [
        { name: "Profesyonel Ses Sistemi Kiralama", description: "Line array ve aktif hoparlör sistemleri", image: "/products/ses_sistemi.png", featured: true },
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

  const openProductModal = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

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
            initial={{ opacity: 0, y: 20 }}
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
              <Search className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
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
                            onClick={() => openProductModal(product)}
                            className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                              <div className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700">
                                Detayları Gör <ArrowRight className="w-4 h-4" />
                              </div>
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
                            onClick={() => openProductModal(product)}
                            className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
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

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && productDetails[selectedProduct.name] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProductModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={closeProductModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Product Image */}
              <div className="relative h-80 overflow-hidden rounded-t-2xl">
                <img
                  src={productDetails[selectedProduct.name].image}
                  alt={productDetails[selectedProduct.name].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-4xl font-bold text-white mb-2">{productDetails[selectedProduct.name].title}</h2>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  {productDetails[selectedProduct.name].description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/hizli-kirala"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-bold transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/30"
                  >
                    Hızlı Kiralama Talebi
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:08502287574"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold transition-all duration-300 hover:bg-gray-800"
                  >
                    <Phone className="w-5 h-5" />
                    0850 228 75 74
                  </a>
                </div>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 text-center">
                    <CheckCircle2 className="w-4 h-4 inline mr-2 text-red-600" />
                    Ürün Kiralama veya Çözüm Almak için{' '}
                    <a href="mailto:info@etkinlikbilgisayar.com" className="text-red-600 font-semibold hover:text-red-700">
                      info@etkinlikbilgisayar.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

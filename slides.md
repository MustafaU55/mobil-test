---
theme: default
background: https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
transition: slide-up
title: Mobil Uygulama Test Süreçleri
fonts:
  sans: 'Inter, ui-sans-serif, system-ui, -apple-system'
  mono: 'Fira Code'
css: unocss
---

<style>
/* Global Tasarım Ayarları */
.slidev-layout {
  background: #F8FAFC; 
  color: #0F172A; 
}

/* KAPAK ARKA PLANI İÇİN ÖZEL AYAR - Kapakta resmi opak kullan, diğer sayfalarda gri kullan */
.slidev-layout.cover {
  background: linear-gradient(rgba(248, 250, 252, 0.85), rgba(248, 250, 252, 0.95)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
}

h1 { font-weight: 800; font-size: 2.8rem !important; color: #0F172A !important; line-height: 1.2; }
h2, h3 { font-weight: 700; color: #1E293B !important; }
p, li { color: #334155; line-height: 1.6; }

/* Kapak Başlığı Özel Efekti */
.cover-title {
  background: linear-gradient(135deg, #0F172A 0%, #2563EB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3.8rem !important;
  line-height: 1.1;
  margin-bottom: 1rem;
}

/* Şık Kart Tasarımları */
.card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

.highlight-box {
  background: #EFF6FF;
  border-left: 4px solid #2563EB;
  padding: 1rem;
  border-radius: 0 8px 8px 0;
}
</style>

<!-- KAPAK SAYFASI (GÖSTERİŞLİ) -->

<div class="mt-10">
  <h1 class="cover-title">Mobil Uygulama Testlerinde <br> Modern Yaklaşımlar</h1>
  
  <div class="mt-6 mb-6 h-1.5 w-32 bg-blue-600 mx-auto rounded-full shadow-lg"></div>

  <p class="text-xl font-bold text-slate-700 tracking-wide">
    Cihaz Fragmantasyonundan Mağaza Onay Süreçlerine <br> Uçtan Uca Kalite Güvencesi
  </p>
</div>

<div class="absolute bottom-12 left-0 right-0 bg-white bg-opacity-60 backdrop-blur-md py-4 border-y border-slate-200">
  <p class="text-sm font-black text-slate-800 uppercase tracking-widest">Sunan: [İsminiz]</p>
  <p class="text-xs text-blue-700 mt-1 font-bold">Yazılım Test Süreçleri Dersi</p>
</div>

---
layout: default
---

# Gündem ve Yol Haritası
Mobil test süreçlerini 4 ana eksende inceleyeceğiz.

<div class="grid grid-cols-2 gap-6 mt-10">
  <div class="card border-l-4 border-l-blue-600">
    <h3 class="text-blue-700 mb-2">1. Ortam ve Karmaşıklık</h3>
    <ul class="text-sm">
      <li>Mobil Ekosistemin Doğası</li>
      <li>Test Piramidi</li>
      <li>Gerçek Cihaz vs. Simülatör</li>
    </ul>
  </div>
  <div class="card border-l-4 border-l-blue-600">
    <h3 class="text-blue-700 mb-2">2. Senaryo Bazlı Testler</h3>
    <ul class="text-sm">
      <li>Yaşam Döngüsü (Lifecycle)</li>
      <li>Kesinti (Interrupt) Testleri</li>
      <li>Ağ ve Bağlantı Senaryoları</li>
    </ul>
  </div>
  <div class="card border-l-4 border-l-blue-600">
    <h3 class="text-blue-700 mb-2">3. Performans ve Güvenlik</h3>
    <ul class="text-sm">
      <li>Donanım ve Kaynak Tüketimi</li>
      <li>Kullanıcı Deneyimi (UX)</li>
      <li>Veri Güvenliği</li>
    </ul>
  </div>
  <div class="card border-l-4 border-l-blue-600">
    <h3 class="text-blue-700 mb-2">4. Süreç ve Dağıtım</h3>
    <ul class="text-sm">
      <li>Mağaza İnceleme Süreçleri</li>
      <li>Vaka Analizleri</li>
      <li>Otomasyon ve CI/CD</li>
    </ul>
  </div>
</div>

---
layout: two-cols
---

# Mobil Ekosistemin Doğası
<p class="text-sm text-slate-500 -mt-2">Grup 6: Yazılım Karmaşıklığı'na Atıfla</p>

Mobil cihazlar, web tarayıcılarından farklı olarak donanıma sıkı sıkıya bağlı bir entropi yaratır.

- **OS Fragmantasyonu:** Android pazarındaki binlerce farklı cihaz/marka vs. iOS'in kapalı ancak sürümler arası farklı yapısı.
- **Ekran ve Çözünürlük:** Farklı en-boy oranları (notch, dinamik ada) ve piksel yoğunlukları.
- **Donanım:** Farklı işlemci mimarileri, GPU kapasiteleri ve sensörler.

::right::

<div class="ml-8 mt-12 card border-t-4 border-t-blue-600 bg-white">
  <h3 class="font-bold text-lg mb-4 text-center">Karmaşıklık Yönetimi</h3>
  <p class="text-sm text-center">Cihaz çeşitliliğinin yarattığı test kombinasyonları eksponansiyel olarak artar. Bu durum, <b>Risk Tabanlı Test (RBT)</b> stratejilerini zorunlu kılar.</p>
</div>

---

# Test Piramidi ve Mobil Uygulamalar
Modern mobil mimaride testlerin katmanlı yapısı.

<div class="flex items-center gap-10 mt-8">
  <div class="w-1/2">

```mermaid
graph TD
  A[Uçtan Uca / E2E] --> B[Widget / Component]
  B --> C[Birim / Unit Tests]
  style A fill:#DBEAFE,stroke:#2563EB,color:#1E3A8A
  style B fill:#BFDBFE,stroke:#2563EB,color:#1E3A8A
  style C fill:#93C5FD,stroke:#2563EB,color:#1E3A8A
```

  </div>
  <div class="w-1/2 space-y-4">
    <div class="highlight-box">
      <b>Birim Testler (Unit):</b> İş mantığının (business logic) ve API isteklerinin dışa bağımlı olmadan doğrulanması.
    </div>
    <div class="highlight-box">
      <b>Widget Testleri:</b> Arayüz bileşenlerinin (Örn: Flutter, React Native) bağımsız çalışabilirliği.
    </div>
    <div class="highlight-box">
      <b>Uçtan Uca (E2E):</b> Appium gibi araçlarla gerçek kullanıcı akışlarının uçtan uca simülasyonu.
    </div>
  </div>
</div>

---

# Gerçek Cihaz mı, Emülatör mü?
Test ortamı seçimi projenin bütçesini ve hızını doğrudan etkiler.

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="card">
    <div class="flex items-center gap-3 mb-4">
      <div class="text-2xl">💻</div>
      <h3 class="text-lg font-bold">Emülatör / Simülatör</h3>
    </div>
    <ul class="text-sm space-y-2">
      <li><b>Avantaj:</b> Hızlı kurulur, maliyetsizdir, CI/CD pipeline'larına kolay entegre olur.</li>
      <li><b>Dezavantaj:</b> Gerçek işlemci mimarisini yansıtmaz. GPS, kamera, donanım testlerinde yetersizdir.</li>
      <li><b>Kullanım:</b> UI testleri ve geliştirme aşaması.</li>
    </ul>
  </div>

  <div class="card">
    <div class="flex items-center gap-3 mb-4">
      <div class="text-2xl">📱</div>
      <h3 class="text-lg font-bold">Gerçek Cihaz (Real Device)</h3>
    </div>
    <ul class="text-sm space-y-2">
      <li><b>Avantaj:</b> Kesin sonuç verir. Batarya tüketimi, ısınma, bellek yönetimi (OS Kill) sadece burada ölçülebilir.</li>
      <li><b>Dezavantaj:</b> Temini pahalıdır, bakımı zordur, laboratuvar gerektirir.</li>
      <li><b>Kullanım:</b> Performans testleri ve canlı öncesi son onay.</li>
    </ul>
  </div>
</div>

<p class="text-center mt-6 text-sm font-bold text-blue-700">Strateji: Hibrit Yaklaşım (Kritik senaryolar cihazda, diğerleri emülatörde)</p>

---
layout: two-cols
---

# Yaşam Döngüsü (Lifecycle)
Uygulamanın durumu işletim sistemi tarafından sürekli değiştirilir.

- **Durum Yönetimi (State):** 
  Uygulama arka plana (Background) atıldığında veriler kayboluyor mu? Tekrar öne (Foreground) alındığında oturum aktif mi?
- **Sistem Müdahalesi (OS Kill):** 
  İşletim sistemi RAM'i boşaltmak için arkaplandaki uygulamayı acımasızca kapatır. Kullanıcı geri döndüğünde baştan mı başlıyor?
- **Açılış Performansı:** 
  - *Cold Start:* Sıfırdan açılış hızı.
  - *Warm Start:* Arkaplandan geri dönüş hızı.

::right::

<div class="ml-8 mt-12 p-6 bg-slate-100 rounded-xl border border-slate-200">
  <p class="text-sm font-bold text-center text-slate-700 mb-4">Model Tabanlı Test Yaklaşımı</p>

```mermaid
stateDiagram-v2
    [*] --> Foreground
    Foreground --> Background : Home Butonu
    Background --> Foreground : Geri Dönüş
    Background --> Terminated : OS Kill
```

</div>

---

# Kesinti (Interrupt) Testleri
Mobil cihazlar "iletişim" aracıdır, testler bu gerçeğe göre yapılmalıdır.

<div class="mt-8 card bg-white">
  <p class="mb-4">Bir kullanıcı uygulamada kritik bir işlem yaparken (Örn: Ödeme onayı veya form doldurma) dışarıdan gelen bir kesintinin uygulamayı çökertmemesi gerekir.</p>
  
  <div class="grid grid-cols-2 gap-4 mt-6">
    <div class="p-4 bg-slate-50 border border-slate-200 rounded">
      <h4 class="font-bold text-blue-700">Yaygın Kesintiler</h4>
      <ul class="text-sm mt-2">
        <li>Gelen GSM araması veya SMS</li>
        <li>WhatsApp / Anlık Bildirimler (Push)</li>
        <li>Alarm çalması</li>
        <li>%10 / %20 Düşük Pil Uyarısı</li>
      </ul>
    </div>
    <div class="p-4 bg-slate-50 border border-slate-200 rounded">
      <h4 class="font-bold text-red-700">Beklenen Davranış</h4>
      <ul class="text-sm mt-2">
        <li>İşlem beklemeye (pause) alınmalı.</li>
        <li>Uygulama kesinlikle <b>crash olmamalı</b>.</li>
        <li>Kesinti bitince işlem kaldığı yerden devam etmeli.</li>
      </ul>
    </div>
  </div>
</div>

---

# Ağ ve Bağlantı Senaryoları
Bağlantı her zaman sabit ve mükemmel değildir.

- **Bant Genişliği Geçişleri:** 
  Kullanıcı asansöre bindiğinde 5G'den Edge'e (zayıf internet) düşen bağlantıda uygulama donuyor mu (Timeout)?
- **Ağ Değişimi (Handover):** 
  Evden çıkarken Wi-Fi'dan hücresel veriye (Cellular) geçişte güvenlik oturumu (Session) kopuyor mu?
- **Çevrimdışı (Offline) Mod:** 
  Uygulama internet yokken de temel işlevlerini yerine getirebilmeli.

<div class="mt-8 highlight-box">
  <b>Mühendislik Çözümü:</b> Çevrimdışı yapılan form veya kargo teslim işlemlerinin, cihaz internete bağlandığı anda arka planda veritabanı (SQLite/Room) ile otomatik senkronize edilmesinin test edilmesi.
</div>

---

# Donanım ve Sensör Entegrasyonu
Masaüstü yazılımlarında olmayan "fiziksel dünya" bağımlılıkları.

<div class="grid grid-cols-3 gap-6 mt-10">
  <div class="card text-center border-t-4 border-t-red-500">
    <div class="text-3xl mb-2">📍</div>
    <h3 class="font-bold text-sm mb-2">Lokasyon (GPS)</h3>
    <p class="text-xs">Hareket halindeki lojistik uygulamalarının sahte lokasyonlara (Mock Location) ve arka plan kısıtlamalarına tepkisi.</p>
  </div>
  
  <div class="card text-center border-t-4 border-t-blue-500">
    <div class="text-3xl mb-2">👁️</div>
    <h3 class="font-bold text-sm mb-2">Biyometrik Veri</h3>
    <p class="text-xs">FaceID ve TouchID ile login süreçlerinde şifreleme ve sahte yüz/parmak izi reddetme yetenekleri.</p>
  </div>

  <div class="card text-center border-t-4 border-t-green-500">
    <div class="text-3xl mb-2">📸</div>
    <h3 class="font-bold text-sm mb-2">Kamera & İzinler</h3>
    <p class="text-xs">Kamera açılış süresi, galeri erişim izinlerinin reddedilmesi durumunda uygulamanın hata yönetimi (Error Handling).</p>
  </div>
</div>

---

# Performans ve Kaynak Tüketimi
Bir uygulamanın "çalışması" yeterli değildir, cihazı "öldürmemelidir".

<div class="space-y-4 mt-8">
  <div class="flex items-start gap-4 p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
    <div class="text-3xl w-12 text-center">🔋</div>
    <div>
      <h4 class="font-bold text-slate-800">Batarya Tüketimi (Battery Drain)</h4>
      <p class="text-sm text-slate-600">Arka planda çalışan servislerin (özellikle GPS ve Bluetooth polling) pili sömürme hızı.</p>
    </div>
  </div>
  
  <div class="flex items-start gap-4 p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
    <div class="text-3xl w-12 text-center">🧠</div>
    <div>
      <h4 class="font-bold text-slate-800">Bellek Sızıntısı (Memory Leak)</h4>
      <p class="text-sm text-slate-600">Uygulama açık kaldıkça RAM tüketiminin artması. Çöp toplayıcının (Garbage Collector) çalışamadığı durumların tespiti.</p>
    </div>
  </div>

  <div class="flex items-start gap-4 p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
    <div class="text-3xl w-12 text-center">🔥</div>
    <div>
      <h4 class="font-bold text-slate-800">CPU ve Isınma (Thermal Throttling)</h4>
      <p class="text-sm text-slate-600">Aşırı işlemci yükü cihazı ısıttığında, işletim sisteminin frekans düşürmesi sonucu oluşan takılmalar (lag).</p>
    </div>
  </div>
</div>

---

# Kullanıcı Deneyimi (UX) ve Erişilebilirlik
Mobil arayüz, insan parmağına ve özel gereksinimlere göre test edilmelidir.

- **Dokunmatik Jestler (Gestures):** 
  Uzun basma (Long press), çift tıklama (Double tap), ve kaydırma (Swipe) eylemlerinin algılanma hassasiyeti.
- **Erişilebilirlik (Accessibility - a11y):** 
  - Görme engelli kullanıcılar için ekran okuyucuların (iOS VoiceOver, Android TalkBack) buton etiketlerini doğru okuması.
  - İşletim sisteminden font büyütüldüğünde tasarımın bozulmaması (Responsive Text).
- **Ergonomi ve Kullanılabilirlik:** 
  Kritik butonların "tek elle kullanıma" uygun bölgelerde (ekranın alt kısmı) yer alması.

---

# Güvenlik Testleri
Taşınabilir cihazlar fiziksel ve dijital hırsızlığa en açık platformlardır.

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="card">
    <h4 class="font-bold text-red-700 border-b border-slate-200 pb-2 mb-2">Veri Depolama</h4>
    <p class="text-sm">Hassas veriler (Token, Parola) asla düz metin (plain text) olarak kaydedilmemeli. iOS'te <b>Keychain</b>, Android'de <b>Encrypted SharedPreferences</b> kullanılmalı.</p>
  </div>
  
  <div class="card">
    <h4 class="font-bold text-red-700 border-b border-slate-200 pb-2 mb-2">Tersine Mühendislik</h4>
    <p class="text-sm">Kötü niyetli kişilerin APK/IPA kodlarını okumasını zorlaştırmak için kod karartma (Obfuscation) işleminin yapılması.</p>
  </div>
  
  <div class="card col-span-2 text-center">
    <h4 class="font-bold text-red-700 mb-2">API ve Trafik Güvenliği</h4>
    <p class="text-sm">Sunucu ile istemci arasındaki iletişimin araya girme saldırılarına (Man in the Middle) karşı <b>SSL Pinning</b> mimarisi ile korunması.</p>
  </div>
</div>

---

# Mağaza İnceleme (Store Review) Süreçleri
Kodun hatasız olması, uygulamanın yayınlanacağı anlamına gelmez.

- **Apple ve Google Kriterleri:** 
  Mağazaların katı tasarım (Human Interface Guidelines), gizlilik ve veri toplama kurallarına uyumluluk kontrolü.
- **Yasal ve Teknik Belgeler:** 
  Özellikle finans veya devlet (Belediye) uygulamalarında, mağaza yetkililerine uygulamanın resmi bir kuruma ait olduğunu kanıtlayan **"Authorization Letter" (Yetki Belgesi)** sunulması zorunluluğu.
- **Yaygın Red (Reject) Sebepleri:** 
  - Eksik meta veri (yanlış ekran görüntüleri).
  - Kullanıcıdan gereksiz donanım izni (örn: fener uygulaması için lokasyon) istenmesi.
  - İnceleme ekibi test ederken yaşanan herhangi bir "Crash" durumu.

---
layout: two-cols
---

# Vaka Analizleri
Gerçek dünya projelerinde karşılaşılan mobil test zorlukları.

<div class="mt-8 pr-4">
  <h4 class="font-bold text-blue-800 text-lg mb-2">Senaryo 1: Belediye Uygulaması</h4>
  <p class="text-sm text-slate-700"><b>Durum:</b> Resmi evrak yükleme ve e-devlet entegrasyonu barındıran hizmet uygulaması.</p>
  <p class="text-sm text-slate-700 mt-2"><b>Zorluk:</b> Apple inceleme ekibinin (Amerika) Türkiye e-devlet sistemine girememesi. Özel test hesapları ve ekran kayıt videoları (Demo Video) gönderilerek süreç aşıldı.</p>
</div>

::right::

<div class="ml-6 mt-20 card border-t-4 border-t-red-600 bg-white">
  <h4 class="font-bold text-red-800 text-lg mb-2">Senaryo 2: Kargo Takip</h4>
  <p class="text-sm text-slate-700"><b>Durum:</b> Kuryenin konumunu merkeze ileten lojistik uygulaması.</p>
  <p class="text-sm text-slate-700 mt-2"><b>Zorluk:</b> Kurye ekranı kilitlediğinde uygulamanın uyku moduna geçerek (Doze Mode) GPS'i kapatması.</p>
  <p class="text-sm text-slate-700 mt-2"><b>Çözüm:</b> "Foreground Service" yaşam döngüsü optimize edilerek sorun çözüldü.</p>
</div>

---

# Mobil Test Otomasyonu
Sürekli tekrar eden testleri kodla ifade etme sanatı.

<div class="grid grid-cols-3 gap-4 mt-8">
  <div class="card text-center border-t-4 border-slate-800">
    <h4 class="font-bold text-lg">Appium</h4>
    <p class="text-xs mt-2 text-slate-600">Cross-platform otomasyon için endüstri standardı. Tek kod tabanı ile hem iOS hem Android test edilebilir.</p>
  </div>
  <div class="card text-center border-t-4 border-green-600">
    <h4 class="font-bold text-lg">Espresso</h4>
    <p class="text-xs mt-2 text-slate-600">Android'in yerel test framework'ü. Arayüz elemanlarıyla senkronize çalıştığı için çok hızlı ve kararlıdır.</p>
  </div>
  <div class="card text-center border-t-4 border-blue-400">
    <h4 class="font-bold text-lg">XCUITest</h4>
    <p class="text-xs mt-2 text-slate-600">Apple'ın iOS için resmi framework'ü. Swift dilinde yazılır ve iOS simülatörleri ile tam uyum sağlar.</p>
  </div>
</div>

<div class="mt-8 highlight-box">
  <b>Mühendislik Zorluğu (Flakiness):</b> Mobil testler asenkrondur (animasyonlar, API gecikmeleri). "Flaky" (bazen geçip bazen kalan) testleri önlemek için statik süre (sleep) yerine dinamik beklemeler (Explicit Waits) yazılmalıdır.
</div>

---

# Bulut Cihaz Çiftlikleri (Device Farms)
Gerçek cihaz testlerini ofisten buluta taşıyan mimari.

<div class="flex items-center gap-8 mt-8">
  <div class="w-2/3">
    <p class="mb-6">Kendi ofisinizde yüzlerce telefonu barındırmak yerine, AWS veya Google veri merkezlerindeki gerçek telefonlara uzaktan bağlanma sistemidir.</p> 
    <ul class="text-sm space-y-3">
      <li><b>Platformlar:</b> AWS Device Farm, Firebase Test Lab, BrowserStack.</li>
      <li><b>Otomasyon Entegrasyonu:</b> Appium scriptlerinizi buluta yükleyip tek tıkla 50 farklı fiziksel cihazda paralel çalıştırabilirsiniz.</li>
      <li><b>Maliyet Analizi:</b> Cihazların eskimemesi, batarya şişme riskinin olmaması ve 7/24 erişilebilirlik operasyon maliyetlerini düşürür.</li>
    </ul>
  </div>
</div>

---

# Sürekli Entegrasyon (CI/CD)
Kodun yazımından mağazaya gidişine kadarki üretim bandı.

<div class="mt-8 p-6 bg-white rounded-xl border border-slate-200">

```mermaid
graph LR
  A[Kod Push] -->|GitHub Actions| B(Birim Testler)
  B --> C{Geçti mi?}
  C -->|Evet| D[Appium Bulut Testi]
  C -->|Hayır| E[Hata Bildir]
  D --> F[Build APK/IPA]
  F --> G[Play Console / TestFlight Beta]
  style G fill:#10B981,color:#fff
```

</div>

<p class="text-sm mt-8 text-center text-slate-600">Her "Commit" ve "Push" sonrası insan eli değmeden otomatik testlerin koşturulması ve test ekibine <b>Beta dağıtım</b> yapılması sürecin kalbidir.</p>

---
layout: two-cols
---

# Sonuç ve Gelecek Vizyonu
Mobil teknoloji evrimleşirken test yaklaşımları da değişiyor.

- **Yapay Zeka (AI) Destekli Testler:** 
  Test senaryolarının kod yazmadan (Scriptless) AI araçlarıyla oluşturulması. Görsel (Visual) regresyon hatalarını AI'ın milisaniyeler içinde fark etmesi.
- **Yeni Form Faktörleri:** 
  Katlanabilir cihazlar (Foldables), giyilebilir teknolojiler (Smartwatches) ve AR/VR gözlüklerinin (Apple Vision Pro) test süreçlerine entegrasyonu.

::right::

<div class="ml-8 mt-12 card border-t-4 border-slate-800 text-center">
  <h3 class="font-bold text-xl mb-4">Özetle</h3>
  <p class="text-sm">Mobil test, sadece ekrana dokunmak değildir.<br><br>Yazılım karmaşıklığını yöneten, donanımla uyumlu çalışan ve katı mağaza kurallarından geçen bir <b>mühendislik stratejisidir</b>.</p>
</div>

---

# Referanslar ve Kaynakça

Akademik ve Endüstriyel Kaynaklar:

1. **ISTQB®** (International Software Testing Qualifications Board) - *Mobile Application Testing Foundation Level Syllabus*.
2. **Apple Developer Documentation** - *App Store Review Guidelines* ve *Human Interface Guidelines*.
3. **Google Play Console Help** - *Developer Policy Center* ve Android Vitals Core Metrics.
4. **Ders Notları:** "Yazılım Test Mühendisliği" (Risk ve Karmaşıklık Modelleri).
5. **Appium Official Documentation** (appium.io).

---
layout: center
class: text-center
---

<h1 style="font-size: 4rem !important; color: #1E293B !important; margin-bottom: 96;">Teşekkürler</h1>

<p class="text-xl text-slate-600 mt-8 font-medium">Sorularınız & Tartışma</p>

<div class="mt-12 flex justify-center gap-6">
  <div class="px-5 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-800 text-sm font-bold shadow-sm">#MobileTesting</div>
  <div class="px-5 py-2 bg-slate-100 border border-slate-200 rounded-full text-slate-800 text-sm font-bold shadow-sm">#QualityAssurance</div>
  <div class="px-5 py-2 bg-red-50 border border-red-200 rounded-full text-red-800 text-sm font-bold shadow-sm">#SoftwareEngineering</div>
</div>

<p class="absolute bottom-10 left-0 right-0 text-xs text-slate-400">Bu sunum GitHub Actions ve Slidev altyapısı kullanılarak kod tabanlı (as-code) hazırlanmıştır.</p>
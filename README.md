# 📱 Mobil Uygulama Testleri - Modern Yaklaşımlar

[![Slidev](https://img.shields.io/badge/Slidev-Presentation_as_Code-0498c5.svg?style=for-the-badge&logo=vue.js)](https://sli.dev/)
[![Markdown](https://img.shields.io/badge/Markdown-Powered-000000.svg?style=for-the-badge&logo=markdown)](https://daringfireball.net/projects/markdown/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Pages-2088FF.svg?style=for-the-badge&logo=github-actions)](https://github.com/features/actions)

Bu depo, **Yazılım Test Süreçleri** dersi kapsamında **Grup 7** tarafından hazırlanan *"Mobil Uygulama Testleri"* sunumunun kaynak kodlarını içermektedir. 

Klasik PowerPoint veya Keynote yerine, modern yazılım mühendisliği prensiplerine uygun olarak **Slidev (Presentation as Code)** altyapısıyla kodlanarak hazırlanmıştır.

🚀 **[Sunumu Canlı Olarak Buradan İzleyebilirsiniz](https://MustafaU55.github.io/mobil-test/)**

---

## 📖 Sunum İçeriği (Gündem)
Bu sunumda mobil test süreçleri mühendislik ve mimari boyutlarıyla ele alınmıştır:
- **Ortam ve Karmaşıklık:** OS Fragmentasyonu, Test Piramidi, Emülatör vs Gerçek Cihaz.
- **Senaryo Bazlı Testler:** App Lifecycle, Interrupt (Kesinti) ve Offline Ağ Senaryoları.
- **Performans ve Güvenlik:** Memory Leak, Battery Drain, SSL Pinning ve Obfuscation.
- **Kurumsal Süreçler:** Mağaza İnceleme (Store Review), Lokalizasyon (i18n/L10n) ve CI/CD Entegrasyonu.

---

## 🛠️ Yerel Ortamda Çalıştırma (Kurulum)

Eğer bu sunumu kendi bilgisayarınızda çalıştırmak, düzenlemek veya kodlarını incelemek isterseniz aşağıdaki adımları izleyebilirsiniz.

### Ön Koşullar
Bilgisayarınızda **[Node.js](https://nodejs.org/en/)** (v18 veya üzeri) yüklü olmalıdır.

### Adımlar
1. Repoyu bilgisayarınıza klonlayın:
   ```bash
   git clone https://github.com/MustafaU55/mobil-test.git
   cd mobil-test
   ```

2. Bağımlılıkları (Dependencies) yükleyin:
   ```bash
   npm install
   ```

3. Sunucu modunu başlatın:
   ```bash
   npm run dev
   ```
   *Tarayıcınızda otomatik olarak `http://localhost:3030` adresi açılacaktır.*

---

## 📄 PDF Olarak Dışa Aktarma (Export)

Sunumu internetsiz ortamlarda kullanmak veya paylaşmak için PDF formatında çıktı alabilirsiniz. Bunun için bilgisayarınızda Playwright kurulu olmalıdır.

Sırasıyla şu komutları terminalde çalıştırın:
```bash
# Sadece ilk kullanımda Chromium motorunu kurmak için:
npm i -D playwright-chromium

# Sunumu PDF olarak dışa aktarmak için:
npx slidev export
```
*İşlem bittiğinde proje dizininde `slides-export.pdf` dosyası oluşacaktır.*

---

## 🎮 Sunum Sırasında Kullanılacak Kısayollar (Presenter Mode)

Slidev, sunum yapan kişiye harika yetenekler sunar. Tarayıcıda sunum açıkken klavyeden şu tuşları kullanabilirsiniz:

- <kbd>Sağ Ok</kbd> / <kbd>Sol Ok</kbd> : Sonraki / Önceki slayta geçer.
- <kbd>Boşluk</kbd> : Sayfa içindeki animasyonları (tıklamaları) oynatır.
- <kbd>D</kbd> : Çizim modunu açar (Slayt üzerine kalemle canlı çizim yapabilirsiniz).
- <kbd>O</kbd> : Tüm slaytlara genel bakış (Overview) modunu açar.
- <kbd>C</kbd> : Ekranda konfeti patlatır 🎉

> *İpucu: Canlı sunum linkinin sonuna `/presenter` eklerseniz (örn: `localhost:3030/presenter`), bir sonraki slaytı ve konuşmacı notlarınızı sadece sizin görebileceğiniz yönetici paneli açılır.*

---
*Bu proje açık kaynaklıdır ve eğitim amacıyla paylaşılmıştır. Başka projelerinizde şablon olarak kullanabilirsiniz.*
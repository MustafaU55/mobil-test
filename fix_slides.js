const fs = require('fs');
let content = fs.readFileSync('slides.md', 'utf8');

const replacements = [
  { search: '\nGerçek Cihaz mı, Emülatör mü?', replace: '\n---\nlayout: default\n---\n\n# Gerçek Cihaz mı, Emülatör mü?' },
  { search: '\nlayout: two-cols\n\nYaşam Döngüsü (Lifecycle)', replace: '\n---\nlayout: two-cols\n---\n\n# Yaşam Döngüsü (Lifecycle)' },
  { search: '\nKesinti (Interrupt) Testleri', replace: '\n---\nlayout: default\n---\n\n# Kesinti (Interrupt) Testleri' },
  { search: '\nAğ ve Bağlantı Senaryoları', replace: '\n---\nlayout: default\n---\n\n# Ağ ve Bağlantı Senaryoları' },
  { search: '\nlayout: two-cols\n\nExploratory ve Monkey Testing', replace: '\n---\nlayout: two-cols\n---\n\n# Exploratory ve Monkey Testing' },
  { search: '\nPerformans ve Kaynak Tüketimi', replace: '\n---\nlayout: default\n---\n\n# Performans ve Kaynak Tüketimi' },
  { search: '\nGüvenlik Testleri', replace: '\n---\nlayout: default\n---\n\n# Güvenlik Testleri' },
  { search: '\nMağaza İnceleme (Store Review) Süreçleri', replace: '\n---\nlayout: default\n---\n\n# Mağaza İnceleme (Store Review) Süreçleri' },
  { search: '\nLokalizasyon ve Uyumluluk (i18n / L10n)', replace: '\n---\nlayout: default\n---\n\n# Lokalizasyon ve Uyumluluk (i18n / L10n)' },
  { search: '\nlayout: two-cols\n\nVaka Analizleri', replace: '\n---\nlayout: two-cols\n---\n\n# Vaka Analizleri' },
  { search: '\nlayout: two-cols\n\nCanlı Demo: Appium Login', replace: '\n---\nlayout: two-cols\n---\n\n# Canlı Demo: Appium Login' },
  { search: '\nBulut Cihaz Çiftlikleri (Device Farms)', replace: '\n---\nlayout: default\n---\n\n# Bulut Cihaz Çiftlikleri (Device Farms)' },
  { search: '\nTest Raporlama ve Metrikler', replace: '\n---\nlayout: default\n---\n\n# Test Raporlama ve Metrikler' },
  { search: '\nSürekli Entegrasyon (CI/CD)', replace: '\n---\nlayout: default\n---\n\n# Sürekli Entegrasyon (CI/CD)' },
  { search: '\nReferanslar ve Kaynakça', replace: '\n---\nlayout: default\n---\n\n# Referanslar ve Kaynakça' },
  { search: '\nlayout: center\nclass: text-center\n\n<h1', replace: '\n---\nlayout: center\nclass: text-center\n---\n\n<h1' }
];

for (let rep of replacements) {
  content = content.replace(rep.search, rep.replace);
}

content = content.replace(/<\/div><div/g, '</div>\n\n<div');
content = content.replace(/<\/div><p/g, '</div>\n\n<p');
content = content.replace(/<\/p><div/g, '</p>\n\n<div');
content = content.replace(/<\/ul><div/g, '</ul>\n\n<div');
content = content.replace(/<\/ul><p/g, '</ul>\n\n<p');
content = content.replace(/<\/div><table/g, '</div>\n\n<table');
content = content.replace(/<\/table><div/g, '</table>\n\n<div');
content = content.replace(/python\nfrom/g, '```python\nfrom');
content = content.replace(/# Doğrula\n    assert driver.find_element_by_id\("ok"\)\n::right::/g, '# Doğrula\n    assert driver.find_element_by_id("ok")\n```\n\n::right::');
content = content.replace(/<\/div> ```/g, '</div>\n```');

fs.writeFileSync('slides.md', content);
console.log("Fixed slides.md");

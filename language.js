// language.js - GÜNCELLENMİŞ VERSİYON (Varsayılan: İngilizce)
function initLanguageSwitcher() {
  const languageToggle = document.getElementById("languageToggle");
  const languageDropdown = document.getElementById("languageDropdown");
  const languageOptions = document.querySelectorAll(".language-option");

  if (!languageToggle || !languageDropdown) {
    console.error("Language elements not found!");
    return;
  }

  // 1. ÖNCE SAYFA ADINA GÖRE DİL BELİRLE
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  let currentLang = "en"; // Varsayılan İngilizce

  if (currentPage === "turkish.html") {
    currentLang = "tr";
  } else if (currentPage === "german.html") {
    currentLang = "de";
  }

  // 2. BUTONU GÜNCELLE
  updateLanguageButton(currentLang);

  // 3. AKTİF DİLİ İŞARETLE
  const activeOption = document.querySelector(
    `.language-option[data-lang="${currentLang}"]`
  );
  if (activeOption) {
    languageOptions.forEach((opt) => opt.classList.remove("active"));
    activeOption.classList.add("active");
  }

  // 4. BUTON TIKLAMA
  languageToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    languageDropdown.classList.toggle("active");
  });

  // 5. DİL SEÇENEĞİ TIKLAMA
  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const lang = option.dataset.lang;

      // Aktif sınıfı güncelle
      languageOptions.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      // Butonu güncelle
      updateLanguageButton(lang);

      // YÖNLENDİR
      redirectToLanguagePage(lang);

      // Dropdown'u kapat
      languageDropdown.classList.remove("active");
    });
  });

  // 6. DIŞARI TIKLAYINCA KAPAT
  document.addEventListener("click", () => {
    languageDropdown.classList.remove("active");
  });

  // BUTON GÜNCELLEME FONKSİYONU
  function updateLanguageButton(lang) {
    const flagImg = languageToggle.querySelector(".flag-icon");
    const langSpan = languageToggle.querySelector(
      "span:not(.material-symbols-outlined)"
    );

    const flags = {
      en: "https://flagcdn.com/w40/gb.png",
      tr: "https://flagcdn.com/w40/tr.png",
      de: "https://flagcdn.com/w40/de.png",
    };

    const labels = {
      en: "EN",
      tr: "TR",
      de: "DE",
    };

    if (flags[lang]) {
      flagImg.src = flags[lang];
      langSpan.textContent = labels[lang];
    }
  }

  // YÖNLENDİRME FONKSİYONU
  function redirectToLanguagePage(lang) {
    // SADECE farklı dillere git
    if (lang === "en" && !window.location.pathname.includes("index.html")) {
      window.location.href = "index.html";
    } else if (
      lang === "tr" &&
      !window.location.pathname.includes("turkish.html")
    ) {
      window.location.href = "turkish.html";
    } else if (
      lang === "de" &&
      !window.location.pathname.includes("german.html")
    ) {
      window.location.href = "german.html";
    }
    // Aynı dili seçtiysek hiçbir şey yapma
  }
}

// DOM YÜKLENDİĞİNDE ÇALIŞTIR
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}

// ÖNBELLEĞİ TEMİZLEMEK İÇİN (İSTEĞE BAĞLI)
localStorage.removeItem("preferredLanguage"); // Eski kodu kullanıyorsanız

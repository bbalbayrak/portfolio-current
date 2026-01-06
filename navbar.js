// navbar.js - Düzeltilmiş versiyon

// Dil değiştirme fonksiyonu - diğer HTML sayfalarına yönlendirir
function changeLanguage(lang) {
  // Mevcut sayfanın adını al
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Yeni sayfa URL'sini belirle
  let newPage = "";

  if (lang === "en") {
    // İngilizce - ana sayfa (index.html)
    newPage = "index.html";
  } else if (lang === "tr") {
    // Türkçe - turkish.html
    newPage = "turkish.html";
  } else if (lang === "de") {
    // Almanca - german.html
    newPage = "german.html";
  }

  // Aktif dil sınıfını güncelle
  updateActiveLanguage(lang);

  // Sayfayı yeniden yönlendir (eğer farklı bir sayfadaysa)
  if (newPage && newPage !== currentPage) {
    console.log("Yönlendiriliyor:", currentPage, "->", newPage);
    window.location.href = newPage;
  } else {
    console.log("Zaten bu dilde:", currentPage);
  }
}

// Sadece UI'da aktif dili güncelleyen fonksiyon
function updateActiveLanguage(lang) {
  const mobileOptions = document.querySelectorAll(".mobile-language-option");
  const desktopOptions = document.querySelectorAll(".language-option");

  // Mobil dil seçeneklerini güncelle
  mobileOptions.forEach((option) => {
    option.classList.remove("active");
    if (option.dataset.lang === lang) {
      option.classList.add("active");
    }
  });

  // Desktop dil seçeneklerini güncelle
  desktopOptions.forEach((option) => {
    option.classList.remove("active");
    if (option.dataset.lang === lang) {
      option.classList.add("active");
    }
  });

  // Dil butonunu güncelle
  const languageBtn = document.getElementById("languageToggle");
  if (languageBtn) {
    const flagImg = languageBtn.querySelector("img");
    const spans = languageBtn.querySelectorAll("span");
    let langText = null;

    // material-symbols-outlined olmayan span'ı bul
    spans.forEach((span) => {
      if (!span.classList.contains("material-symbols-outlined")) {
        langText = span;
      }
    });

    if (flagImg && langText) {
      if (lang === "en") {
        flagImg.src = "https://flagcdn.com/w40/gb.png";
        flagImg.alt = "English";
        langText.textContent = "EN";
      } else if (lang === "tr") {
        flagImg.src = "https://flagcdn.com/w40/tr.png";
        flagImg.alt = "Türkçe";
        langText.textContent = "TR";
      } else if (lang === "de") {
        flagImg.src = "https://flagcdn.com/w40/de.png";
        flagImg.alt = "Deutsch";
        langText.textContent = "DE";
      }
    }
  }
}

// Sayfa yüklendiğinde mevcut dili kontrol et
document.addEventListener("DOMContentLoaded", function () {
  // Mevcut sayfanın dilini belirle
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  let currentLang = "en";

  if (currentPage === "turkish.html") {
    currentLang = "tr";
  } else if (currentPage === "german.html") {
    currentLang = "de";
  }

  console.log("Mevcut sayfa:", currentPage);
  console.log("Mevcut dil:", currentLang);

  // UI'da aktif dili güncelle
  updateActiveLanguage(currentLang);

  // Mobil menü fonksiyonları
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

  function toggleMobileMenu() {
    if (hamburgerBtn && mobileMenu && mobileMenuOverlay) {
      hamburgerBtn.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      mobileMenuOverlay.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "";
    }
  }

  function closeMobileMenu() {
    if (hamburgerBtn && mobileMenu && mobileMenuOverlay) {
      hamburgerBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
      mobileMenuOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // Event listener'lar
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", toggleMobileMenu);
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", closeMobileMenu);
  }

  // Linklere tıklanınca menüyü kapat
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Dil seçeneklerine event listener ekle
  const desktopOptions = document.querySelectorAll(".language-option");
  desktopOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const lang = this.dataset.lang;
      changeLanguage(lang);
    });
  });

  // Mobil dil seçeneklerine event listener ekle
  const mobileLanguageOptions = document.querySelectorAll(
    ".mobile-language-option"
  );
  mobileLanguageOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const lang = this.dataset.lang;
      changeLanguage(lang);
    });
  });
});

// Mobile için smooth scroll düzeltmesi
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return; // Eğer href sadece "#" ise

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Mobile için ekstra kontrol
      if (window.innerWidth <= 768) {
        // Mobile'da header height offset
        const headerHeight =
          document.querySelector("header")?.offsetHeight || 60;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      } else {
        // Desktop için normal scroll
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

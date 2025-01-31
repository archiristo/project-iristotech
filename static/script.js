window.addEventListener('scroll', () => {
  const projectsSection = document.querySelector('.projects');
  const blogSection = document.querySelector('.blog');

  if (window.scrollY > 300) {
      projectsSection.style.animation = 'slideUp 1s forwards';
  }
  if (window.scrollY > 600) {
      blogSection.style.animation = 'slideUp 1s forwards';
  }
});

function typeEffect(elementId, text, speed = 100) {
    let index = 0;
    function typeWriter() {
        let element = document.getElementById(elementId);
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                element.innerHTML = ''; // Yazıyı temizle
                index = 0;
                typeWriter(); // Yeniden başlat
            }, 1500); // 1.5 saniye beklet, sonra tekrar yazdır
        }
    }
    typeWriter();
}

function adjustFontSize() {
    let elements = document.querySelectorAll('#typing-effect, #typing-irs'); // Hedef elemanları seç
    elements.forEach(el => {
        if (window.innerWidth < 768) {
            el.style.fontSize = '14px';
        } else {
            el.style.fontSize = '24px'; // Normal boyut
        }
    });
}

// **Sayfa yüklendiğinde hem yazıyı hem de font ayarını yap**
window.onload = function() {
    adjustFontSize(); // Font boyutunu ayarla

    if (document.getElementById("typing-effect")) {
        typeEffect("typing-effect", 'System.out.println("Hello World!");', 100);
    }

    if (document.getElementById("typing-irs")) {
        typeEffect("typing-irs", "<iristo.tech>", 100);
    }
};

// **Pencere boyutu değiştiğinde fontu tekrar ayarla**
window.onresize = adjustFontSize;



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

// **Genel Amaçlı Yazı Yazma Fonksiyonu**
function typeEffect(elementId, text, speed = 100) {
  let index = 0;
  function typeWriter() {
      if (index < text.length) {
          document.getElementById(elementId).innerHTML += text.charAt(index);
          index++;
          setTimeout(typeWriter, speed);
      } else {
          setTimeout(() => {
              document.getElementById(elementId).innerHTML = ''; // Yazıyı temizle
              index = 0;
              typeWriter(); // Yeniden başlat
          }, 1500); // 1.5 saniye beklet, sonra tekrar yazdır
      }
  }
  typeWriter();
}

// **Her sayfa için farklı yazıları başlat**
window.onload = function() {
  if (document.getElementById("typing-effect")) {
      typeEffect("typing-effect", 'System.out.println("Hello World!");', 100);
  }

  if (document.getElementById("typing-irs")) {
      typeEffect("typing-irs", "<iristo.tech>", 100);
  }
};



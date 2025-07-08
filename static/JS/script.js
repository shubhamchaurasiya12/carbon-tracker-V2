// FAQ Toggle Functionality
const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    item.classList.toggle('active');

    // Close other open FAQs
    faqs.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});

// About Section Reveal on Scroll
const aboutSection = document.getElementById('about');

function revealAbout() {
  const rect = aboutSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    aboutSection.classList.add('visible');
  }
}

window.addEventListener('scroll', revealAbout);
window.addEventListener('load', revealAbout);
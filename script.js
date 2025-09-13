// Observer untuk pop-up animation saat elemen masuk ke viewport
const popUps = document.querySelectorAll('.pop-up, .project');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3,
});

// Observasi elemen-elemen
popUps.forEach(el => observer.observe(el));

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const increment = Math.ceil(target / 200);

  const updateCounter = () => {
    count += increment;
    if (count > target) count = target;
    counter.textContent = count;
    if (count < target) requestAnimationFrame(updateCounter);
  };

  updateCounter();
});

// Carousel Functionality
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

document.querySelector('.next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalTestimonials;
  showTestimonial(currentIndex);
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentIndex);
});

// Initialize first testimonial
showTestimonial(currentIndex);
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Product Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    productCards.forEach(card => {
      card.style.display =
        category === 'all' || card.dataset.category === category ? 'block' : 'none';
    });
  });
});

// Testimonial Carousel
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;
setInterval(() => {
  testimonials[currentTestimonial].classList.remove("active");
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add("active");
}, 5000);

// Add to Enquiry Cart
const cartItems = document.getElementById("cartItems");
const enquiryCart = [];
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const itemName = card.querySelector("h3").textContent;
    if (!enquiryCart.includes(itemName)) {
      enquiryCart.push(itemName);
      const li = document.createElement("li");
      li.textContent = itemName;
      cartItems.appendChild(li);
    }
  });
});

// Submit Enquiry
document.getElementById("submitEnquiry").addEventListener("click", () => {
  if (enquiryCart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  const message = `Hello, I want to enquire about the following products:\n\n${enquiryCart.join(
    "\n"
  )}`;
  const phone = "923214850481";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Date and Time Display
const datetime = document.getElementById("datetime");
function updateDateTime() {
  const now = new Date();
  datetime.textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Scroll Animation (Fade-in Effect)
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll(".card").forEach(card => {
  card.classList.add("fade-init");
  observer.observe(card);
});
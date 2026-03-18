// Init AOS
AOS.init({ once: true, duration: 800, easing: "ease-out" });

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle with persistence
const key = "theme";
const btn = document.getElementById("themeToggle");
const saved = localStorage.getItem(key) || "dark";
if (saved === "dark") document.body.classList.add("dark");
else document.body.classList.remove("dark");
btn.innerHTML = document.body.classList.contains("dark")
  ? '<i class="bi bi-brightness-high"></i>'
  : '<i class="bi bi-moon"></i>';
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const nowDark = document.body.classList.contains("dark");
  btn.innerHTML = nowDark
    ? '<i class="bi bi-brightness-high"></i>'
    : '<i class="bi bi-moon"></i>';
  localStorage.setItem(key, nowDark ? "dark" : "light");
});

// Typing effect (no dependency)
const titles = ["FullStack Developer", "UI Enthusiast", "Open‑Source Contributor"];
let ti = 0,
  ci = 0,
  deleting = false;
const typed = document.getElementById("typed");
function typeLoop() {
  const full = titles[ti % titles.length];
  if (!deleting) {
    ci++;
  } else {
    ci--;
  }
  typed.textContent = full.slice(0, ci);
  if (!deleting && ci === full.length) {
    deleting = true;
    setTimeout(typeLoop, 1200);
    return;
  }
  if (deleting && ci === 0) {
    deleting = false;
    ti++;
  }
  setTimeout(typeLoop, deleting ? 45 : 90);
}
typeLoop();

// Animate skill bars when visible
const bars = document.querySelectorAll(".bar > span");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width;
      }
    });
  },
  { threshold: 0.5 }
);
bars.forEach((b) => io.observe(b));

// Project filter
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll("#projectGrid .project");
buttons.forEach((btn) =>
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.filter;
    cards.forEach((c) => {
      const show = cat === "all" || c.dataset.cat === cat;
      c.classList.toggle("d-none", !show);
    });
  })
);

// Contact form demo submit
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }
  document.getElementById("formAlert").classList.remove("d-none");
  form.reset();
  form.classList.remove("was-validated");
});

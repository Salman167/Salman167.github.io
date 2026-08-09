document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  },
  { passive: true }
);

const revealTargets = document.querySelectorAll(
  ".section-head, .project, .job, .skill-card, .cred-row, .contact-panel, .about-text"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

revealTargets.forEach((el) => observer.observe(el));

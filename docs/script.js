document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  },
  { passive: true }
);

/* Mouse-tilt 3D on hero photo + RAG orbit */
const visual = document.getElementById("hero-visual");
const stage = document.getElementById("tilt-stage");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (visual && stage && !reduceMotion) {
  let raf = 0;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const render = () => {
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;
    stage.style.transform =
      `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
    raf = requestAnimationFrame(render);
  };

  visual.addEventListener("pointermove", (e) => {
    const rect = visual.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    targetX = px * 14;
    targetY = -py * 10;
  });

  visual.addEventListener("pointerleave", () => {
    targetX = 0;
    targetY = 0;
  });

  raf = requestAnimationFrame(render);
}

const revealTargets = document.querySelectorAll(".job, .skill, .card, .lead, .contact-block");
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

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY || window.pageYOffset; // Fix for undefined pageYOffset
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if ( scrollPosition+300 >= sectionTop  && scrollPosition < sectionBottom) {
        current = section.getAttribute("id");
        console.log(current);
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});

const texts = ["Learner", "web developer", "Front end developer"];

const container = document.getElementById("text-changer");

let index = 0;

function rotateText() {
  container.textContent = texts[index];
  index = (index + 1) % texts.length;
}

setInterval(rotateText, 1000);


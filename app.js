//Mobile navbar animations
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("burger-active");
});

const screenWidth = window.innerHeight;
const navLink = document.querySelectorAll(".nav-link");

//Close Navbar when link clicked
if (screenWidth < 767) {
  navLink.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("burger-active");
    });
  });
}

//Main screen animations
window.onload = function () {
  const tl1 = gsap.timeline({ delay: 0.5 });
  const mainTitle = document.querySelector(".main-title");
  const mainParagraph = document.querySelector(".main-paragraph");
  const mainBtn = document.querySelector(".main-btn");
  const mainImage = document.querySelector(".illustration-intro");

  tl1.set(mainBtn, { visibility: "visible" });
  tl1.from(mainBtn, {
    opacity: 0,
    y: 50,
    x: 20,
    duration: 0.5,
  });

  tl1.set(mainParagraph, { visibility: "visible" });
  tl1.from(mainParagraph, {
    opacity: 0,
    y: 50,
    x: 20,
    duration: 0.5,
  });

  tl1.set(mainTitle, { visibility: "visible" });
  tl1.from(mainTitle, {
    opacity: 0,
    y: 50,
    x: 20,
    duration: 0.5,
  });

  tl1.set(mainImage, { visibility: "visible" });
  tl1.from(mainImage, {
    opacity: 0,
    x: 60,
    duration: 0.75,
  });
};

//About section animations

//Left side animations
const aboutSection = document.querySelector(".about-section");
tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: aboutSection,
    start: "top 70%",
    end: "top 50%",
  },
});

const aboutLeftTitle = document.querySelector(".about-left-title");
const aboutLeftParagraph = document.querySelector(".about-left-paragraph");

tl2.from(aboutLeftTitle, {
  opacity: 0,
  y: 40,
  duration: 0.5,
});

tl2.from(aboutLeftParagraph, {
  opacity: 0,
  y: 40,
  duration: 0.5,
});

//Right side animations
const aboutWrapper = document.querySelectorAll(".about-wrapper");
const aboutTitle = document.querySelectorAll(".about-title");
const aboutParagraph = document.querySelectorAll(".about-paragraph");

aboutWrapper.forEach((wrapper) => {
  gsap.from(wrapper.children, {
    y: 50,
    opacity: 0,
    stagger: 1,
    duration: 2,
    scrollTrigger: {
      trigger: wrapper,
      start: "top 80%",
      end: "top 70%",
      scrub: 1,
    },
  });
});

//Clients section animations
const clientsSectionTitle = document.querySelector(".clients-container-title");

gsap.from(clientsSectionTitle, {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: clientsSectionTitle,
    start: "top 70%",
  },
});

const clientsContent = document.querySelectorAll(".clients-content");
clientsContent.forEach((client) => {
  gsap.from(client.children, {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.4,
    scrollTrigger: {
      trigger: client,
      start: "top 50%",
    },
  });
});

//Simplify section animations
const simplifySection = document.querySelector(".simplify-section");
const simplifyTitle = document.querySelector(".simplify-title");

gsap.from(simplifyTitle, {
  opacity: 0,
  x: -60,
  duration: 1,
  scrollTrigger: {
    trigger: simplifySection,
    start: "top 60%",
  },
});

const simplifyBtn = document.querySelector(".simplify-btn");
gsap.from(simplifyBtn, {
  opacity: 0,
  x: 60,
  duration: 1,
  scrollTrigger: {
    trigger: simplifySection,
    start: "top 60%",
  },
});

//Footer animations
const footer = document.querySelector(".footer-container");
gsap.from(footer, {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: footer,
    start: "top 70%",
  },
});

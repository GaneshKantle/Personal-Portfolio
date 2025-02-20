/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");
  
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  
  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  
  function headerShadow() {
    const navHeader =document.getElementById("header");
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
  
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  
    } else {
  
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
  
    }
  }
  

  /* ----- TYPING EFFECT ----- */
  let typingEffect = new Typed(".typedText",{
    strings : ["Designer","Youtuber","Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
  })
  
  /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
  })
  
  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  
  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})
  
  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})
  
  /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  
  /* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
  const scrollY = window.scrollY;
  
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
  
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
  
    }  else {
  
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
  
    }
  })
  }
  
  window.addEventListener('scroll', scrollActive)






  document.addEventListener("DOMContentLoaded", () => {
    const projectsWrapper = document.querySelector(".projects-wrapper");
    const slides = document.querySelectorAll(".project-slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const dotsContainer = document.querySelector(".dots-container");

    let currentIndex = 0;

    // Create dots for navigation
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateSlidePosition() {
        projectsWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlidePosition();
        });
    });
});

// Typing Animation
let typed = new Typed('.typedText', {
  strings: ['Ganesh Kantle', 'a Web Developer', 'a UI Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Scroll Reveal Animations
ScrollReveal().reveal('.featured-box', { 
  delay: 200,
  distance: '50px',
  origin: 'bottom'
});

ScrollReveal().reveal('.skills-box', { 
  delay: 200,
  distance: '50px',
  origin: 'left',
  interval: 200
});

ScrollReveal().reveal('.project-slide', { 
  delay: 200,
  distance: '50px',
  origin: 'right',
  interval: 200
});

// Skills Toggle
function toggleSkills(skillType) {
  const skillBox = document.getElementById(skillType);
  const skillsBoxContainer = skillBox.parentElement;
  
  if (skillsBoxContainer.classList.contains('active')) {
      skillsBoxContainer.classList.remove('active');
      skillBox.style.maxHeight = '0';
  } else {
      document.querySelectorAll('.skills-box').forEach(box => {
          box.classList.remove('active');
          box.querySelector('.skills-list').style.maxHeight = '0';
      });
      
      skillsBoxContainer.classList.add('active');
      skillBox.style.maxHeight = skillBox.scrollHeight + 'px';
  }
}

// Project Slider
const projectSlider = {
  currentSlide: 0,
  slides: document.querySelectorAll('.project-slide'),
  
  init() {
      this.updateSlide();
      this.setupControls();
      this.startAutoSlide();
  },
  
  updateSlide() {
      this.slides.forEach((slide, index) => {
          slide.style.transform = `translateX(${(index - this.currentSlide) * 100}%)`;
      });
  },
  
  nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.updateSlide();
  },
  
  prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.updateSlide();
  },
  
  setupControls() {
      document.querySelector('.prev-btn').addEventListener('click', () => this.prevSlide());
      document.querySelector('.next-btn').addEventListener('click', () => this.nextSlide());
  },
  
  startAutoSlide() {
      setInterval(() => this.nextSlide(), 5000);
  }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  projectSlider.init();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
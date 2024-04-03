(function () {
    "use strict";

    // ===== responsive navbar. Basically the same functionality as Kelvin's below
    let navbarToggler = document.querySelector("#navbarToggler");
    const navbarCollapse = document.querySelector("#navbarCollapse");

    navbarToggler.addEventListener("click", () => {
        navbarToggler.classList.toggle("navbarTogglerActive");
        navbarCollapse.classList.toggle("hidden");
    });

    // This code closes the navbar when an id link is clicked (for linking sectionskwa homepage)
    document
        .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
        .forEach((e) =>
        e.addEventListener("click", () => {
            navbarToggler.classList.remove("navbarTogglerActive");
            navbarCollapse.classList.add("hidden");
        })
    );

    
    // ======= Sticky
    window.onscroll = function () {
        const els_header = document.querySelector(".header");
        const sticky = els_header.offsetTop;

        if (window.pageYOffset > sticky) {
        els_header.classList.add("sticky");
        } else {
        els_header.classList.remove("sticky");
        }

        // show or hide the back-top-top button
        const backToTop = document.querySelector(".back-to-top");
        if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
        ) {
        backToTop.style.display = "flex";
        } else {
        backToTop.style.display = "none";
        }
    };
    // ====== scroll top js
    function scrollTo(element, to = 0, duration = 500) {
      const start = element.scrollTop;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;
  
      const animateScroll = () => {
        currentTime += increment;
  
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
  
        element.scrollTop = val;
  
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
  
      animateScroll();
    }
  
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  
    document.querySelector(".back-to-top").onclick = () => {
      scrollTo(document.documentElement);
    };
  })();

  //install to home screen
  let InstallPrompt;
const addBtn = document.querySelector('.installBtn');
addBtn.style.display = 'none';
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
InstallPrompt = e;reen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    addBtn.style.display = 'none';
    // Show the prompt
    InstallPrompt.prompt();
    // Wait for the user to respond to the prompt
    InstallPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Accept installation');
        } else {
          console.log('Dismissed installation');
        }
        InstallPrompt = null;
      });
  });
});


  
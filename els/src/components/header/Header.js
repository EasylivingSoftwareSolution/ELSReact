import React,{useEffect,useState} from "react";
import Logo from "../../images/Els-logo-sample/pngs/els_alt.png"
import '../../css/styles.css';
import '../../css/animate.css';

export default function Header(){
	useEffect(() => {
		// Paste your JavaScript code here
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
				// const backToTop = document.querySelector(".back-to-top");
				// if (
				// document.body.scrollTop > 50 ||
				// document.documentElement.scrollTop > 50
				// ) {
				// backToTop.style.display = "flex";
				// } else {
				// backToTop.style.display = "none";
				// }
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
		  
			// document.querySelector(".back-to-top").onclick = () => {
			//   scrollTo(document.documentElement);
			// };
		  })();


		  

	  }, []); 

	  const [isMenuOpen, setIsMenuOpen] = useState(false);

	  const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	  };
    return (
        <>
  <header className="fixed top-0 left-0 z-40 w-full bg-transparent px-4 header py-2 md:px-0 lg:px-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="inline-block">
            <img src={Logo} alt="ELS logo" className="" />
          </a>
          <button
            id="navbarToggler"
            aria-label="Mobile Menu"
            className="block ml-auto lg:hidden focus:ring-2 bg-transparent px-3 py-[6px] rounded-lg"
            onClick={toggleMenu}
          >
            <span className="relative w-[30px] h-[2px] my-[6px] bg-els-blue block"></span>
            <span className="relative w-[30px] h-[2px] bg-els-blue my-[6px] block"></span>
            <span className="relative w-[30px] h-[2px] bg-els-blue my-[6px] block"></span>
          </button>
          <nav
            id="navbarCollapse"
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:block absolute top-full py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 lg:static lg:shadow-none`}
          >
            <ul className="block space-x-0 lg:flex px-3">
              <li>
                <a href="/" className="flex py-2 text-base font-bold menu-scroll hover:text-els-blue lg:py-6 lg:inline-flex lg:px-0 lg:mr-0">
                  <h1>Home</h1>
                </a>
              </li>
              <li>
                <a href="/aboutus" className="flex py-2 text-base font-bold menu-scroll hover:text-els-blue lg:py-6 lg:inline-flex lg:px-0 lg:mr-0 lg:ml-8 xl:ml-12">
                  <h1>About Us</h1>
                </a>
              </li>
              <li>
                <a href="#client-form" className="flex py-2 text-base font-bold menu-scroll hover:text-els-blue lg:py-6 lg:inline-flex lg:px-0 lg:mr-0 lg:ml-8 xl:ml-12">
                  <h1>Contact</h1>
                </a>
              </li>
            </ul>
          </nav>
          {/* <div className="">
            <a href="contact.html" className="hidden px-5 py-3 text-base font-bold text-white transition duration-300 rounded-md md:block bg-els-blue els-gradient md:px-9 lg:px-6 xl:px-9 hover:shadow-joinUs hover:bg-opacity-90 ease-in-up">
              <p class="text-sm">Join Us</p>
            </a>
          </div> */}
        </div>
      </div>
    </header>
        </>
    )
}

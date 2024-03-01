document.addEventListener("DOMContentLoaded", function () {
  // Get the .our-company section
  const progressDivHolder = document.querySelector(".progress-div-holder");

  // Flag variable to track if code has already been executed
  let codeExecuted = false;

  // Add a scroll event listener
  window.addEventListener("scroll", function () {
    // Get the position of the .our-company section
    const rect = progressDivHolder.getBoundingClientRect();

    // Check if the section is in the viewport and code hasn't been executed yet
    if (!codeExecuted && rect.top < window.innerHeight && rect.bottom >= 0) {
      const progressContainer = document.querySelector(
        ".progress-div-container"
      );

      // Set flag to indicate that code has been executed
      codeExecuted = true;

      // initial call
      setPercentage();

      function setPercentage() {
        const targetPercentage = parseInt(
          progressContainer.getAttribute("data-percentage")
        );

        const progressEl = progressContainer.querySelector(".progress-div");
        const percentageEl = progressContainer.querySelector(".percentage");

        let currentPercentage = 0;
        let counterInterval;

        const updateCounter = () => {
          if (currentPercentage >= targetPercentage) {
            clearInterval(counterInterval);
          } else {
            currentPercentage++;
            percentageEl.innerText = currentPercentage + "%";
            //   percentageEl.style.left = currentPercentage + "%";
          }
        };

        counterInterval = setInterval(updateCounter, 20); // Adjust the interval time as needed for the counter

        // Set progress bar width and transition
        progressEl.style.width = targetPercentage + "%";
      }
    }
  });
});

//

let mybutton = document.getElementById("btn-to-top");

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  console.log("cign");
}

mybutton.addEventListener("click", backToTop);

//

const header = document.querySelector(".header");
const aboveHeader = document.querySelector(".above-header");
const navbar = document.querySelector("#navbar");
const breakpoint = navbar.getBoundingClientRect().bottom + 200;

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

window.addEventListener("scroll", function () {
  const scrolledBelowBreakpoint = this.scrollY > breakpoint;
  const scrolledAboveBreakpoint = this.scrollY < breakpoint;
  //
  const scrolledToTop = this.scrollY === 0;
  //

  if (!navbarCollapse.classList.contains("show")) {
    if (scrolledBelowBreakpoint) {
      header.classList.add("sticky");
      header.classList.remove("fixed");
    } else {
      header.classList.remove("sticky");
      header.classList.remove("fixed");
    }
  } else {
    header.classList.add("fixed");
    header.classList.remove("sticky");
  }

  if (scrolledToTop) {
    header.classList.remove("sticky");
  }
});

navbarToggler.addEventListener("click", function () {
  if (header.classList.contains("fixed")) {
    header.classList.remove("fixed");
  } else {
    // header.classList.add("fixed");
  }
});

// Closing the navbar when a link is clicked
const menuLinks = document.querySelectorAll(".navbar-collapse a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarCollapse.classList.remove("show");
    navbarToggler.setAttribute("aria-expanded", "false");

    // Only add sticky class if scrolled below breakpoint
    if (window.scrollY > breakpoint) {
      header.classList.add("sticky");
      header.classList.remove("fixed");
    } else {
      header.classList.remove("sticky");
      header.classList.remove("fixed");
    }
  });
});

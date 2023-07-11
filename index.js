 // JavaScript code for closing the navbar when clicked outside or on the toggler
  document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    document.addEventListener("click", function(event) {
      var targetElement = event.target;
      var isClickInsideNavbar = navbarToggler.contains(targetElement) || navbarCollapse.contains(targetElement);

      if (!isClickInsideNavbar && navbarCollapse.classList.contains("show")) {
        navbarToggler.click();
      }
    });

    navbarToggler.addEventListener("click", function() {
      // Toggle the visibility of the navbar menu
      if (!navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.add("show");
      } else {
        navbarCollapse.classList.remove("show");
      }
    });
  });

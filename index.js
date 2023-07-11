// JavaScript code for closing the navbar when clicked outside
       document.addEventListener("DOMContentLoaded", function() {
           var navbarToggler = document.querySelector(".navbar-toggler");
           var navbarCollapse = document.querySelector(".navbar-collapse");

           document.addEventListener("click", function(event) {
               var isClickInsideNavbar = navbarToggler.contains(event.target) || navbarCollapse.contains(event.target);

               if (!isClickInsideNavbar) {
                   // Close the navbar when clicked outside
                   navbarCollapse.classList.remove("show");
               }
           });

           navbarToggler.addEventListener("click", function() {
               // Toggle the visibility of the navbar menu
               navbarCollapse.classList.toggle("show");
           });
       });

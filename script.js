document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");

    navbarToggler.addEventListener("click", function () {
        document.getElementById("navbarNav").classList.toggle("show");
    
    });

});
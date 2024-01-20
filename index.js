document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // Add hover effect on menu items
    var menuItems = document.querySelectorAll("nav ul li");

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("mouseover", function () {
            this.classList.add("hovered");
        });

        menuItem.addEventListener("mouseout", function () {
            this.classList.remove("hovered");
        });
    });
});
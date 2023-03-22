"use strict";

const menuItems = document.querySelectorAll(".menu-items li");

menuItems.forEach((e) => {
    console.log(e.innerHTML);
    e.addEventListener("click", toggleActive, false);
});

function toggleActive() {
    menuItems.forEach((e) => {
        e.classList.remove("active");
    });
    this.classList.add("active");
}
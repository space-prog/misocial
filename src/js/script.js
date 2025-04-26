const burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu-burger"),
    cancel = document.querySelector(".cancel"),
    dark = document.querySelector(".dark-bgc")


burger.addEventListener("click", function () {
    menu.style.left = "0";
    dark.style.display = "block"
})

dark.addEventListener("click", function() {
    menu.style.left = "-100%";
    dark.style.display = "none"
})

function cancelBurger() {
    menu.style.left = "-100%";
    dark.style.display = "none"
}
cancel.addEventListener("click", cancelBurger)

const header = document.querySelector(".fixed-navigation")
console.log(header)
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        header.classList.add("bg-fixed")
    } else {
        header.classList.remove("bg-fixed")
    }
})
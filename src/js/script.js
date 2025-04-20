const burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu-burger"),
    cancel = document.querySelector(".cancel"),
    dark = document.querySelector(".dark-bgc")


burger.addEventListener("click", function () {
    menu.style.left = "0";
    dark.style.display = "block"
})

function cancelBurger() {
    menu.style.left = "-100%";
    dark.style.display = "none"
}
cancel.addEventListener("click", cancelBurger)
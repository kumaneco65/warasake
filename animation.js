const fadein = document.querySelectorAll(".fade-in-element, .fade-in-element-transform, .fade-in-element-right, .fade-in-element-left");

const options = {
    root: null,
    threshold: [0.5]
}

function callback(entries) {
    console.log(entries);
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("fadeIns");
        }
    });
}

const observer = new IntersectionObserver(callback, options);

fadein.forEach(fadein => {
    observer.observe(fadein);
});

const burger = document.querySelector("#burger");
const menu = document.querySelector("#mobile-nav-menu");

if(burger) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("burger-is-active");
        menu.classList.toggle("nav-is-active");
    })
}


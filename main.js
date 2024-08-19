const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollTo > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

toTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector(".page-header")

    window.addEventListener("scroll", function (e) {
        if (window.scrollY > 150) {
            header.classList.add('page-header--sticky')

        } else {
            header.classList.remove('page-header--sticky')
        }
    })
    header.classList.add("page-header--sticky")
});
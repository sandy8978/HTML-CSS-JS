document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetPage = document.getElementById(link.getAttribute('href').substring(1));
            pages.forEach(page => page.style.display = 'none');
            targetPage.style.display = 'block';
        });
    });
});

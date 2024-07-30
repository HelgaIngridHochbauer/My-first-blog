document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.getElementById('menu-btn');
    var menu = document.querySelector('nav');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('hide');
    });
});

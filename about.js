function setActiveLink() {
    const currentLocation = window.location.pathname.split('/').pop(); // Get the current page name
    const links = document.querySelectorAll('.nav_tag a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
setActiveLink();
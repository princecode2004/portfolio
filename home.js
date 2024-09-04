document.getElementById('home').addEventListener('click', function() {
    window.location.href = 'home.html';
});
document.getElementById('about').addEventListener('click', function() {
    window.location.href = 'about.html';
});
/*document.getElementById('project').addEventListener('click', function() {
    window.location.href = 'project.html';
});*/
document.getElementById('resume').addEventListener('click', function() {
    window.location.href = 'resume.html';
});
document.getElementById('btn').addEventListener('click', function() {
    window.location.href = 'contact.html';
});

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


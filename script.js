var typed = new Typed('#element', {
    strings: ['CBIT Undergrad', 'Web Developer','Tech Enthusiast'],
    typeSpeed: 50,
});
document.addEventListener("DOMContentLoaded", function () {
    // const homeButton = document.querySelector('a[href="home.html"]');
    const aboutButton = document.querySelector('a[href="about.html"]');
    const skillsButton = document.querySelector('a[href="skills.html"]');
    const projectsButton = document.querySelector('a[href="projects.html"]');
    const contactButton = document.querySelector('a[href="contactme.html"]');

    // homeButton.addEventListener('click', function (event) {
    //     event.preventDefault(); 
    //     window.location.href = "home.html"; 
    // });

    aboutButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = "about.html";
    });

    skillsButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = "skills.html";
    });

    projectsButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = "projects.html";
    });

    contactButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = "contactme.html";
    });
});
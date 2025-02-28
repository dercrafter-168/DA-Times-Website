console.log("[DCN-System] navbar.js is loading");
document.addEventListener('DOMContentLoaded', function() {

    const nav_button_1 = document.getElementById('navbar-item-1');
    const nav_button_2 = document.getElementById('navbar-item-2');
    const nav_button_3 = document.getElementById('navbar-item-3');
    const nav_button_4 = document.getElementById('navbar-item-4');
    const drp_nav_button_1 = document.getElementById('navbar-item-drp-1');
    const drp_nav_button_2 = document.getElementById('navbar-item-drp-2');

    nav_button_1.addEventListener('click', function() {
        window.location.replace("./index.html");
        console.log("Button 1 clicked & user redirected to index.html");
    });

    nav_button_2.addEventListener('click', function() {
        window.location.replace("https://beispiel.de");
    });

    nav_button_3.addEventListener('click', function() {
        window.location.replace("https://beispiel.de");
    });

    nav_button_4.addEventListener('click', function() {
        window.location.replace("https://beispiel.de");
    });

    drp_nav_button_1.addEventListener('click', function() {
        window.location.replace("https://beispiel.de");
    });

    drp_nav_button_2.addEventListener('click', function() {
        window.location.replace("https://beispiel.de");
    });

});
console.log("[DCN-System] navbar.js is loaded");
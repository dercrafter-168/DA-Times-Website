console.log("[DCN-System] navbar.js is loading");
document.addEventListener('DOMContentLoaded', function() {

    let tmp;

    document.getElementById('navbar-item-1').addEventListener('click', function() {
        const url = "./index.html";
        const log = "Button 1 clicked & user redirected to ";
        tmp = log.concat(url);
        console.log(tmp);
        window.location.replace(url);
    });

    document.getElementById('navbar-item-2').addEventListener('click', function() {
        const url = "./current-edition.html";
        const log = "Button 2 clicked & user redirected to ";
        tmp = log.concat(url);
        console.log(tmp);
        window.location.replace(url);
    });

    document.getElementById('navbar-item-3').addEventListener('click', function() {
        const url = "https://beispiel.de";
        const log = "Button 3 clicked & user redirected to ";
        tmp = log.concat(url);
        console.log(tmp);
        window.location.replace(url);
    });

    document.getElementById('navbar-item-4').addEventListener('click', function() {
        const url = "https://beispiel.de";
        const log = "Button 4 clicked & user redirected to ";
        tmp = log.concat(url);
        console.log(tmp);
        window.location.replace(url);
    });

    document.getElementById('navbar-item-drp-1').addEventListener('click', function() {
        const url = "https://beispiel.de";
        const log = "Button drp-1 clicked & user redirected to ";
        tmp = log.concat(url);
        console.log(tmp);
        window.location.replace(url);
    });

    document.getElementById('navbar-item-drp-2').addEventListener('click', function() {
        const url = "https://beispiel.de";
        const log = "Button drp-2 clicked & user redirected to ";
        tmp = log.concat(url);
        console.log(tmp);
        window.location.replace(url);
    });

});
console.log("[DCN-System] navbar.js is loaded");
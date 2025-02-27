// Warten, bis das Dokument geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Button-Element auswählen
    const nav_button_1 = document.getElementById('navbar-item-1');

    // Klick-Event hinzufügen
    nav_button_1.addEventListener('click', function() {
        alert('Hallo!');
        window.location.replace("https://beispiel.de");
    });


});

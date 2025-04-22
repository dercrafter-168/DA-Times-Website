console.log("[DCN-System] default.js is loading");
document.addEventListener("contextmenu", function (event) {
    event.preventDefault(); //Verhindert das Standard-Kontextmenü
    console.log("Contextmenu is prevented");
});

document.addEventListener('selectstart', function (event) {
    event.preventDefault(); //Verhindert die Textauswahl
    console.log("Selectstart is prevented");
});

document.addEventListener('mousedown', function (event) {
    event.preventDefault(); //Verhindert das Markieren durch Mausziehen
    console.log("Mousedown is prevented");
});

if (window.top !== window.self) {
    alert("Das Einbetten dieser Seite ist nicht erlaubt!");
    window.top.location = window.self.location;
    console.log("The page is not allowed to be embedded!");
}
console.log("[DCN-System] default.js is loaded");
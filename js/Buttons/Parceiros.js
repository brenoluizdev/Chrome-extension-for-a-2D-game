// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados
"use strict"

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', Parceiros);
else Parceiros();

function Parceiros() {
    "use strict"

    var button = document.querySelector("#parceiros");
    var bonkWindowContainer = document.querySelector("#bonkiocontainer");
    var divButtons = document.querySelector("#divButtons");

    var window = document.createElement('div');
    window.setAttribute('id', "windowParceiros");
    window.setAttribute('class', "windowParceiros");

    var windowParceirosTopBar = document.createElement('div');
    windowParceirosTopBar.setAttribute('class', "windowTopBar windowTopBar_classic");
    windowParceirosTopBar.innerHTML = 'Parceiros - BonkTools';

    var windowParceirosClose = document.createElement('div');
    windowParceirosClose.setAttribute('class', "windowCloseButton brownButton brownButton_classic buttonShadow");

    var containerParceiros = document.createElement('div');
    containerParceiros.setAttribute('id', "containerParceiros");
    containerParceiros.setAttribute('class', "containerParceiros");

    var divButtonParceiros = document.createElement('div');
    divButtonParceiros.setAttribute('id', "divButtonParceiros");

    var buttonInsta = document.createElement('button');
    buttonInsta.setAttribute('id', "buttonInsta");
    buttonInsta.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonInsta.innerHTML = 'InstaBonk';
    buttonInsta.setAttribute('onClick', "window.open('http://discord.gg/VgPvyqTM7j', '_blank')");
    divButtonParceiros.appendChild(buttonInsta);

    var buttonLibertadores = document.createElement('button');
    buttonLibertadores.setAttribute('id', "buttonLibertadores");
    buttonLibertadores.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonLibertadores.innerHTML = 'Libertadores';
    buttonLibertadores.setAttribute('onClick', "window.open('https://discord.gg/sksGCZgk39', '_blank')");
    divButtonParceiros.appendChild(buttonLibertadores);
    
    var buttonHBNews = document.createElement('button');
    buttonHBNews.setAttribute('id', "buttonHBNews");
    buttonHBNews.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonHBNews.innerHTML = 'HBNews';
    buttonHBNews.setAttribute('onClick', "window.open('https://discord.gg/nCHSPwDYfU', '_blank')");
    divButtonParceiros.appendChild(buttonHBNews);

    var buttonFDB = document.createElement('button');
    buttonFDB.setAttribute('id', "buttonFDB");
    buttonFDB.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonFDB.innerHTML = 'FDB';
    buttonFDB.setAttribute('onClick', "window.open('https://discord.gg/EKyX93aVWe', '_blank')");
    divButtonParceiros.appendChild(buttonFDB);

    
    windowParceirosClose.addEventListener('click', function () {
        window.style = 'visibility: hidden;';
        divButtons.style = 'visibility: inherit;';
    });

    if(button) {
        button.addEventListener('click', function () {
            document.querySelector("#divButtons").style = 'visibility: hidden;';
            window.style = 'visibility: inherit;';
        });
    }

    window.appendChild(windowParceirosTopBar);
    bonkWindowContainer.appendChild(window);
    window.appendChild(windowParceirosClose);
    window.appendChild(containerParceiros);
    containerParceiros.appendChild(divButtonParceiros);

}

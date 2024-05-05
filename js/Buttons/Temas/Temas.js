// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', Temas);
else Temas();

function Temas() {
    var buttonTemas = document.querySelector("#Temas");
    var bonkWindowContainer = document.querySelector("#bonkiocontainer");
    var divButtons = document.querySelector("#divButtons");

    var containerButton2 = document.createElement('div');
    containerButton2.setAttribute('class', "containerButton2");

    var windowTemas = document.createElement('div');
    windowTemas.setAttribute('id', "windowTemas");
    windowTemas.setAttribute('class', "windowTemas");

    var windowTemasTopBar = document.createElement('div');
    windowTemasTopBar.setAttribute('class', "windowTopBar windowTopBar_classic");
    windowTemasTopBar.innerHTML = 'Temas';

    var windowTemasClose = document.createElement('div');
    windowTemasClose.setAttribute('class', "windowCloseButton brownButton brownButton_classic buttonShadow");

    buttonTemas.addEventListener('click', function () {
        /* divButtons.style = 'visibility: hidden;';
        windowTemas.style = 'visibility: inherit;'; */
        alert('Função ainda em desenvolvimento! - Entre no nosso servidor de suporte para ficar por dentro das novidades: https://discord.gg/qTM3RkYqr6');
    });

    windowTemasClose.addEventListener('click', function () {
        divButtons.style = 'visibility: inherit;';
        windowTemas.style = 'visibility: hidden;';
    });


    var Default = document.createElement('button');
    Default.setAttribute('id', "buttonDefaultTheme");
    Default.setAttribute('class', "brownButton brownButton_classic buttonShadow");
    Default.innerHTML = 'Default';

    var Tema1 = document.createElement('button');
    Tema1.setAttribute('id', "buttonTheme1");
    Tema1.setAttribute('class', "brownButton brownButton_classic buttonShadow");
    Tema1.innerHTML = 'Black';

    var Tema2 = document.createElement('button');
    Tema2.setAttribute('id', "buttonTheme2");
    Tema2.setAttribute('class', "brownButton brownButton_classic buttonShadow");
    Tema2.innerHTML = 'White';

    bonkWindowContainer.appendChild(windowTemas);
    windowTemas.appendChild(windowTemasTopBar);
    windowTemas.appendChild(windowTemasClose);
    windowTemas.appendChild(containerButton2);
    containerButton2.appendChild(Default);
    containerButton2.appendChild(Tema1);
    containerButton2.appendChild(Tema2);

};
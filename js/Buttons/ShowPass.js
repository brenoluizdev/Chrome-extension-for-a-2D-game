// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', Home);
else Home();


function Home() {
    var bonkWindowContainer = document.querySelector("#bonkiocontainer");
    var showPassButton = document.querySelector("#roomlisthidepasswordedcheckbox");

    var windowShowPass = document.createElement('div');
    windowShowPass.setAttribute('id', "windowShowPass");
    windowShowPass.setAttribute('class', "windowShowPass");

    var windowShowBar = document.createElement('div');
    windowShowBar.setAttribute('id', "windowShowBar");
    windowShowBar.setAttribute('class', "windowTopBar windowTopBar_classic");
    windowShowBar.innerHTML = `SALVAR?`;

    var windowShowClose = document.createElement('div');
    windowShowBar.setAttribute('id', "windowShowClose");
    windowShowClose.setAttribute('class', "windowCloseButton brownButton brownButton_classic buttonShadow");

    var showPassContainer = document.createElement('div');
    showPassContainer.setAttribute('id', "showPassContainer");
    showPassContainer.setAttribute('class', "showPassContainer");

    var buttonSave = document.createElement('span');
    buttonSave.setAttribute('id', "buttonSavePass");
    buttonSave.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonSave.innerHTML = 'Salvar';




    var buttonCheck = document.querySelector("#roomlisthidepasswordedcheckbox");

    showPassButton.addEventListener('click', function () {
        windowShowPass.style = 'visibility: inherit;';
    });

    windowShowClose.addEventListener('click', function () {
        windowShowPass.style = 'visibility: hidden;';
    });

    buttonSave.addEventListener('click', function () {
        windowShowPass.style = 'visibility: hidden;';

        if(buttonCheck.checked == "true") {
            localStorage.setItem('showPassSave', "true");
            document.querySelector("#roomlisthidepasswordedcheckbox").checked = "true";
        } else {
            localStorage.setItem('showPassSave', "false");
            document.querySelector("#roomlisthidepasswordedcheckbox").checked = "false";
        }
    });

    var localSavePass = localStorage.getItem('showPassSave');
    
    if(localSavePass == "true") {
        document.querySelector("#roomlisthidepasswordedcheckbox").checked = "true";
    } else {
        document.querySelector("#roomlisthidepasswordedcheckbox").checked = "false";
    }


    bonkWindowContainer.appendChild(windowShowPass);
    windowShowPass.appendChild(windowShowBar);
    windowShowPass.appendChild(windowShowClose);
    windowShowPass.appendChild(showPassContainer);
    showPassContainer.appendChild(buttonSave);
}

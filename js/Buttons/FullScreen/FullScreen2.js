// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', FullScreen2);
else FullScreen2();

function FullScreen2() {
    var bonkioContainer = document.querySelector("#bonkiocontainer");
    var FullScreenButton = document.querySelector('#FullScreenButton2');
    var mainMenuElements = document.querySelector("#mainmenuelements");
    var notification = document.querySelector('#notification');
    var notificationSpan = document.querySelector('#notificationSpan');
    var FullScreenButton2MainContainer = document.querySelector('#containerButtonMainFullscreen');
    var modeName = 'FullScreen 2';

    var bgReplay = document.querySelector("#bgreplay");

    containerButtonMainFullscreen2.addEventListener('click', function () {
        if (bonkioContainer.style.height == "100vw") {
            bonkioContainer.style = 'opacity: 1; top: 0px;';
            bgReplay.style = 'text-align: center !important;';
            
            setTimeout(() => {
                FullScreenButton.style = 'color: white; font-weight: normal;';
                notification.style = 'display: block;';
                notificationSpan.innerHTML = `${modeName} DESATIVADO!`;
                setTimeout(() => {
                    notification.style = 'display: none;';
                }, 4000)
            }, 500);
        } else {
            bonkioContainer.style = 'height: 100vw !important; width: 100vw !important; opacity: 1; top: 0;';
            bgReplay.style = 'text-align: center !important;';

            setTimeout(() => {
                FullScreenButton.style = 'color: #32ff7e; font-weight: bold;';
                notification.style = 'display: block;';
                notificationSpan.innerHTML = `${modeName} ATIVADO!`;
                setTimeout(() => {
                    notification.style = 'display: none;';
                }, 4000)
            }, 500);
        }
    });

    FullScreenButton.addEventListener('click', function () {
        if (bonkioContainer.style.height == "100vw") {
            bonkioContainer.style = 'opacity: 1; top: 0px;';
            bgReplay.style = 'text-align: center !important;';
            
            setTimeout(() => {
                FullScreenButton.style = 'color: white; font-weight: normal;';
                notification.style = 'display: block;';
                notificationSpan.innerHTML = `${modeName} DESATIVADO!`;
                setTimeout(() => {
                    notification.style = 'display: none;';
                }, 4000)
            }, 500);
        } else {
            bonkioContainer.style = 'height: 100vw !important; width: 100vw !important; opacity: 1; top: 0;';
            bgReplay.style = 'text-align: center !important;';

            setTimeout(() => {
                FullScreenButton.style = 'color: #32ff7e; font-weight: bold;';
                notification.style = 'display: block;';
                notificationSpan.innerHTML = `${modeName} ATIVADO!`;
                setTimeout(() => {
                    notification.style = 'display: none;';
                }, 4000)
            }, 500);
        }
    });

};
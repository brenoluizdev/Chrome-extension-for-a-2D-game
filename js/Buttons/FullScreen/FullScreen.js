// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', FullScreen);
else FullScreen();

function FullScreen() {
    var bonkiocontainer = document.querySelector("#bonkiocontainer");
    var FullScreenButton = document.querySelector('#FullScreen');
    var bgReplay = document.querySelector("#bgreplay");
    var FullScreenButtonMainContainer = document.querySelector('#containerButtonMainFullscreen');
    
    FullScreenButtonMainContainer.addEventListener('click', function () {
        bonkiocontainer.requestFullscreen();
        bgReplay.style = 'text-align: center !important;';
    });

    FullScreenButton.addEventListener('click', function () {
        bonkiocontainer.requestFullscreen();
        bgReplay.style = 'text-align: center !important;';
    });
};
// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', Home);
else Home();

function Home() {
    "use strict"

    var name = 'BonkTools';

    var buttonBonkTools = document.createElement('div');
    buttonBonkTools.setAttribute('id', "buttonTopBarConfigBT");
    buttonBonkTools.setAttribute('class', "pretty_top_button niceborderleft");
    var aBT = document.createElement('a');
    aBT.innerHTML = 'BonkTools';


    const addStyle = (() => {
        const style = document.createElement('style');
        document.head.append(style);
        return (styleString) => style.textContent = styleString;
    })();

    addStyle(`
        #MuteChatButton {
            color: white;
            font-weight: normal;
            font-family: futurept_b1;
            line-height: 30px;
            display: inline-block;
            padding-left: 15px;
            padding-right: 15px;
            border-right: 1px solid black;
            font-size: 17px;
        }

        #gravadorButton {
            color: white;
            font-weight: normal;
            font-family: futurept_b1;
            line-height: 30px;
            display: inline-block;
            padding-left: 15px;
            padding-right: 15px;
            border-right: 1px solid black;
            font-size: 17px;
        }

        #FullScreen {
            color: white;
            font-weight: normal;
            font-family: futurept_b1;
            line-height: 30px;
            display: inline-block;
            padding-left: 15px;
            padding-right: 15px;
            border-right: 1px solid black;
            font-size: 17px;
        }

        #FullScreenButton2 {
            color: white;
            font-weight: normal;
            font-family: futurept_b1;
            line-height: 30px;
            display: inline-block;
            padding-left: 15px;
            padding-right: 15px;
            border-right: 1px solid black;
            font-size: 17px;
        }

        #NewsBT {
            display: flex;
            margin-top: 35px;
            align-content: flex-start;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            background: aliceblue;
            height: 85%;
            width: 50%;
            margin-left: 20px;
        }

        #NovidadesBTspan {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: center;
            justify-content: flex-start;
            align-items: center;
            position: absolute;
            top: 30px;
            font-weight: bold;
            margin-top: 12px;
            font-size: 20px;
        }

        #newsContainer {
            display: inline-grid;
            top: 25%;
            position: absolute;
        }

        #buttonOutrosContainer {
            width: 560px;
            height: 368px;
            position: absolute;
            left: 0px;
            right: 0px;
            top: 0px;
            bottom: 0px;
            background-color: rgb(226, 226, 226);
            font-family: futurept_b1;
            visibility: hidden;
            margin: auto;
            border-radius: 7px;
            outline: rgba(0, 0, 0, 0.4) solid 3000px !important;
        }

        #containerButtonMain {
            visibility: hidden;
            border-left: 2px solid white;
            border-bottom: 2px solid white;
            height: 100%;
            width: 12%;
            position: absolute;
            top: 0;
            right: 0;
            justify-content: center;
            display: flex;
            align-content: center;
            flex-wrap: wrap;
            flex-direction: column;
        }

        #containerButtonMain button {
            padding: 10px 30px;
            margin-bottom: 10%;
            font-size: 16px;
        }
    `);


    var bonkWindowContainer = document.querySelector("#bonkiocontainer");

    var divButtons = document.createElement('div');
    divButtons.setAttribute('id', "divButtons");
    divButtons.setAttribute('class', "divButtons");

    var NovidadesBT = document.createElement('div');
    NovidadesBT.setAttribute('id', "NewsBT");

    var NovidadesBTspan = document.createElement('span');
    NovidadesBTspan.setAttribute('id', "NovidadesBTspan");
    NovidadesBTspan.innerHTML = 'Novidades';
    
    var NovidadesContainer = document.createElement('div');
    NovidadesContainer.setAttribute('id', "newsContainer");

    var span = document.createElement('span');
    span.innerHTML = `
        ● Nova parceria: FDB !! <br> 
        ● Botão 'BonkTools' reformulado, <br> onde agora pode-se encontrar as parcerias <br> e as novidades nele. <br>
        ● Reformulação dos botões. <br>
        ● Notificação quando iniciar ou <br> finalizar uma gravação. <br>
    `;
    
    var divButtonsTopBar = document.createElement('div');
    divButtonsTopBar.setAttribute('class', "windowTopBar windowTopBar_classic");
    divButtonsTopBar.innerHTML = `${name} - Novidades`;

    var divButtonsClose = document.createElement('div');
    divButtonsClose.setAttribute('class', "windowCloseButton brownButton brownButton_classic buttonShadow");

    var containerButtons = document.createElement('div');
    containerButtons.setAttribute('class', "containerButtons");

    var body = document.querySelector("body");

    var notification = document.createElement('div');
    var notificationDiv = document.createElement('div');
    var notificationSpan = document.createElement('span');
    notification.setAttribute('id', "notification");
    notificationDiv.setAttribute('id', "notificationDiv");
    notificationSpan.setAttribute('id', "notificationSpan");
    notification.style = 'display: none';
    notificationSpan.innerHTML = `NOTIFICAÇÃO`;

    var key = document.querySelector('#containerKey');

    setTimeout(() => {
        var userBt = ' - BT';
        var name = document.querySelector("#pretty_top_name").innerHTML;
        document.querySelector("#pretty_top_name").innerHTML = `${name} ${userBt}`;

        document.querySelector("#pretty_top_small_preview > img").style = 'width: 33px; height: 33px; background: linear-gradient(to right, red, purple); border-radius: 50%;';
    }, 3000);

    buttonBonkTools.addEventListener('click', function () {
        /* var Key = localStorage.getItem('id5id20');

        if(Key === '64c97o854644r85746r798e7c76t') {
            divButtons.style = 'visibility: inherit !important;';
        } else {
            key.style = 'display: inherit;';
        } */

        divButtons.style = 'visibility: inherit; display: inherit;';
    });

    divButtonsClose.addEventListener('click', function () {
        divButtons.style = 'visibility: hidden;';
    });


    bonkWindowContainer.appendChild(divButtons);
    divButtons.appendChild(divButtonsTopBar);
    divButtons.appendChild(divButtonsClose);
    divButtons.appendChild(containerButtons);
    divButtons.appendChild(NovidadesBT);
    NovidadesBT.appendChild(NovidadesBTspan);
    NovidadesBT.appendChild(NovidadesContainer);
    body.appendChild(notification);
    notification.appendChild(notificationDiv);
    notificationDiv.appendChild(notificationSpan);
    buttonBonkTools.appendChild(aBT);
    document.querySelector("#pretty_top_bar").appendChild(buttonBonkTools);

    NovidadesContainer.appendChild(span);




    var MuteChatButton = document.createElement('div');
    MuteChatButton.setAttribute('id', "MuteChatButton");
    MuteChatButton.setAttribute('class', "pretty_top_button niceborderleft");
    MuteChatButton.innerHTML = `Mute Chat`;
    document.querySelector("#pretty_top_bar").appendChild(MuteChatButton);

    var FullScreenButton = document.createElement('div');
    FullScreenButton.setAttribute('id', "FullScreen");
    FullScreenButton.setAttribute('class', "pretty_top_button niceborderleft");
    FullScreenButton.innerHTML = `FullScreen`;
    document.querySelector("#pretty_top_bar").appendChild(FullScreenButton);


    var FullScreenButton2 = document.createElement('div');
    FullScreenButton2.setAttribute('id', "FullScreenButton2");
    FullScreenButton2.setAttribute('class', "pretty_top_button niceborderleft");
    FullScreenButton2.innerHTML = `FullScreen 2`;
    document.querySelector("#pretty_top_bar").appendChild(FullScreenButton2);

    var gravadorButton = document.createElement('div');
    gravadorButton.setAttribute('id', "gravadorButton");
    gravadorButton.setAttribute('class', "pretty_top_button niceborderleft");
    gravadorButton.innerHTML = `Gravar`;
    document.querySelector("#pretty_top_bar").appendChild(gravadorButton);

    var buttonHBNews = document.createElement('button');
    buttonHBNews.setAttribute('id', "buttonHBNews");
    buttonHBNews.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonHBNews.innerHTML = 'HBNews';
    buttonHBNews.setAttribute('onClick', "window.open('https://discord.gg/nCHSPwDYfU', '_blank')");
    containerButtons.appendChild(buttonHBNews);

    var buttonFDB = document.createElement('button');
    buttonFDB.setAttribute('id', "buttonFDB");
    buttonFDB.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonFDB.innerHTML = 'FDB';
    buttonFDB.setAttribute('onClick', "window.open('https://discord.gg/EKyX93aVWe', '_blank')");
    containerButtons.appendChild(buttonFDB);

    var buttonBSL = document.createElement('button');
    buttonBSL.setAttribute('id', "buttonBSL");
    buttonBSL.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonBSL.innerHTML = 'BSL';
    buttonBSL.setAttribute('onClick', "window.open('https://discord.gg/wjwg9EGPJj', '_blank')");
    containerButtons.appendChild(buttonBSL);

    var buttonSkins = document.createElement('button');
    buttonSkins.setAttribute('id', "buttonSkins");
    buttonSkins.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonSkins.innerHTML = 'Skins - Voodka';
    buttonSkins.setAttribute('onClick', "window.open('https://discord.gg/yJgChExS5E', '_blank')");
    containerButtons.appendChild(buttonSkins);

    var buttonInsta = document.createElement('button');
    buttonInsta.setAttribute('id', "buttonInsta");
    buttonInsta.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonInsta.innerHTML = 'InstaBonk';
    buttonInsta.setAttribute('onClick', "window.open('http://discord.gg/VgPvyqTM7j', '_blank')");
    containerButtons.appendChild(buttonInsta);

    var buttonLibertadores = document.createElement('button');
    buttonLibertadores.setAttribute('id', "buttonLibertadores");
    buttonLibertadores.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonLibertadores.innerHTML = 'Libertadores';
    buttonLibertadores.setAttribute('onClick', "window.open('https://discord.gg/sksGCZgk39', '_blank')");
    containerButtons.appendChild(buttonLibertadores);
    






    var buttonOutros = document.createElement('button');
    buttonOutros.setAttribute('id', "buttonOutros");
    buttonOutros.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonOutros.innerHTML = 'Outros';
    containerButtons.appendChild(buttonOutros);

    var containerButtonMain = document.createElement('div');
    containerButtonMain.setAttribute('id', "containerButtonMain");

    var containerButtonMainGravar = document.createElement('button');
    containerButtonMainGravar.setAttribute('id', "containerButtonMainGravar");
    containerButtonMainGravar.setAttribute('class', "brownButton brownButton_classic");
    containerButtonMainGravar.innerHTML = 'Gravar';
    containerButtonMainGravar.style = 'visibility: hidden;';

    var containerButtonMainFullscreen = document.createElement('button');
    containerButtonMainFullscreen.setAttribute('id', "containerButtonMainFullscreen");
    containerButtonMainFullscreen.setAttribute('class', "brownButton brownButton_classic");
    containerButtonMainFullscreen.innerHTML = 'FullScreen';
    containerButtonMainFullscreen.style = 'visibility: hidden;';

    var containerButtonMainFullscreen2 = document.createElement('button');
    containerButtonMainFullscreen2.setAttribute('id', "containerButtonMainFullscreen2");
    containerButtonMainFullscreen2.setAttribute('class', "brownButton brownButton_classic");
    containerButtonMainFullscreen2.innerHTML = 'FullScreen 2';
    containerButtonMainFullscreen2.style = 'visibility: hidden;';

    var containerButtonMainMuteChat = document.createElement('button');
    containerButtonMainMuteChat.setAttribute('id', "containerButtonMainMuteChat");
    containerButtonMainMuteChat.setAttribute('class', "brownButton brownButton_classic");
    containerButtonMainMuteChat.innerHTML = 'Mute Chat';
    containerButtonMainMuteChat.style = 'visibility: hidden;';


    document.querySelector("body").appendChild(containerButtonMain);
    containerButtonMain.appendChild(containerButtonMainGravar);
    containerButtonMain.appendChild(containerButtonMainFullscreen2);
    containerButtonMain.appendChild(containerButtonMainFullscreen);
    containerButtonMain.appendChild(containerButtonMainMuteChat);


    var buttonOutrosContainer = document.createElement('div');
    buttonOutrosContainer.setAttribute('id', "buttonOutrosContainer");
    document.querySelector("#bonkiocontainer").appendChild(buttonOutrosContainer);

    var buttonOutrosTopBar = document.createElement('div');
    buttonOutrosTopBar.setAttribute('class', "windowTopBar windowTopBar_classic");
    buttonOutrosTopBar.innerHTML = `Outros`;

    var buttonOutrosClose = document.createElement('div');
    buttonOutrosClose.setAttribute('class', "windowCloseButton brownButton brownButton_classic buttonShadow");

    buttonOutrosContainer.appendChild(buttonOutrosTopBar);
    buttonOutrosContainer.appendChild(buttonOutrosClose);

    buttonOutros.addEventListener('click', function () {
        divButtons.style = 'visibility: hidden;';
        buttonOutrosContainer.style = 'visibility: inherit;';
    });

    buttonOutrosClose.addEventListener('click', function () {
        divButtons.style = 'visibility: inherit;';
        buttonOutrosContainer.style = 'visibility: hidden;';
    });

    document.body.insertAdjacentHTML('beforeend', '<nav class="item-menu"><input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/><label id="menu-open-handler" class="menu-open-button" for="menu-open"><span class="plus plus-1"></span><span class="plus plus-2"></span></label><div class= "real-menu" ><a href="#" class="menu-item" data-name="File"> <i class="fa fa-file"></i> </a><a href="#" class="menu-item" data-name="Photo"> <i class="fa fa-image"></i> </a><a href="#" class="menu-item" data-name="Video"> <i class="fa fa-video-camera"></i> </a><a href="#" class="menu-item" data-name="Snippet"> <i class="fa fa-code"></i> </a><a href="#" class="menu-item" data-name="Folder"> <i class="fa fa-folder"></i> </a></div></nav ><svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="width: 0; height: 0;"><defs><filter id="shadowed-goo"><feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" /><feGaussianBlur in="goo" stdDeviation="3" result="shadow" /><feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" /><feOffset in="shadow" dx="1" dy="1" result="shadow" /><feBlend in2="shadow" in="goo" result="goo" /><feBlend in2="goo" in="SourceGraphic" result="mix" /></filter><filter id="goo"><feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" /><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" /><feBlend in2="goo" in="SourceGraphic" result="mix" /></filter></defs></svg>');

    var checkbox = document.getElementById('menu-open');
    var handler = document.getElementById('menu-open-handler');


    handler.onclick = function () {
        clearInterval(toggleInterval);
    };


    document.querySelector('#roomSearchInputBox').style = 'visibility: hidden;';



    var tbody = document.querySelector("#roomlisttable > tbody");
    tbody.style = 'position: absolute !important; width: 100% !important;'
    tbody.setAttribute('id', "tbody");

    document.querySelector("#bonk_d_1").remove();
    document.querySelector("#bonk_d_2").remove();























   /*  var hipotese = document.querySelector("#bonkiocontainer");

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                for (var i = 0; i < mutation.addedNodes.length; i++) {
                    console.log('  "' + mutation.addedNodes[i].textContent + '" adicionado');
                }

                for (var i = 0; i < mutation.removedNodes.length; i++) {
                    console.log('  "' + mutation.removedNodes[i].textContent + '" removido');
                }
            } else {
                console.log('  "' + mutation.attributeName + '" alterado')
            }
        });
    });

    observer.observe(hipotese, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
    }); */
};
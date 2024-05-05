// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', CreateRooms);
else CreateRooms();

function CreateRooms() {
    var notification = document.querySelector('#notification');
    var notificationSpan = document.querySelector('#notificationSpan');

    var roomListContainer = document.querySelector("#roomlist");
    var bonkWindowContainer = document.querySelector("#bonkiocontainer");

    var createRoomsButton = document.createElement('button');
    createRoomsButton.setAttribute('id', "createRoomsButton");
    createRoomsButton.setAttribute('class', "roomlistbottombutton brownButton brownButton_classic buttonShadow");
    createRoomsButton.innerHTML = `Auto Create`;

    var windowCreateRooms = document.createElement('div');
    windowCreateRooms.setAttribute('id', "windowCreateRooms");
    windowCreateRooms.setAttribute('class', "windowCreateRooms");

    var containerCreating = document.createElement('div');
    containerCreating.setAttribute('id', "containerCreating")
    containerCreating.setAttribute('class', "containerCreating");

    var windowCreateTopBar = document.createElement('div');
    windowCreateTopBar.setAttribute('class', "windowTopBar windowTopBar_classic");
    windowCreateTopBar.innerHTML = 'AMIS - CT';

    var windowCreateClose = document.createElement('div');
    windowCreateClose.setAttribute('class', "windowCloseButton brownButton brownButton_classic buttonShadow");



    var amisButton = document.createElement('button');
    amisButton.setAttribute('id', "amisButton");
    amisButton.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    amisButton.style = 'border: none;';
    amisButton.innerHTML = `Amis`;

    var CTButton = document.createElement('button');
    CTButton.setAttribute('id', "CTButton");
    CTButton.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    CTButton.style = 'border: none;';
    CTButton.innerHTML = `CT`;

    var inputTime = document.createElement('input');
    inputTime.setAttribute('id', "inputTime");
    inputTime.setAttribute('class', "inputTime");
    inputTime.setAttribute('type', "text");
    inputTime.setAttribute('placeholder', "Nome do seu time");
    inputTime.value = localStorage.getItem('Time');

    var inputTimeValue = inputTime.value;

    var amis = `AMIS 【 ${inputTime.value} 】`;
    var amisPassword = document.createElement('input');
    amisPassword.setAttribute('id', "amisPassword");
    amisPassword.setAttribute('class', "amisPassword");
    amisPassword.setAttribute('type', "text");
    amisPassword.setAttribute('placeholder', "Amis - Senha");
    amisPassword.value = localStorage.getItem('AmisSenha');

    var ct = `CT 《 ${inputTimeValue} 》`;
    var CTPassword = document.createElement('input');
    CTPassword.setAttribute('id', "CTPassword");
    CTPassword.setAttribute('class', "CTPassword");
    CTPassword.setAttribute('type', "text");
    CTPassword.setAttribute('placeholder', "CT - Senha");
    CTPassword.value = localStorage.getItem('CTSenha');

    var buttonSave = document.createElement('button');
    buttonSave.setAttribute('id', "buttonSave");
    buttonSave.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonSave.innerHTML = 'Salvar';
    buttonSave.style = 'border: none;';

    var containerInputs = document.createElement('div');
    containerInputs.setAttribute('id', "containerInputs");
    containerInputs.setAttribute('class', "containerInputs");


    windowCreateClose.addEventListener('click', function () {
        windowCreateRooms.style = 'visibility: hidden;';
    });

    createRoomsButton.addEventListener('click', function () {
        windowCreateRooms.style = 'visibility: inherit;';
    });

    amisButton.addEventListener('click', function () {
        var time = localStorage.getItem('Time');
        var amisSenhaRoom = localStorage.getItem('AmisSenha');
        var CTSenhaRoom = localStorage.getItem('CTSenha');
        var maxPlayers = 8;

        setTimeout(() => {
            document.querySelector("#windowCreateRooms > div.windowCloseButton.brownButton.brownButton_classic.buttonShadow").click()
        }, 100);

        setTimeout(() => {
            document.querySelector("#roomlistcreatebutton").click()
        }, 100);

        setTimeout(() => {
            document.querySelector("#roomlistcreatewindowgamename").value = `Amis / ${time}`;
        }, 100);

        setTimeout(() => {
            document.querySelector("#roomlistcreatewindowpassword").value = amisSenhaRoom;
        }, 100);

        setTimeout(() => {
            document.querySelector("#roomlistcreatewindowmaxplayers").value = maxPlayers;
        }, 100);

        setTimeout(() => {
            document.querySelector("#roomlistcreatecreatebutton").click()
        }, 100);

        setTimeout(() => {
            document.querySelector("#newbonklobby_modebutton").click()

            setTimeout(() => {
                document.querySelector("#newbonklobby_modebutton").click()
            }, 100);

            setTimeout(() => {
                document.querySelector("#newbonklobby_modebutton").click()
            }, 100);

            setTimeout(() => {
                document.querySelector("#newbonklobby_modebutton").click()
            }, 1000);

            setTimeout(() => {
                document.querySelector("#newbonklobby_roundsinput").value = 9;
            }, 1100);

            setTimeout(() => {
                document.querySelector("#newbonklobby_linkbutton").click();
            }, 1200);

            setTimeout(() => {
                document.querySelector("#newbonklobby_readybutton").click()

                setTimeout(() => {
                    notification.style = 'display: block;';
                    notificationSpan.innerHTML = `AMIS CRIADO COM SUCESSO!`;
                    setTimeout(() => {
                        notification.style = 'display: none;';
                    }, 4000);
                }, 500);
            }, 1300);
        }, 3000);
    });

    CTButton.addEventListener('click', function () {
        var time = localStorage.getItem('Time');
        var amisSenhaRoom = localStorage.getItem('AmisSenha');
        var CTSenhaRoom = localStorage.getItem('CTSenha');
        var maxPlayers = 8;

        setTimeout(() => {
            document.querySelector("#windowCreateRooms > div.windowCloseButton.brownButton.brownButton_classic.buttonShadow").click()
        }, 100);

        setTimeout(() => {
            document.querySelector("#roomlistcreatebutton").click()
        }, 100);

        setTimeout(() => {
            document.querySelector("#roomlistcreatewindowgamename").value = `CT / ${time}`;
        }, 100);

        setTimeout(() => {
            document.querySelector("#roomlistcreatewindowpassword").value = CTSenhaRoom;
        }, 100);

        setTimeout(() => {
            document.querySelector("#roomlistcreatewindowmaxplayers").value = maxPlayers;
        }, 100);

        setTimeout(() => {
            document.querySelector("#roomlistcreatecreatebutton").click()
        }, 100);

        setTimeout(() => {
            document.querySelector("#newbonklobby_modebutton").click()

            setTimeout(() => {
                document.querySelector("#newbonklobby_modebutton").click()
            }, 100);

            setTimeout(() => {
                document.querySelector("#newbonklobby_modebutton").click()
            }, 100);

            setTimeout(() => {
                document.querySelector("#newbonklobby_modebutton").click()
            }, 1000);

            setTimeout(() => {
                document.querySelector("#newbonklobby_roundsinput").value = 9;
            }, 1100);

            setTimeout(() => {
                document.querySelector("#newbonklobby_linkbutton").click();
            }, 1200);

            setTimeout(() => {
                document.querySelector("#newbonklobby_readybutton").click()

                setTimeout(() => {
                    notification.style = 'display: block;';
                    notificationSpan.innerHTML = `CT CRIADO COM SUCESSO!`;
                    setTimeout(() => {
                        notification.style = 'display: none;';
                    }, 4000);
                }, 500);
            }, 1300);
        }, 3000);

    });

    buttonSave.addEventListener('click', function () {
        localStorage.setItem('Time', `${inputTime.value}`);
        localStorage.setItem('AmisSenha', `${amisPassword.value}`);
        localStorage.setItem('CTSenha', `${CTPassword.value}`);

        setTimeout(() => {
            notification.style = 'display: block;';
            notificationSpan.innerHTML = `SALVO COM SUCESSO!`;
            setTimeout(() => {
                notification.style = 'display: none;';
            }, 4000);
        }, 500);
    });

    roomListContainer.appendChild(createRoomsButton);
    bonkWindowContainer.appendChild(windowCreateRooms);
    windowCreateRooms.appendChild(windowCreateTopBar);
    windowCreateRooms.appendChild(windowCreateClose);
    windowCreateRooms.appendChild(containerCreating);
    containerCreating.appendChild(amisButton);
    containerCreating.appendChild(CTButton);
    windowCreateRooms.appendChild(containerInputs);
    containerInputs.appendChild(inputTime);
    containerInputs.appendChild(amisPassword);
    containerInputs.appendChild(CTPassword);
    containerInputs.appendChild(buttonSave);
};
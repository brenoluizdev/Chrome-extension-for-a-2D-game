// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', Key);
else Key();

function Key() {
    var body = document.querySelector("#pagecontainer");
    var data2;
    var data3;
    var data4;

    var InstaBonk = 'https://discord.gg/VgPvyqTM7j';
    var Libertadores = 'https://discord.gg/Nq7GBdnrFY';

    var containerKey = document.createElement('div');
    containerKey.setAttribute('id', "containerKey");

    var containerKey2 = document.createElement('div');
    containerKey2.setAttribute('id', "containerKey2");

    var containerTopbar = document.createElement('div');
    containerTopbar.setAttribute('class', "windowTopBar windowTopBar_classic");
    containerTopbar.innerHTML = 'BonkTools - Get Key';

    var input = document.createElement('input');
    input.setAttribute('type', "text");
    input.setAttribute('id', "inputKey");
    input.setAttribute('placeholder', "Key");
    input.setAttribute('autocomplete', "off");

    var buttonEnter = document.createElement('button');
    buttonEnter.setAttribute('id', "buttonEnter");
    buttonEnter.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    buttonEnter.innerHTML = 'Entrar';

    var getKeyButton = document.createElement('button');
    getKeyButton.setAttribute('id', "GetKeyButton");
    getKeyButton.setAttribute('class', "brownButton brownButton_classic classic_mid_buttons");
    getKeyButton.innerHTML = 'Pegar key';

    var otherText = document.createElement('div');
    otherText.setAttribute('id', "otherText");

    var spanInstaBonk = document.createElement('span');
    spanInstaBonk.setAttribute('id', "descriptionsKey");
    var spanInstaBonkA = document.createElement('a');
    spanInstaBonkA.setAttribute('id', "instabonkKey");
    spanInstaBonkA.setAttribute('href', "https://instabonk.vercel.app");
    spanInstaBonkA.setAttribute('target', "_blank");
    spanInstaBonkA.innerHTML = 'InstaBonk';

    var Ebutton = document.createElement('span');
    Ebutton.setAttribute('id', "Ebutton");
    var Ebutton2 = document.createElement('a');
    Ebutton2.setAttribute('id', "Ebutton2");
    Ebutton2.innerHTML = '&';
    Ebutton.appendChild(Ebutton2);

    var spanLibertadores = document.createElement('span');
    spanLibertadores.setAttribute('id', "descriptionsKey");
    var spanLibertadoresA = document.createElement('a');
    spanLibertadoresA.setAttribute('id', "libertadoresKey");
    spanLibertadoresA.setAttribute('href', "https://libertadores-bonk.vercel.app");
    spanLibertadoresA.setAttribute('target', "_blank");
    spanLibertadoresA.innerHTML = 'Libertadores';

    var keyCloseButton = document.createElement('div');
    keyCloseButton.setAttribute('class', "windowCloseButton brownButton brownButton_classic buttonShadow");
    keyCloseButton.addEventListener('click', function () {
        containerKey.style = 'visibility: hidden;';
    });




    fetch('https://raw.githubusercontent.com/KYSBT/4262546/main/1290384').then(async res => {

        var data = await res.json();
        data2 = data.keyIn;
        data3 = data.keyLi;
        data4 = data.keyBt;

    }).catch(e => console.log(e));


    getKeyButton.addEventListener('click', function () {
        window.open(InstaBonk, "_blank"/* , "popup" */);
        window.open(Libertadores, "_blank"/* , "popup" */);
    });

    buttonEnter.addEventListener('click', function () {
        var keyPass = data2 + data3 + data4;
        var inputValue = input.value
        var containerKeyNone = document.getElementById('containerKey');
        var divButtons = document.getElementById("divButtons");
        var notification = document.querySelector('#notification');
        var notificationSpan = document.querySelector('#notificationSpan');

        localStorage.setItem("id5id20", "12t44e2s754t0i993n1g");

        if (inputValue == keyPass) {
            containerKeyNone.style = 'display: none;';
            divButtons.style = 'visibility: inherit !important;';
            localStorage.setItem("id5id20", "64c97o854644r85746r798e7c76t");

            setTimeout(() => {
                buttonEnter.style = 'color: #32ff7e; font-weight: bold;';
                notification.style = 'display: block;';
                notificationSpan.innerHTML = `Chave correta!`;

                setTimeout(() => {
                    notification.style = 'display: none;';
                }, 4000)
            }, 500);
        } else {
            containerKeyNone.style = 'display: inherit;';
            divButtons.style = 'visibility: hidden;';
            localStorage.setItem("id5id20", "12t44e2s754t0i993n1g");

            setTimeout(() => {
                buttonEnter.style = 'color: white; font-weight: normal;';
                notification.style = 'display: block;';
                notificationSpan.innerHTML = `Chave incorreta!`;

                setTimeout(() => {
                    notification.style = 'display: none;';
                }, 4000)
            }, 500);
        }
    });



    body.appendChild(containerKey);
    containerKey.appendChild(containerTopbar);
    containerKey.appendChild(containerKey2);
    containerKey.appendChild(otherText);
    containerKey.appendChild(keyCloseButton);

    containerKey2.appendChild(input);
    containerKey2.appendChild(buttonEnter);
    containerKey2.appendChild(getKeyButton);

    otherText.appendChild(spanInstaBonk);
    otherText.appendChild(Ebutton);
    otherText.appendChild(spanLibertadores);
    spanInstaBonk.appendChild(spanInstaBonkA);
    spanLibertadores.appendChild(spanLibertadoresA);

};
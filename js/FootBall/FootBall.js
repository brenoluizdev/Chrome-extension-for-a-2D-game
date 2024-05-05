// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', FootBall);
else FootBall();

function FootBall() {
    var windowGamePlay = document.querySelector("#newbonklobby");
    var settingsButton = document.querySelector("#newbonklobby_teamsbutton");
    var container = document.querySelector("#newbonklobby_settingsbox");

    var test = document.querySelector("#newbonklobby_startbutton");

    document.querySelector("#roomlistcreatecreatebutton").addEventListener('click', handleClick);

    var buttonHidden = document.querySelector("#newbonklobby_teamsbutton");
    var modesButton = document.querySelector("#newbonklobby_modebutton");

    var configFootball = document.createElement('button');
    configFootball.setAttribute('id', "configFootball");
    configFootball.setAttribute('class', "newbonklobby_settings_button brownButton brownButton_classic buttonShadow");
    configFootball.innerHTML = `Config. Fut`;

    var windowCreating = document.createElement('div');
    windowCreating.setAttribute('class', "windowShadow");
    windowCreating.setAttribute('id', "windowCreating");

    var windowCreatingTopBar = document.createElement('div');
    windowCreatingTopBar.setAttribute('class', "newbonklobby_boxtop newbonklobby_boxtop_classic");
    windowCreatingTopBar.setAttribute('id', "windowCreatingTopBar");
    windowCreatingTopBar.innerHTML = `Config. Fut`;

    var windowCreatingClose = document.createElement('div');
    windowCreatingClose.setAttribute('class', "windowCloseButton brownButton brownButton_classic buttonShadow");
    windowCreatingClose.setAttribute('id', "windowCreatingClose");

    windowCreatingClose.addEventListener('click', function () {
        windowCreating.style = 'display: none;';
    });

    configFootball.addEventListener('click', function () {
        windowCreating.style = 'display: block;';
    });

    var notification = document.getElementById('notification');
    var notificationDiv = document.getElementById('notificationDiv');
    var notificationSpan = document.getElementById('notificationSpan');

    var buttons = document.createElement('div');
    buttons.setAttribute('id', "buttonFootball");

    var x1 = document.createElement('button')
    x1.setAttribute('class', "brownButton brownButton_classic buttonShadow");
    x1.setAttribute('id', "x1");
    x1.innerHTML = `X1`;

    var x2 = document.createElement('button')
    x2.setAttribute('class', "brownButton brownButton_classic buttonShadow");
    x2.setAttribute('id', "x2");
    x2.innerHTML = `X2`;

    var x3 = document.createElement('button')
    x3.setAttribute('class', "brownButton brownButton_classic buttonShadow");
    x3.setAttribute('id', "x3");
    x3.innerHTML = `X3`;




    x1.onclick = function () {
        var espec = document.querySelectorAll(".newbonklobby_elementcontainer > .newbonklobby_playerentry");
        var PlayerSelected = espec[Math.floor(Math.random() * espec.length)];
        var TeamLock = document.querySelector("#newbonklobby_teamlockbutton").getAttribute('class');
        var especAlpha = document.querySelector("#newbonklobby_specbox_elementcontainer").children.length;

        var redTeam = document.querySelector("#newbonklobby_playerbox_rightelementcontainer").children.length;
        var blueTeam = document.getElementById("newbonklobby_playerbox_leftelementcontainer").children.length;

        var espec2 = document.querySelector("#newbonklobby_specbox_elementcontainer");
        var espec3 = espec2.children.length;
        var espec4 = espec2.children[0];

        var spanChildrenLength = document.querySelector("#newbonklobby_specbox_elementcontainer").children.length
        var spanChildrenLength0 = document.querySelector("#newbonklobby_specbox_elementcontainer").children[0];

        var redTeamCount = document.querySelector("#newbonklobby_playerbox_rightelementcontainer").childElementCount;
        var blueTeamCount = document.querySelector("#newbonklobby_playerbox_leftelementcontainer").childElementCount;

        /* if (TeamLock != "brownButton buttonShadow newbonklobby_teamlockbutton_warn") {
            document.querySelector("#newbonklobby_teamlockbutton").click()
        }
 */
        if (spanChildrenLength >= 1) {
            /*  if (redTeamCount < 1) {
                 spanChildrenLength0.click();
                 document.querySelector(".newbonklobby_playerentry_menu_button").click()
                 document.querySelector("#newbonklobby_specbox > div.newbonklobby_playerentry_menu > div.newbonklobby_playerentry_menu_submenu > div:nth-child(3)").click()
             } else if (blueTeamCount < 1) {
                 spanChildrenLength0.click();
                 document.querySelector(".newbonklobby_playerentry_menu_button").click()
                 document.querySelector("#newbonklobby_specbox > div.newbonklobby_playerentry_menu > div.newbonklobby_playerentry_menu_submenu > div:nth-child(4)").click()
             } */

            spanChildrenLength0.click();
            document.querySelector(".newbonklobby_playerentry_menu_button").click()
            document.querySelector("#newbonklobby_specbox > div.newbonklobby_playerentry_menu > div.newbonklobby_playerentry_menu_submenu > div:nth-child(3)").click()

            setTimeout(() => {
                document.querySelector("#newbonklobby_specbox_elementcontainer").children.click();
                document.querySelector(".newbonklobby_playerentry_menu_button").click()
                document.querySelector("#newbonklobby_specbox > div.newbonklobby_playerentry_menu > div.newbonklobby_playerentry_menu_submenu > div:nth-child(4)").click()
            }, 500);

            setTimeout(() => {
                x1.style = 'color: #32ff7e; font-weight: normal;';
                notification.style = 'display: block;';
                notificationSpan.innerHTML = `MODO <b> X1 </b> SELECIONADO!`;
                setTimeout(() => {
                    notification.style = 'display: none;';
                }, 4000)
            }, 50);
        } else {
            setTimeout(() => {
                x1.style = 'color: red; font-weight: normal;';
                notification.style = 'display: block;';
                notificationSpan.innerHTML = `PESSOAS INSUFICIENTES NA SALA!`;
                setTimeout(() => {
                    notification.style = 'display: none;';
                }, 4000)
            }, 500);
        }
    };



    function hidden() {
        modesButton.addEventListener('click', function () {
            if (buttonHidden.style.visibility != "hidden") {
                setTimeout(() => {
                    /* alert('block'); */
                }, 500);
                configFootball.style = 'display: none;';
            } else {
                setTimeout(() => {
                    /* alert('hidden'); */
                }, 500);
                configFootball.style = 'display: block;';
            }
        });
    }


    async function handleClick() {
        await new Promise((resolve) =>
            setTimeout(resolve, 4000)
        )
        if (windowGamePlay.style.display == "none") {
            /* alert('none - alert'); */
        } else {
            /* alert('block - alert'); */
            hidden();
        }
    }

    container.appendChild(configFootball);
    windowGamePlay.appendChild(windowCreating);
    windowCreating.appendChild(windowCreatingTopBar);
    windowCreating.appendChild(windowCreatingClose);
    windowCreating.appendChild(buttons);
    buttons.appendChild(x1);
    buttons.appendChild(x2);
    buttons.appendChild(x3);
};


console.clear();
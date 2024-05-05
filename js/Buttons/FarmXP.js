// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', FarmXP);
else FarmXP();

function FarmXP() {
    var button = document.querySelector('#FarmXP');

    /*
    document.querySelector("#newbonklobby_chat_content > div:nth-child(3) > span").innerHTML.replace('https://bonk.io/').replace('* undefined').split("");
    */

    button.addEventListener('click', function () {
        alert('Função ainda em desenvolvimento! - Entre no nosso servidor de suporte para ficar por dentro das novidades: https://discord.gg/qTM3RkYqr6');
       /*  setTimeout(() => {
            document.querySelector("#divButtons > div.windowCloseButton.brownButton.brownButton_classic.buttonShadow").click()
        }, 100);

        setTimeout(() => {
            document.querySelector("#classic_mid_customgame").click()
        }, 200);

        setTimeout(() => {
            document.querySelector("#roomlistcreatebutton").click()
        }, 550);

        setTimeout(() => {
            document.querySelector("#roomlistcreatewindowunlisted > div.control_indicator").click()
        }, 650);

        setTimeout(() => {
            document.querySelector("#roomlistcreatecreatebutton").click()
        }, 750);

        setTimeout(() => {
            document.querySelector("#newbonklobby_linkbutton").click()
        }, 6000);

        setTimeout(() => {
            openWindow();
        }, 6200)

        function openWindow() {
            if (document.querySelector("#newbonklobby_chat_content").style.display != "block") {
                alert('Não está block');
            } else {
                var element = document.querySelector("#newbonklobby_chat_content > div:nth-child(3) > span");
                var elementTest = element.innerHTML.split(" ")[1];

                setTimeout(() => {
                    window.open(elementTest, "_blank")
                }, 100);

                setTimeout(() => {
                    document.querySelector("#sm_connectingWindowCancelButton").click()
                }, 200);
            }
        } */
    });
}

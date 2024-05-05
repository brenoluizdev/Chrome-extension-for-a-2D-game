// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', AutoJoin);
else AutoJoin();

function AutoJoin() {
    var roomListContainer = document.querySelector("#roomlist");

    var autoJoinButton = document.createElement('button');
    autoJoinButton.setAttribute('id', "autoJoinButton");
    autoJoinButton.setAttribute('class', "roomlistbottombutton brownButton brownButton_classic buttonShadow");
    autoJoinButton.innerHTML = `Auto Join`;


    autoJoinButton.addEventListener('click', function () {
        var rooms = document.querySelector("#sm_connectingContainer");
        var roomSelected1 = document.querySelector("#roomlisttable > tbody > tr.HOVERSELECTED.SELECTED > td:nth-child(2)").innerHTML[0];
        var roomSelected2 = document.querySelector("#roomlisttable > tbody > tr.HOVERSELECTED.SELECTED > td:nth-child(2)").innerHTML[2];


        setTimeout(() => {
            document.querySelector("#roomlistjoinbutton").click()
        }, 100);

        setTimeout(() => {
            for (let caracteristica in rooms) {
                if (roomSelected1 == roomSelected2) {
                    document.querySelector("#sm_connectingWindowCancelButton").click()

                    setTimeout(() => {
                        document.querySelector("#roomlistjoinbutton").click()
                    }, 7000);

                } else {
                    break;
                }
            }
        }, 1000);
    });

    roomListContainer.appendChild(autoJoinButton);
}
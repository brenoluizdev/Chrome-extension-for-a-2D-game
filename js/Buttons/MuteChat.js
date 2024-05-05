// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

"use strict"

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', MuteChat);
else MuteChat();

function MuteChat() {
    "use strict"

    var MuteChatButton = document.querySelector('#MuteChatButton');
    var MuteChatButtonContainerMain = document.querySelector('#containerButtonMainMuteChat');
    var chat = document.querySelector("#newbonklobby_chat_content");

    var notification = document.querySelector('#notification');
    var notificationSpan = document.querySelector('#notificationSpan');
    var quickPlayChat = document.querySelector("#ingamechatcontent");

    var MuteButton = localStorage.getItem('MuteButton');

    MuteChatButtonContainerMain.addEventListener('click', function () {
        try {
            if (chat.style.display === 'none' && quickPlayChat.style.display === 'none') {
                chat.style = "display: block";
                quickPlayChat.style = "display: block";

                localStorage.setItem("MuteButton", "unmuted");

                setTimeout(() => {
                    MuteChatButtonContainerMain.style = 'color: white; font-weight: normal;';
                    notification.style = 'display: block;';
                    notificationSpan.innerHTML = `BATE-PAPO ATIVADO!`;
                    setTimeout(() => {
                        notification.style = 'display: none;';
                    }, 4000);
                }, 500);
            } else {
                chat.style = 'display: none';
                quickPlayChat.style = "display: none";

                localStorage.setItem("MuteButton", "muted");

                setTimeout(() => {
                    MuteChatButtonContainerMain.style = 'color: #32ff7e; font-weight: bold;';
                    notification.style = 'display: block;';
                    notificationSpan.innerHTML = `BATE-PAPO DESATIVADO!`;
                    setTimeout(() => {
                        notification.style = 'display: none;';
                    }, 4000);
                }, 500);
            };
        } catch(err) {
            alert(err);
        };
    });

    if(MuteChatButton) {
        MuteChatButton.addEventListener('click', function () {
            try {
                if (chat.style.display === 'none' && quickPlayChat.style.display === 'none') {
                    chat.style = "display: block";
                    quickPlayChat.style = "display: block";
    
                    localStorage.setItem("MuteButton", "unmuted");
    
                    setTimeout(() => {
                        MuteChatButton.style = 'color: white; font-weight: normal;';
                        notification.style = 'display: block;';
                        notificationSpan.innerHTML = `BATE-PAPO ATIVADO!`;
                        setTimeout(() => {
                            notification.style = 'display: none;';
                        }, 4000);
                    }, 500);
                } else {
                    chat.style = 'display: none';
                    quickPlayChat.style = "display: none";
    
                    localStorage.setItem("MuteButton", "muted");
    
                    setTimeout(() => {
                        MuteChatButton.style = 'color: #32ff7e; font-weight: bold;';
                        notification.style = 'display: block;';
                        notificationSpan.innerHTML = `BATE-PAPO DESATIVADO!`;
                        setTimeout(() => {
                            notification.style = 'display: none;';
                        }, 4000);
                    }, 500);
                };
            } catch(err) {
                alert(err);
            };
        });
    };

    if(MuteChatButton) {
        if (MuteButton != 'muted') {
            localStorage.setItem("MuteButton", "unmuted");
            MuteChatButton.style = 'color: white; font-weight: normal;';

            document.getElementById("ingamechatcontent").style = "display: block";
            document.getElementById("newbonklobby_chat_content").style = "display: block";
        } else {
            localStorage.setItem("MuteButton", "muted");
            MuteChatButton.style = 'color: #32ff7e; font-weight: bold;';

            document.getElementById("ingamechatcontent").style = "display: none";
            document.getElementById("newbonklobby_chat_content").style = "display: none";
        };
    };
};
// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', Notification);
else Notification();

function Notification() {
    var notification = document.querySelector('#notification');
    var notificationSpan = document.querySelector('#notificationSpan');
    const version = "2.5";

    setTimeout(() => {
        notification.style = 'display: block;';
        notificationSpan.innerHTML = `VOCÊ ESTÁ UTILIZANDO A VERSÃO ${version}!`;
        setTimeout(() => {
            notification.style = 'display: none;';
        }, 4000)
    }, 500);
};
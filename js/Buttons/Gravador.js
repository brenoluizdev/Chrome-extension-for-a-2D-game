// Criado & desenvolvido por BlackBL
// Todos os direitos autorais reservados

if (document.readyState == "loading") document.addEventListener('DOMContentLoaded', Gravar);
else Gravar();

function Gravar() {
    const gravadorButton = document.querySelector('#gravadorButton');
    const notification = document.querySelector('#notification');
    const notificationSpan = document.querySelector('#notificationSpan');
    const GravadorButtonMainContainer = document.querySelector('#containerButtonMainGravar');
    
    GravadorButtonMainContainer.addEventListener('click', async function () {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
    
        const dadosarmazenados = [];
        const mediarecorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9' });

        mediarecorder.ondataavailable = (e) =>
            dadosarmazenados.push(e.data);
        (e) => dadosarmazenados.push(e.data);
    
        setTimeout(() => {
            notification.style = 'display: block;';
            notificationSpan.innerHTML = `BT - Gravação iniciada!`;
            setTimeout(() => {
                notification.style = 'display: none;';
            }, 4000);
        }, 500);

        mediarecorder.onstop = () => {
            const streamTrack = stream.getVideoTracks()[0];
            streamTrack.stop();
    
            const blob = new Blob(dadosarmazenados, { type: "video/mp4" });
            const a = window.document.createElement("a");

            a.href = URL.createObjectURL(blob);
            a.download = "BonkToolsRecorded.mp4";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            setTimeout(() => {
                notification.style = 'display: block;';
                notificationSpan.innerHTML = `BT - Gravação finalizada!`;
                setTimeout(() => {
                    notification.style = 'display: none;';
                }, 4000);
            }, 500);
        };
        mediarecorder.start();
    });

    gravadorButton.addEventListener('click', async function () {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
    
        const dadosarmazenados = [];
        const mediarecorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9' });

        mediarecorder.ondataavailable = (e) =>
            dadosarmazenados.push(e.data);
        (e) => dadosarmazenados.push(e.data);
    
        setTimeout(() => {
            notification.style = 'display: block;';
            notificationSpan.innerHTML = `BT - Gravação iniciada!`;
            setTimeout(() => {
                notification.style = 'display: none;';
            }, 4000);
        }, 500);

        mediarecorder.onstop = () => {
            const streamTrack = stream.getVideoTracks()[0];
            streamTrack.stop();
    
            const blob = new Blob(dadosarmazenados, { type: "video/mp4" });
            const a = window.document.createElement("a");

            a.href = URL.createObjectURL(blob);
            a.download = "BonkToolsRecorded.mp4";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            setTimeout(() => {
                notification.style = 'display: block;';
                notificationSpan.innerHTML = `BT - Gravação finalizada!`;
                setTimeout(() => {
                    notification.style = 'display: none;';
                }, 4000);
            }, 500);
        };
        mediarecorder.start();
    });
};
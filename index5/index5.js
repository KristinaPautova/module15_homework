const wsUri = "wss://echo.websocket.org/";


function pageLoaded() {
    const infoOutput = document.querySelector(".info_output");
    const chatOutput = document.querySelector(".chat_output");
    const input = document.querySelector("input");
    const sendBtn =document.querySelector(".btn_send");
    const linkBtn = document.querySelector(".btn_j-btn-test");

    let socket = new WebSocket(wsUri);

    socket.onopen = () => {
        infoOutput.innerText = "Соединение установлено";
    }

    socket.onmessage = (event) => {
        writeToChat(event.data, true);
    }

    socket.onerror = () => {
        infoOutput.innerText = "При передаче данных произошла ошибка";
    }
    const success = (position,isRecieved) => {
        console.log('position', position);
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        let messageHTML = `<a href = "https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank" class="${isRecieved? "recieved" : "sent"}">Ссылка на карту</a>`;
        chatOutput.innerHTML += messageHTML;
    }

    sendBtn.addEventListener("click", sendMessage);
    linkBtn.addEventListener("click", () => {
        if (!navigator.geolocation) {
            console.log('Geolocation не поддерживается вашим браузером');
        } else {
            console.log('Определение местоположения…');
            navigator.geolocation.getCurrentPosition(success);
        }
    });

    function sendMessage() {
        if (!input.value) return;
        socket.send(input.value);
        writeToChat(input.value, false);
        input.value === "";
    }

    function writeToChat(message, isRecieved) {
        let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
        chatOutput.innerHTML += messageHTML;
    }
}

document.addEventListener("DOMContentLoaded", pageLoaded);
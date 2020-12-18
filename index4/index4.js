const btn = document.querySelector(".j-btn-test");
const open = document.querySelector(".ol");
const timeNode = document.querySelector("#time");
const status = document.querySelector("#status");

const error = () => {

    status.textContent = "Информация о местоположении недоступна";
}

const success = (position) => {

    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`)
        .then((response) => response.json())
        .then((json) => {
            timeNode.textContent = `местные дата и время: ${json.date_time_txt}`;
            status.textContent = `временная зона, в которой находится пользователь: ${json.timezone}`
        })
}



btn.addEventListener('click', () => {
    status.textContent = '';
    screen.textContent = '';
    if(!navigator.geolocation){
        open.style.display = "block";
        status.textContent = "Информация о местоположении недоступна";

    }else{
        open.style.display = "block";
        status.textContent = 'Определяется местоположение ';
        navigator.geolocation.getCurrentPosition(success, error)

    }})
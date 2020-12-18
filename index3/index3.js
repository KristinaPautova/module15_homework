const btn = document.querySelector(".j-btn-test");
const open = document.querySelector(".ol");
const screen = document.querySelector("#screen");
const status = document.querySelector("#status");

const error = () => {

    status.textContent = "Информация о местоположении недоступна";
}

const success = (position) => {
    const width = window.screen.width;
    const height = window.screen.height;
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    status.textContent = `Координаты местонахождения: широта: ${latitude} , долгота: ${longitude} `;
    screen.textContent = `Размер экрана: широта: ${width} °, высота: ${height} °`
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
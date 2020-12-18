const btn = document.querySelector('.j-btn-test');
const empty = document.querySelector('.empty');
const filled = document.querySelector('.filled');

function changeIcon () {
    if(empty.style.display === "block"){
        filled.style.display = "block";
        empty.style.display = 'none';
    } else {
        filled.style.display = 'none';
        empty.style.display = "block";
    }
}

btn.addEventListener('click',changeIcon)
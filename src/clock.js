const clock = document.querySelector('#clock');

function clockNow(){
    const date = new Date();
    const year = String(date.getFullYear()).padStart(2,0);
    const month = String(date.getMonth()+1).padStart(2,0);
    const day = String(date.getDate()).padStart(2, 0);
    const hour = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    clock.innerText = `${year}년 ${month}월 ${day}일 ${hour}:${minutes}`;
}

clockNow();
setInterval(clockNow, 1000);
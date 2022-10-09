const body = document.querySelector('body');

function randomImg(){
    const random = Math.floor((Math.random() * 10 ) + 1);
    body.style.backgroundImage = `url(img/${random}.jpg)`;  
}

randomImg();
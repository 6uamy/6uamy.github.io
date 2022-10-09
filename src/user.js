const userForm = document.getElementById('user-form');
const userInput = userForm.querySelector('input');
const submit = userForm.querySelector('button');
const userName = document.querySelector('#user-name');
const inSite = document.querySelector('#inSite');
const logOut = document.querySelector('#log-out');

HIDDEN_DISPLAY = 'hidden';

function handleClick(event){
    event.preventDefault();
    const nickName = userInput.value;
    if(nickName === ''){
        alert('닉네임을 입력해주세요.');
    }else{
        localStorage.setItem('userName', userInput.value);
        paintUserName(userInput.value);
        userForm.classList.add(HIDDEN_DISPLAY);
        inSite.classList.remove(HIDDEN_DISPLAY);
    }
}

function paintUserName(name){
    userName.innerText = `${name}님 환영합니다!`;
    
    logOut.classList.remove(HIDDEN_DISPLAY)
}

function handleLogout(){
    localStorage.removeItem('userName');
    logOut.classList.add(HIDDEN_DISPLAY)
    userForm.classList.remove(HIDDEN_DISPLAY);
    inSite.classList.add(HIDDEN_DISPLAY);
}

submit.addEventListener('click', handleClick);

logOut.addEventListener('click', handleLogout);

const savedNickName = localStorage.getItem('userName');
if(savedNickName){
    paintUserName(savedNickName);
    userForm.classList.add(HIDDEN_DISPLAY);
} else{
    userForm.classList.remove(HIDDEN_DISPLAY);
    inSite.classList.add(HIDDEN_DISPLAY);
}
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form p input.Id");

const USERNAME_KEY = "username"

//const link = document.querySelector("a")

function onLoginSubmit(event) {
    event.preventDefault(); //submit의 디폴트값을 다 없애줌(새로고침)

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    console.log(username);
}

/*
function handleLinkClick(event) {
    event.preventDefault(); //링크를 클릭할 때 해당 링크로 이동하는 디폴트값 없애줌
    alert("clicked!");  //알림 창에 clicked 출력, ok누르면 계속 진행
}*/

//link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.addEventListener("submit", onLoginSubmit);
}

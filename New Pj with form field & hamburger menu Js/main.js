const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})


// A Hamburger menu that transitions on top left side
/* const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')
menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    nav.classList.toggle('navbar')
})
*/

let userName = document.getElementById("txtUserName");
let Email = document.getElementById("txtEmail");
let Pwd = document.getElementById("txtPwd");
let conPwd = document.getElementById("txtConPwd");
let form = document.querySelector("form");

function validateInput() {
    if (userName.value.trim() === "") {
        onError(userName, "User Name cannot be empty");
    } else {
        onSuccess(userName);
    }
    if (Email.value.trim() === "") {
        onError(Email, "Email cannot be empty");
    } else {
        if (!isValidEmail(Email.value.trim())) {
            onError(Email, "Email is not valid");
        } else {
            onSuccess(Email);
        }
    }
    if (Pwd.value.trim() === "") {
        onError(Pwd, "Password cannot be empty");
    } else {
        onSuccess(Pwd);
    }
    if (conPwd.value.trim() === "") {
        onError(conPwd, "Password cannot be empty");
    } else {
        if (Pwd.value.trim() !== conPwd.value.trim()) {
            onError(conPwd, "Password & Confirm password not matching!")
        } else {
            onSuccess(conPwd);
        }
    }

}
document.querySelector("button")
    .addEventListener("click", (event) => {
        event.preventDefault();
        validateInput();
    });
function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    parent.classList.add("success");
    parent.classList.remove("error");
}
function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.remove("success");
    parent.classList.add("error");
}
function isValidEmail(Email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email)
} 
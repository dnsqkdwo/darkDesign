const Login = document.getElementById("Login");
const closeLogin = document.getElementById("closeLogin");
const closeSignUp = document.getElementById("closeSignUp");
const loginModal = document.getElementById("loginModal");
const signUp = document.getElementById("signUp");
const signUpModal = document.getElementById("signUpModal");
const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");

Login.onclick = () => {
    loginModal.style.display = "block";
}

closeLogin.onclick = () => {
    loginModal.style.display = "none";
}

goSignup.onclick = () => {
    loginModal.style.display = "none";
    signUpModal.style.display = "block";
}

signUp.onclick = () => {
    signUpModal.style.display = "block";
}

closeSignUp.onclick = () => {
    signUpModal.style.display = "none";
}

goLogin.onclick = () => {
    signUpModal.style.display = "none";
    loginModal.style.display = "block";
}

// login/signUp form


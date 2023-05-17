const auth = {
    username: 'b201210078@sakarya.edu.tr',
    password: 'b201210078',
}
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', submit);


function submit(event) {
    event.preventDefault();
    if (usernameInput.value === auth.username && passwordInput.value === auth.password)
        redirect();
    else
        alert("Giriş Başarısız.");
}

function redirect() {
    alert("Giriş Başarılı.");
    window.location.href = "../about/about.html";
}
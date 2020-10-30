//login
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit',(e)=> {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const senha = loginForm['login-senha'].value;

    auth.signInWithEmailAndPassword(email,senha).then(cred => {
        console.log(cred.user)
        window.location.href= "../../../src/pages/Home/index.html";
        loginForm.reset();
    })
})

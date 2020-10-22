//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['email'].value;
    const password = signupForm['senha'].value;

    // sign up the user

    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        console.log(cred.user);
        window.location.href= "./pages/Login/index.html";
        signupForm.reset();
    });


})

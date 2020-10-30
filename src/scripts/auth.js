//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['email'].value;
    const password = signupForm['senha'].value;

    // sign up the user

    auth.createUserWithEmailAndPassword(email,password).then(cred => {

        return db.collection('users').doc(cred.user.uid).set({
            bio: signupForm['bio'].value,
        })
        
    }).then(() => {
        window.location.href= "./pages/Home/index.html";
        signupForm.reset();
    });


});


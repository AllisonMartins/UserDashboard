
//status

auth.onAuthStateChanged(user => {
    
    if (user) {
        //get data
        db.collection('guides').onSnapshot(snapshot => {
        setupGuides(snapshot.docs);
        setupUI(user);
},err => {
    console.log(err.message)
});
    }else {
        setupUI();
        setupGuides([]);
    }
});
//create guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    db.collection('guides').add({
        title: createForm['title'].value,
        content: createForm['content'].value
    }).then(() => {
        //close the modal and reset form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    })
})

// logout

const logout = document.getElementById('logout-id');

logout.addEventListener('click', (e)=> {
    e.preventDefault;

    auth.signOut().then(() =>{
        
        
    });
});
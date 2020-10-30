// guide list
const guidelist = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if(user) {
    //account info
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
      <div>Logged in as ${user.email} </div>
      <div> ${doc.data().bio}</div>
    `;

      accountDetails.innerHTML= html;
    })
    
    
    loggedInLinks.forEach(item => item.style.display= 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    //hide account info
    accountDetails.innerHTML= '';
    loggedInLinks.forEach(item => item.style.display= 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}
//setup guides
const setupGuides = (data) => {

  if(data.length){
  let html = '';
  data.forEach(doc =>{
    const guide = doc.data();
    const li = `
    <li>
        <div class="collapsible-header grey lighten-4"> ${guide.title}</div>
        <div class="collapsible-body white"><span>${guide.content}</span></div>
      </li>
    `;
    html += li
  })

  guidelist.innerHTML = html;
} else{
  guidelist.innerHTML = '<h5 class="center-align">Entre para ver guias</h5>'
}
}



// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });
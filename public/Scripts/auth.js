const signupButton = document.getElementById("signup-btn");
const logoutButton = document.getElementById("logout");
const loginButton = document.getElementById("login-btn");

// Authorization changes setup
auth.onAuthStateChanged(user => {
    if(user){
        setupNavLinks(user);
    } else{
        setupNavLinks();
    }
})
// Signup setup
if(signupButton){
    signupButton.addEventListener("click", function(){
        const signupEmail = document.getElementById("signup-email").value;
        const signupPassword = document.getElementById("signup-password").value;
        
        auth.createUserWithEmailAndPassword(signupEmail, signupPassword).then(cred => {
            $("#signupModal").modal("hide");
            alert("User created!");
        }).catch(err => {
            alert(err.message);
        });
    })
}
// Login setup
if(loginButton){
    loginButton.addEventListener("click", function(){
        const loginEmail = document.getElementById("login-email").value;
        const loginPassword = document.getElementById("login-password").value;
        
        auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(cred => {
            console.log("Logged in!");
            $("#loginModal").modal("hide");
        }).catch(err => {
            alert(err.message);
        });
    })
}
// Logout setup
if(logoutButton){
    logoutButton.addEventListener("click", function(){
        auth.signOut().then(() => {
            alert("Logged out successfully");
        });
    })
}
// Update email setup
const changeEmailBtn = document.getElementById("change-btn");
if(changeEmailBtn){
    changeEmailBtn.addEventListener("click", function(){
        const email = document.getElementById("change-email").value;
        var user = firebase.auth().currentUser;
        user.updateEmail(email).then(function() {
            $("#profileModal").modal("hide");
            alert("E-mail changed!");
          })
          .catch(err => {
            alert(err.message);
          });
      });
}
// Delete account
function deleteUser() {
    var user = firebase.auth().currentUser;
    user
      .delete()
      .then(function() {
        alert("Account deleted!");
        $("#profileModal").modal("hide");
      })
      .catch(err => {
        alert(err.message);
      });
  }


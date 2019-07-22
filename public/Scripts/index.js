// Setup navigation
const loggedInLinks = document.querySelectorAll(".logged-in");
const signInLink = document.querySelector(".logged");
const accountDetails = document.querySelector('.account-details');
const setupNavLinks = (user) => {
    if(user){
        loggedInLinks.forEach(item => item.style.display = "block");
        signInLink.style.display = "none";

        // Account details (profile info)
        const html = `
        <div>Logged in as ${user.email}</div>
        `;
        accountDetails.innerHTML = html;
    } else{
        loggedInLinks.forEach(item => item.style.display = "none");
        signInLink.style.display = "block";
        accountDetails.innerHTML = '';
    }
}

// Hide modals on signup/login form change
$(function () {
    $('.signupBtn').click(function() {
        $('#loginModal').one('hidden.bs.modal', function() {
            $('#signupModal').modal('show'); 
        }).modal('hide');
    });
});

$(function () {
    $('.loginLink').click(function() {
        $('#signupModal').one('hidden.bs.modal', function() {
            $('#loginModal').modal('show'); 
        }).modal('hide');
    });
});
// Clear forms on close
$("#signupModal").on("hidden.bs.modal", function(){
    $(this).find('input').val("");
})
$("#loginModal").on("hidden.bs.modal", function(){
    $(this).find('input').val("");
})
$("#profileModal").on("hidden.bs.modal", function(){
    $(this).find('input').val("");
})
$("#articleModal").on("hidden.bs.modal", function(){
    $(this).find('input').val("");
    $(this).find('textarea').val("");
})
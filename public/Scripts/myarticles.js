const myArticlesList = document.querySelector(".myarticles");
const user = auth.currentUser;
// Articles from db setup
if(user){
    
}
auth.onAuthStateChanged(user => {
    if(user){
        db.collection("articles").where("userID", "==", user.uid).onSnapshot(snapshot => {
            setupMyArticles(snapshot.docs);
        }, err => {
            alert(err.message);
        });
    } else{
        setupMyArticles([]);
    }
})

// Setup my articles
const setupMyArticles = (data) => {
    let html = "";
    if(data.length){
        data.forEach(doc => {
            const article = doc.data();
            const li = `
                <div class="container article" style="border: 1px solid;">
                <button type="button" class="close" onclick="deleteMyArticle('${doc.id}')">&times;</button>
                    <h1> ${article.title} </h1>
                    <p> ${article.content} </p>
                </div>
                <hr>
                
            `;
            html += li;
        });
        myArticlesList.innerHTML = html;
    } else {
        html = `
                <div class="container article" style="border: 1px solid;">
                    <h1> You have no articles at this moment. </h1>
                </div>
                <hr>
                
            `;
        myArticlesList.innerHTML = html;
    }
        
}
//Popravit funkciju da se moze pozvat iz setupMyArticles html buttona
function deleteMyArticle(id){
    db.collection("articles").doc(id).delete().then(function(){
        alert("Deleted successfully!");
    }).catch(err => {
        alert(err.message);
    })
}
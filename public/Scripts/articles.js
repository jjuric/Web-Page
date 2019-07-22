
const articlesList = document.querySelector(".articles");
// Articles from db setup
db.collection("articles").onSnapshot(snapshot => {
    setupArticles(snapshot.docs);
}, err => {
    alert(err.message);
});
// Setup articles
const setupArticles = (data) => {
    let html = "";
        data.forEach(doc => {
            const article = doc.data();
            const li = `
                <div class="container article" style="border: 1px solid;">
                    <h1> ${article.title} </h1>
                    <p> ${article.content} </p>
                </div>
                <hr>
                
            `;
            html += li;
        });
        articlesList.innerHTML = html;
}
// Create articles
const articleSubmit = document.getElementById("article-btn");
if(articleSubmit){
    articleSubmit.addEventListener("click", function(){
        db.collection("articles").add({
            title: document.getElementById("article-title").value,
            content: document.getElementById("article-body").value,
            userID: auth.currentUser.uid
        }).then(() => {
            $("#articleModal").modal("hide");
        }).catch(err => {
            alert(err.message);
        })
    } )
}




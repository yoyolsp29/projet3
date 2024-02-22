
function affichageEditor(editor, token, modifierProjets,logout, login) {
    if (token) {
        editor.style.display = null;
        modifierProjets.style.display = null;
        logout.style.display = null;
        login.style.display= "none";
        console.log("connecté")
    } else {
        console.log("non connecté")
    }

    //Eventlistener pour retirer le token lors du logout
    logout.addEventListener("click", () => {
        localStorage.removeItem("authToken");
        window.location.href="index.html";
    })
}



function affichageModale(modale, closeModale) {
    

    modale.innerHTML = `
        <div class="popup" style="display: null;">
            <div class="conteneur">
                <i class="fa-solid fa-x  btnFermerModale"></i>
                <h3>Galerie photo</h3>
                <div class="popupImage">
                </div>
                <hr />
                <button type="submit"class="btn_modale">Ajouter une photo </button>
            </div>
        </div>
        `;
    getProjets('http://localhost:5678/api/', 0, true)
    
    // EventListener pour le click en dehors de la popup
    const popup = document.querySelector(".popup");
    popup.addEventListener("click", (event) => {
        if (event.target == popup) {
            popup.style.display="none";
        }
    });

    // EventListener du bouton pour fermer la modale
    const btnCloseModale=document.querySelector(".btnFermerModale")
    btnCloseModale.addEventListener("click", () => {
        popup.style.display="none";
    });

}


//function closeModale (event, modale) {
//    event.preventDefault();
//    modale.close;
//}




function listenerModale( event) {
    let button = event.target.parentElement;
    let figure = button.parentElement;
    const projetId = button.dataset.id;
    const token = localStorage.authToken;

    const figureAccueil = document.querySelector(
        `figure[data-id="${projetId}"]`
    );
    
    
    //requete au serveur pour supprimer le projet
    fetch(`http://localhost:5678/api/works/${projetId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}`}
    })

    .then(function(response) {
        
        if(response.ok) {
            figure.remove();
            figureAccueil.remove();
            // retrouver l"élement dans la gallerie de la page d'accueil et le supprimer
        
        }
        else {
            alert("Impossible de supprimer le projet");
        }
    })
        

}



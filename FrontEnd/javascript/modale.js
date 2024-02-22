
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


function affichageModale(modale1, ajoutProjetModale) {
    

    modale1.innerHTML = `
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


    // Bouton pour passer à la 2ème modale
    const btnAjout = document.querySelector(".btn_modale")
    btnAjout.addEventListener("click", function(event) {
        popup.style.display="none";
        ajoutProjetModale();
    });
}



function ajoutProjetModale() {
    const modale2 = document.getElementById("modale2");
    modale2.innerHTML = `
    <div class= "popup2" style="display: null;">
        <div class="conteneur2">
            <div class="iconesModale2">
                <i class="fa-solid fa-arrow-left"></i>
                <i class="fa-solid fa-x  btnFermerModale2"></i>
            </div>
            <h3>Ajout photo</h3>
            <form id ="addProjet">
                <div class="selectionPhoto">
                    <label for="file" class="detailsImg">
                    <i class="fa-regular fa-image imgChargementIcone"></i>
                    <button>+ Ajouter photo</button>
                    <p>jpg, png : 4mo max</p>
                </div>
                <div class=infos_pic>
                    <label for="title">Titre</label><br>
                    <input type="text" id="title" name="title"><br>
                    <label for="categorieImg">Catégorie</label><br>
                    <select name="categorieImg" id="categorieImg">
                        <option value=""></option>
                        <option value="objets">Objets</option>
                        <option value="appartements">Appartements</option>
                        <option value="hotels&restaurants">Hôtels & restaurants</option>
                    </select>
                </div>
            </form>
            <hr />
            <button type="submit"class="btn_modale2">Valider </button>
        </div>
    </div>
    `;


    // EventListener pour le click en dehors de la popup
    const popup2 = document.querySelector(".popup2");
    popup2.addEventListener("click", (event) => {
        if (event.target == popup2) {
            popup2.style.display="none";
        }
    });

    // EventListener du bouton pour fermer la modale
    const btnCloseModale2=document.querySelector(".btnFermerModale2")
    btnCloseModale2.addEventListener("click", () => {
        popup2.style.display="none";
    });
}


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

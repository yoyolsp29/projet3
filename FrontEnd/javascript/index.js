document.addEventListener('DOMContentLoaded', (event) => {
    const btnTous = document.querySelector(".btn_tous");
    const baseUrl = 'http://localhost:5678/api/';
    
    getProjets(baseUrl);

    const filtres = document.querySelector(".filtres");
    getCategorie(baseUrl, filtres, btnTous);

    const login =document.querySelector(".login");
    const logout=document.querySelector(".logout");
    const editor = document.querySelector(".login_editor");
    const token = localStorage.authToken;
    const modale = document.getElementById("modale1");
    
    const modifierProjets = document.querySelector(".modifierProjets");
    const imgPopup = document.querySelector(".img_projets");
   
    affichageEditor(editor, token, modifierProjets, logout, login);   
   
    
    
    
    modifierProjets.addEventListener("click", function(event) {
        affichageModale(modale);
    })

})


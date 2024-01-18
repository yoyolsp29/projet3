document.addEventListener('DOMContentLoaded', (event) => {

    const baseUrl = 'http://localhost:5678/api/';
   

    getProjets(baseUrl);

    const filtres = document.querySelector(".filtres");
    getCategorie(baseUrl, filtres);
})

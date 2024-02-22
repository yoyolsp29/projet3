

function getProjets(baseUrl, idCategorie = 0, modale= false) {
    fetch(baseUrl+"works")
    .then(function (res) {
        return res.json()
    })
    .then(function (projets) {
        let gallery;
        if (modale==false ) {
            gallery = document.querySelector(".gallery");
        } else {
            gallery =document.querySelector(".popupImage");
     
        }
            

        // vider la partie gallerie
        gallery.innerHTML = "";

        if(idCategorie > 0) {

           projets =  projets.filter((projet) => projet.categoryId == idCategorie);
           console.log(projets);
        }

        projets.forEach((projet) => {
           if (modale==false) {
                // Gallery index
                gallery.innerHTML += `
                <figure class="figureAccueil" data-id="${projet.id}">
                    <img src="${projet.imageUrl}" alt="${projet.title}" data-id="${projet.id}">
                    <figcaption>${projet.title}</figcaption>
                </figure>`
                
           } else {
                // Gallery de la modale
                /*gallery.innerHTML += `
                <figure>
                <button class="corbeille" data-id="${projet.id}"><i class="fa-solid fa-trash-can"></i></button>
                <img src="${projet.imageUrl}" alt="${projet.title}" data-id="${projet.id}">
                </figure>`*/

                let figure = document.createElement('figure');
                

                let button = document.createElement('button');
                button.classList.add("corbeille");
                button.dataset.id = projet.id;

                let i = document.createElement('i');
                i.classList.add('fa-solid');
                i.classList.add('fa-trash-can');
                i.addEventListener("click", (event) => {
                        deleteProjet( event);
                });


                button.appendChild(i);
                
                figure.appendChild(button);

                let img = document.createElement('img');
                img.src = projet.imageUrl;
                img.alt = projet.title;

                figure.appendChild(img);

                gallery.appendChild(figure);



               
           }
            
        });
           
    })
}

function getCategorie(baseUrl, filtres , btnTous) {
    fetch(baseUrl+'categories')
    .then(function (res)  {
        return res.json()
    })
    .then(function (data) {
    
       for(categories in data) {
        let button = document.createElement("button");
        button.setAttribute("id", data[categories].id);
        button.innerHTML = data[categories].name;
        filtres.appendChild(button);
        button.addEventListener("click", (event) => {
            getProjets(baseUrl, event.target.id);
            
        })
       }
       
    })
    btnTous.addEventListener("click", function() {
        getProjets(baseUrl);
    })
}


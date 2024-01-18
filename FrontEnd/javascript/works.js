

function getProjets(baseUrl, idCategorie = 0) {
    fetch(baseUrl+"works")
    .then(function (res) {
        return res.json()
    })
    .then(function (projets) {
        

        const gallery = document.querySelector(".gallery");
        // vider la partie gallerie
        gallery.innerHTML = "";

        if(idCategorie > 0) {

           projets =  projets.filter((projet) => projet.categoryId = "'"+idCategorie+"'");
           console.log(projets);
        }

        projets.forEach((projet) => {
           
            gallery.innerHTML += `
            <figure>
				<img src="${projet.imageUrl}" alt="${projet.title}"}>
				<figcaption>${projet.title}</figcaption>
			</figure>
            `
        });
           
    })
}


function getCategorie(baseUrl, filtres) {
    fetch(baseUrl+'categories')
    .then(function (res)  {
        return res.json()
    })
    .then(function (data) {
        console.log(data)
    
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
}
      



//objets1.addEventListener("click", function (getProjets) {
 //   return data[projects].categoryId = 1
//})

//filtres.innerHTML += `
//<button id=${data[categories].id}   class=${data[categories].name}>${data[categories].name}</button>

//const newArray = getProjets

//console.log(newArray)
//newArray () => {
// for (projects in data) {
 //   objets1.addEventListener("click", function (getProjets) {
//        return data[projects].categoryId = 1
//    })
// }
//}

//for(categories in data) {
   // filtreObjets.addEventListener("click", function () {
      //  const filtre_objets = data[categories].filter(function (getCategorie) {
      //      return data[categories].id = 1;
      //  })
 //   })
//}


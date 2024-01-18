const url = 'http://localhost:5678/api/works';
const gallery = document.querySelector(".gallery");

const getProjets = () => {
    fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data)

        for(projects in data) {
            gallery.innerHTML += `
            <figure>
				<img src="${data[projects].imageUrl}" alt="${data[projects].title}"}>
				<figcaption>${data[projects].title}</figcaption>
			</figure>
            `
        }
    })
}

getProjets()

const filtres = document.querySelector(".filtres")


const getCategorie = () => {
    fetch('http://localhost:5678/api/categories')
    .then(function (res)  {
        return res.json()
    })
    .then(function (data) {
        console.log(data)
    
       for(categories in data) {
        filtres.innerHTML += `
        <button id=${data[categories].id}   class=${data[categories].name}>${data[categories].name}</button>
        `
       }
       let objets = document.getElementById("1")
       let appartements = document.getElementById("2")
       let hotels_restau = document.getElementById("3")

       console.log(objets)
       console.log(appartements)
       console.log(hotels_restau)
       
       objets.addEventListener("click", function (a) {
        return data[projects].categoryId = 1;

       appartements.addEventListener("click", function (a) {
        return data[projects].categoryId = 2;
       })
    })
      
    })
    
}
getCategorie();


//objets1.addEventListener("click", function (getProjets) {
 //   return data[projects].categoryId = 1
//})



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


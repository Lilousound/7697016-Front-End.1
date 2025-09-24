const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();


for (let i = 0; i < pieces.length; i++) {
  const sectionFiches = document.querySelector(".fiches");
  const pieceElement = document.createElement("article");
  const imageElement = document.createElement("img");
  const nomElement = document.createElement("h2");
  const prixElement = document.createElement("p");
  const categorieElement = document.createElement("p");
  const descriptionElement = document.createElement("p");
  const disponibiliteElement = document.createElement("p");
  imageElement.src = pieces[i].image;
  sectionFiches.appendChild(pieceElement);
  pieceElement.appendChild(imageElement);
  nomElement.innerText = pieces[i].nom;
  pieceElement.appendChild(nomElement);
  prixElement.innerText = `Prix: ${pieces[i].prix} € (${pieces[i].prix < 35 ? "€" : "€€€"})`;
  pieceElement.appendChild(prixElement);
  categorieElement.innerText = pieces[i].categorie ?? "(aucune catégorie)";
  pieceElement.appendChild(categorieElement);
  descriptionElement.innerText = pieces[i].description ?? "Pas de description pour le moment.";
  pieceElement.appendChild(descriptionElement);
  disponibiliteElement.innerText = pieces[i].disponibilite ? "En stock" : "Rupture de stock";
  pieceElement.appendChild(disponibiliteElement);
}

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function() {
  const piecesOrdonnees = Array.from(pieces);

  piecesOrdonnees.sort(function (a, b) {
    return a.prix - b.prix;
  });

  console.log(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function() {
  const piecesFiltrees = pieces.filter(function (piece) {
       return piece.prix <= 35;
 });
  console.log(piecesFiltrees);
 }) ;

const boutonDescription = document.querySelector(".btn-description");
boutonDescription.addEventListener("click", function() {
  const piecesAvecDescription = pieces.filter(function (piece) {
       return piece.description;
 });
  console.log(piecesAvecDescription);
 }) ;

const boutonTrierDec = document.querySelector(".btn-trier-dec");
boutonTrierDec.addEventListener("click", function() {
  const piecesOrdonneesDec = Array.from(pieces);

  piecesOrdonneesDec.sort(function (a, b) {
    return b.prix - a.prix;
  });

  console.log(piecesOrdonneesDec);
});


// MAP
const noms = pieces.map(piece => piece.nom);

for(let i = pieces.length -1 ; i >= 0; i--){
   if(pieces[i].prix > 35){
       noms.splice(i,1)
   }
}



//afficher les pieces abordables
const abordablesElements = document.createElement("ul");
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length; i++){
  const nomElement = document.createElement("li");
  nomElement.innerText = noms[i];
  abordablesElements.appendChild(nomElement);
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector(".abordables").appendChild(abordablesElements);


//afficher les pieces disponibles
const nomsDisponibles = pieces.map(piece => piece.nom);
const prixDisponibles = pieces.map(piece => piece.prix);

for(let i = pieces.length -1 ; i >= 0; i--){
  if (pieces[i].disponibilite === false){
    nomsDisponibles.splice(i,1)
    prixDisponibles.splice(i,1)
  }
}
const disponiblesElements = document.createElement("ul");
//Ajout de chaque nom à la liste
for(let i=0; i < nomsDisponibles.length; i++){
  const nomElement = document.createElement("li");
  nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
  disponiblesElements.appendChild(nomElement);
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector(".disponibles").appendChild(disponiblesElements);

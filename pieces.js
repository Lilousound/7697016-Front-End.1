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

let animaux = [
  {
    nom: "chat",
    longevite: "10 à 20",
    image:
      "https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/03/7c1b40313dae3d92dc4043eec621f85b2e07b9a8.jpeg",
    wiki: "https://fr.wikipedia.org/wiki/Chat",
    description: "le petit chat",
    aliments: ["croquette", "poulet"],
  },

  {
    nom: "chien",
    longevite: "10 à 13",
    image:"https://jardinage.lemonde.fr/images/dossiers/2021-01/adopter-gros-chien-091404.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Cat%C3%A9gorie:Chien",
    description: "le petit chien",
    aliments: ["croquette", "viande"],
  },

  {
    nom: "tigre",
    longevite: "8 à 10",
    image: "https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2021.2F12.2F06.2F432dacad-8fd7-4081-92ab-9929f54a87ec.2Ejpeg/1200x630/cr/wqkgU2hvb3RzYWxvdCAvIFdpa2ltZWRpYSBDb21tb25zIC8gR0VP/tigres-du-bengale-grace-a-4-000-cameras-le-nepal-lance-un-grand-recensement-de-ces-animaux-menaces.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Tigre_de_Sib%C3%A9rie",
    description: "le gros tigre",
    aliments: ["sanglier", "singe"],
  },

  {
    nom: "Elephant",
    longevite: 48,
    image:
      "https://lemagdesanimaux.ouest-france.fr/images/dossiers/2022-01/memoire-elephant-062647.jpg",
    wiki: "https://fr.wikipedia.org/wiki/%C3%89l%C3%A9phant_d%27Asie",
    description:
      "l'éléphant d'Asie  est un mammifère de la famille des éléphantidés",
    aliments: ["plantes", "fruits"],
  },

  {
    nom: "Lion",
    longevite: "15 à 16",
    image:
      "https://www.conservation-nature.fr/wp-content/uploads/2021/03/lion-600x450.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Lion_(astrologie)",
    description:
      "une espèce de mammifères carnivores de la famille des Félidés",
    aliments: ["zèbres", "girafe"],
  },

  {
    nom: "Girafe",
    longevite: 15,
    image:
      "https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FGEO.2Fvar.2Fgeo.2Fstorage.2Fimages.2Fmedia.2Fimages.2Fgirafe.2F2410391-1-fre-FR.2Fgirafe.2Ejpg/768x441/background-color/ffffff/quality/70/cinq-choses-que-vous-ne-saviez-pas-sur-la-girafe.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Girafe",
    description: "une espèce de mammifères ongulés artiodactyles",
    aliments: ["plantes", "fruits"],
  },
  {
    nom: "Panda",
    longevite: 20,
    image:
      "https://images.radio-canada.ca/q_auto,w_960/v1/ici-info/16x9/panda-geant-gros-plan-tete.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Panda",
    description:
      "est une espèce d'ours herbivore ou les autres espèces fossiles du genre Ailuropoda",
    aliments: ["Bambou", "Bambou"],
  },

  {
    nom: "Ecureuil",
    longevite: "15 à 18",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Nutkin.jpg",
    wiki: "https://fr.wikipedia.org/wiki/%C3%89cureuil",
    description:
      "est un nom vernaculaire ambigu qui désigne en français de nombreuses espèces de rongeurs grimpeurs de taille moyenne",
    aliments: ["Fruits", "Fleurs"],
  },

  {
    nom: "Souris",
    longevite: "5 à 7",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnNAWF4_tLX3BVzyfPvmj1a4JdtjSWxRZQKY5XM18tB7-FSEOXu2fd13CD_wEjwN59eg&usqp=CAU",
    wiki: "https://fr.wikipedia.org/wiki/Souris",
    description:
      "est un nom du vocabulaire courant qui peut désigner toutes sortes de mammifères rongeurs",
    aliments: ["Fruits", "Graines"],
  },

  {
    nom: "Zèbre",
    longevite: "10 à 20",
    image:
      "https://www.sciencesetavenir.fr/assets/img/2015/01/19/cover-r4x3w1000-57e155592330a-pourquoi-le-zebre-est-il-raye.jpg",
    wiki: "https://fr.wikipedia.org/wiki/Z%C3%A8bre",
    description:
      "ambigu en français, pouvant désigner plusieurs espèces différentes d'herbivores de la famille des équidés",
    aliments: ["Hèrbes", "Feuilles"],
  },
];

animaux.forEach(function (animal) {
  document.write(animal.nom);
  document.write(animal.longevite + "<br>");
  document.write(`
    <a href="${animal.wiki}">
    <img src ="${animal.image}" height="50px" width="50px" >
    </a>
    `)
});

document.write("<table border='1'>");
document.write(`
<tr class="div">
<th> Nom </th>
<th> longévité </th>
<th> image  </th>
<th> wiki </th>
<th> description </th>
<th> Aliments </th>
</tr>
`);


animaux.forEach(function (animal){
document.write("<tr>");
document.write(`<td>${animal.nom} </td>
`);

document.write(`<td >${animal.longevite} </td>
`);
document.write(`<td><img src ="${animal.image}" height="50px" width="50px" ></td>
`);
document.write(`<td><a href="${animal.wiki}" class="decoration">lien Wikipedia </a> </td>
`);

document.write(`<td>${animal.description } </td> 
`);


document.write("<td>");
document.write("<ul>");
animal.aliments.forEach(function(aliments){

document.write(`<li>${aliments}</li>`)

});
document.write("</ul>");
document.write("</td>");
})
document.write("</tr>");
document.write("</table>");

let age = 65
if (age==12){
    console.log("Près ado");}
    else if(age<12) {
        console.log(" aficher enfant")
    }
       
    else if(age >13 && age<18) {
        console.log(" ados")
    }

    else if(age >=18 && age <99) {
        console.log(" Majeur")
    }
    
    else if(age >60) {
        console.log("Bientot la retraite")
    }


    else  {
        console.log("age invalide")
    }

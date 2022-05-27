alert("Hello word !");
let nom = "Dupond";
let prenom = "TOTO";
let age = 27;
console.log(
  "Bonjour ! je suis :" + nom + " " + prenom + " , j'ai" + age + "ans !"
);
console.log(`Bonjour ! je suis ${nom} ${prenom} , j'ai ${age} ans! `);
console.log(prenom.substring(1, 2));

const nomComplet = "Julien La Garde";
console.log(nomComplet.split(""));

//Bonjour! je suis Dupond TOTO, j'ai 27 ans!

const adresseComplete = "Joh;,Doe;120 jefferson st.;Riverside; NJ; 08075";
console.log(adresseComplete.split(";"));

const csv = "Bonjour !  Je suis Dupond Toto , j'ai  99 ans !";
console.log(csv.split(" "));

let monTableau = [1, 5, 8, 4, 88, 56, 47, 52];
console.log(monTableau[0]);

let tableau = [1, 5, 4, 8, 2, 8, 63, 8, 5, 85];
console.log(tableau[0]);
console.log(tableau[2]);
console.log(tableau[3]);
console.log(tableau[4]);
console.log(tableau[5]);
console.log(tableau[6]);
console.log(tableau[7]);
console.log(tableau[8]);
console.log(tableau[9]);

let personnes = [
  {
    prenom: "Julien",
    nom: "La garde",
    age: 30,
    passions: ["foot", "natation", "jeux videos"],
    adresse: {
      rue: "rue Nationale",
      ville: "Lille",
      pays: "France",
    },
  },

  {
    prenom: "Sahar",
    nom: "La garde",
    age: 27,
    passions: ["sport", "musique", "lecture"],
    adresse: {
      rue: "rue solferino",
      ville: "Lille",
      pays: "France",
    },
  },
];
console.log(personnes);
console.log(personnes[1].age);


personnes[1].passions[2] = "Cobol";
console.log(personnes[1].passions[2]);

let nombres = [1,2,35,99,105];
nombres.forEach(function(element){
    document.write(element + "<br>");
});

nombres.forEach( (element) => {
    document.write(element + " ");
}
);


for (let i=nombres.length-1 ;i>=0 ; i--){
    document.write(nombres[i] + " ");

}


document.write("<br>");
for(let i=0 ; i< nombres.length; i++){
    document.write(nombres[i] + " ");

}
document.write("<br>");
let nombreRechercher=0;
let indice=0;
while(indice<nombres.length && nombreRechercher != 99){
nombreRechercher=nombres[indice];
document.write(nombreRechercher + "<br>");
indice++;
}

while(true){
    console.log("Vrai c'est une boucle infini");

}

let flag=true;
while(flag){
  flag=false;
  document.write("faux ce n'est pas une boucle infini");
}


let premiere= 4;
let deuxième= 18;
let temp=0;
console.log(">>>>>>>>>>> AVANT >>>>>>>>>>>");
console.log("premiere=", premiere);
console.log("deuxieme=", deuxième);
console.log("temps=" , temp);

temp=premiere;
premiere=deuxième;
deuxième=temp;

console.log(">>>>>>>>>>> APRES >>>>>>>>>>>");
console.log("premiere=", premiere);
console.log("deuxieme=", deuxième);
console.log("temps=" , temp);


console.log("<<<<<< TABLEAU <<<<<<<<<");
let numbers= [22,33,65,110,152,656456];

console.log(numbers[0]);
console.log(numbers[numbers.length-1]);

numbers.unshift(1);
numbers.push(007)

console.log(numbers[0]);
console.log(numbers[numbers.length-1]);

for(let i=0; i<numbers.length;i=i+1){const element=numbers[i];
document.write(` <br> iteration N°${i} donne element ${element} <br/>`) 
}

let i=0;
while(i<numbers.length){
    const element = numbers[i];
document.write(`<br/> while itération N°${i} => value = ${element} <br/>`); i++;
 }

 let uneValeur= 10;
 let indicateur=0;
 let check=true;
 while(check)
 {alert(`on n'est pas loin`+indicateur);
if(indicateur>uneValeur){
    check= false;
    alert(`Nous y sommes`);}
    indicateur ++;

}

let number=0;
const peopleNumber=() => {
    number=parseInt(prompt("combien de personnes?"));
    while(isNaN(number) || number<1){
        alert("une valeur numérique positive est requise");
        number=parseInt(prompt("combien de personnes"))
        return number;
    }
}

const testNumberForCovid=()=>{
    let nbPeople=peopleNumber();

    switch (true) {
        case number<=6:
            alert("c'est ok");
            break;
            case number>6:
                alert("c'est pas bon 135€");
            break;
        default:
            console.log("error");
            break;
    }
}

testNumberForCovid();

let maChaine = "Toto mange une cote de bœuf";

const changeString = (chaine) => {
  chaine = chaine.toLowerCase();

  let stringToChange = chaine.split("");

  stringToChange.forEach((element, i) => {
    if (i % 2 === 0) {
      stringToChange[i] = element.toUpperCase();
    }
  });
  document.write("<br/>" + stringToChange.join("") + "<br/>");
};

changeString(maChaine);
for(i=0;i<6;i++){
    changeString(prompt("votre chaine N°"+(i+1)));
}

changeString(prompt("votre chaine ?"));










